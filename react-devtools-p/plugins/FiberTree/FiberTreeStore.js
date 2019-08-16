/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */
'use strict';

import type Bridge from '../../agent/Bridge';
const {EventEmitter} = require('events');
class FiberTreeStore extends EventEmitter {
  _bridge: Bridge;
  _mainStore: Object;

    fiberTreeInfos;

  constructor(bridge: Bridge, mainStore: Object) {
    super();

    this._bridge = bridge;
    this._mainStore = mainStore;
    this._mainStore.on('sendFiberTree', this.handleFiberTree);
  }

  off() {
    // Noop
  }

    handleFiberTree = () => {
        this.fiberTreeInfos = this._mainStore.fiberTreeInfos;
        this.emit('sendFiberTree', this.fiberTreeInfos);
    }
}

module.exports = FiberTreeStore;
