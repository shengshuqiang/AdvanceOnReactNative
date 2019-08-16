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
import type Store from '../../frontend/Store';

const React = require('react');
const provideStore = require('../../frontend/provideStore');
const FiberTreeStore = require('./FiberTreeStore');
const FiberTreeTab = require('./FiberTreeTab').default;
const StoreWrapper = provideStore('fiberTreeStore');

class FiberTreePlugin {
    bridge: Bridge;
    profilingIsSupported: boolean;
    store: Store;
    fiberTreeStore: FiberTreeStore;

    constructor(store: Store, bridge: Bridge, refresh: () => void) {
        this.bridge = bridge;
        this.store = store;
        this.profilingIsSupported = false;
        this.fiberTreeStore = new FiberTreeStore(bridge, store);

        // The Profiler backend will notify us if/when it detects a profiling capable React build.
        // This is an async check, because roots may not have been registered yet at this time.
        bridge.onCall('sendFiberTree', (profilingIsSupported: boolean) => {
            refresh();
        });
    }

    panes(): Array<(node: Object, id: string) => React$Element<any>> {
        return [];
    }

    teardown() {
    }

    tabs(): ?{ [key: string]: () => React$Element<any> } {
        // setInterval(() => {
        //     const drawFiberTree = require("./FiberTree");
        //     // drawFiberTree();
        // }, 1000);
        return {
            'Fiber双树算法': () => (
                <StoreWrapper store={this.fiberTreeStore}>
                    {() => <FiberTreeTab />}
                </StoreWrapper>
            ),
        };
    }
}
module.exports = FiberTreePlugin;

