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

import React from 'react';
import decorate from '../../frontend/decorate';
import drawFiberTree from './FiberTree';

type Props = {
  fiberTreeInfos: any;
};

type State = {
  ratio: number;
  recordIndex: number;
};
const InitRatio = 1.0 * 0.48;
const RatioStep = InitRatio * 0.2;

class FiberTreeTab extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      ratio: InitRatio,
      recordIndex: this.props.fiberTreeInfos ? this.props.fiberTreeInfos.length - 1 : -1,
    };
  }

  draw(currentFiberID, fibers, doms, ratio) {
    // console.log('SSU', 'drawFiberTree', JSON.stringify(fibers));
    drawFiberTree(currentFiberID, fibers, doms, ratio);
  };

  onPressRatioAdd = () => {
    this.setState({
      ratio: this.state.ratio + RatioStep,
    });
  };

  onPressRatioSub = () => {
    this.setState({
      ratio: this.state.ratio - RatioStep,
    });
  };

  onPressRecord = (recordIndex) => {
    this.setState({
      recordIndex: recordIndex,
    });
  };

  onPressPlay = () => {
    this.play(0);
  };

  play = (recordIndex) => {
    this.setState({
      recordIndex,
    });
    if (recordIndex < this.props.fiberTreeInfos.length - 1) {
      setTimeout(() => {
        this.play(recordIndex + 1);
      }, 300);
    }
  };

  componentWillReceiveProps(
    nextProps: Props,
    nextContext: any,
  ) {
    // console.log('SSU', 'componentWillReceiveProps', `${this.props.fiberTreeInfo ? this.props.fiberTreeInfo.index : -1}_${nextProps.fiberTreeInfo ? nextProps.fiberTreeInfo.index : -1}`);
    if (nextProps.fiberTreeInfos) {
      this.setState({
        recordIndex: nextProps.fiberTreeInfos.length - 1,
      });
    }
  }

  render() {
    // const {fibers = null} = this.state.recordIndex >= 0 ? this.fiberTreeInfos[this.state.recordIndex] : {};

    const {currentFiberID, fibers = null, doms = null, desc = null} = this.props.fiberTreeInfos ?
      (this.state.recordIndex >= 0 && this.state.recordIndex < this.props.fiberTreeInfos.length ? this.props.fiberTreeInfos[this.state.recordIndex] : this.props.fiberTreeInfos[this.props.fiberTreeInfos.length - 1])
      : {};
    // console.log('SSU', 'FiberTreeTab#render', JSON.stringify(fibers));
    setTimeout(() => this.draw(currentFiberID, fibers, doms, this.state.ratio), 0);
    return (
      <div style={{overflow: 'scroll'}}>
        <div style={{display: 'flex', width: 2000}}>
          <div style={{
            width: 30,
            height: 30,
            backgroundColor: 'orange',
            borderRadius: 15,
            fontSize: 25,
            textAlign: 'center',
            color: 'red',
          }} onClick={this.onPressRatioAdd}>+
          </div>
          <div style={{
            width: 60,
            height: 30,
            backgroundColor: 'gray',
            borderRadius: 15,
            fontSize: 25,
            textAlign: 'center',
            color: 'red',
          }}>{this.state.ratio.toFixed(2)}</div>
          <div style={{
            width: 30,
            height: 30,
            backgroundColor: 'orange',
            borderRadius: 15,
            fontSize: 25,
            textAlign: 'center',
            color: 'red',
          }} onClick={this.onPressRatioSub}>-
          </div>
          <div style={{
            width: 100,
            height: 30,
            backgroundColor: 'purple',
            borderRadius: 15,
            marginLeft: 10,
            fontSize: 25,
            textAlign: 'center',
            color: 'red',
          }} onClick={this.onPressPlay}>Play
          </div>
          <div>{desc}</div>
        </div>
        <div style={{display: 'flex', overflow: 'scroll'}}>
          {this.props.fiberTreeInfos && this.props.fiberTreeInfos.map((fiberTreeInfo, recordIndex) => {
            return (
              <div style={{
                width: 60,
                height: 30,
                backgroundColor: this.state.recordIndex === recordIndex ? 'purple' : 'gray',
                borderRadius: 15,
                fontSize: 25,
                textAlign: 'center',
                marginLeft: 10,
                color: 'blue',
              }} onClick={() => {
                this.onPressRecord(recordIndex);
              }}>
                {((Array(3).join('~') + fiberTreeInfo.index).slice(-3) + Array(3).join('~')).slice(0, 5)}
              </div>
            );
          })}
        </div>
        <canvas id="myCanvas" width="5000" height="5000">
          Your browser does not support the canvas element.
        </canvas>
      </div>
    );
  };
};


export default decorate({
  store: 'fiberTreeStore',
  listeners: () => [
    'sendFiberTree',
  ],
  props(store) {
    return {
      fiberTreeInfos: store.fiberTreeInfos,
    };
  },
}, FiberTreeTab);
