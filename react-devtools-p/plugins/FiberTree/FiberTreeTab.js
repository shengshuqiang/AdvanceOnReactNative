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
const LifecycleMethods: string[] = ['constructor',
  'getDerivedStateFromProps',
  'componentWillMount', 'UNSAFE_componentWillMount',
  'componentWillReceiveProps', 'UNSAFE_componentWillReceiveProps',
  'shouldComponentUpdate',
  'componentWillUpdate', 'UNSAFE_componentWillUpdate',
  'render',
  'getSnapshotBeforeUpdate',
  'componentDidMount',
  'componentDidUpdate',
  'componentWillUnmount'];

const ComponentPrototypes: string[] = [
  'isReactComponent',
  'setState',
  'forceUpdate',
];
const IndexComponent = ({runRecordRootNodes, onPress, curRecordIndex}) => {
  let component = null;
  if (runRecordRootNodes) {
    const groups = [];
    let items = [];
    let rootRecord = null;
    runRecordRootNodes.forEach((runRecordRootNode, recordIndex) => {
      if (rootRecord === null || runRecordRootNode.title !== rootRecord) {
        rootRecord = runRecordRootNode.title;
        if (items.length > 0) {
          groups.push(
            <div style={{display: 'flex', overflow: 'scroll'}}>
              {items}
            </div>
          );
          items = [];
        }
      } else {
        items.push(
          <div style={{
            width: 60,
            height: 30,
            backgroundColor: curRecordIndex === recordIndex ? 'purple' : 'gray',
            borderRadius: 15,
            fontSize: 25,
            textAlign: 'center',
            marginLeft: 10,
            color: 'blue',
          }} onClick={() => (onPress(recordIndex))}>
            {((Array(3).join('~') + recordIndex).slice(-3) + Array(3).join('~')).slice(0, 5)}
          </div>
        );
      }
    });

    if (items.length > 0) {
      groups.push(
        <div style={{display: 'flex', overflow: 'scroll'}}>
          {items}
        </div>,
      );
    }

    component = (
      <div>
        {groups}
      </div>
    );
  }

  console.log('SSU', 'IndexComponent', component);
  return component;
};

class FiberTreeTab extends React.Component<Props, State> {
  runRecordRootNodes: any[];

  constructor(props: Props) {
    super(props);
    this.state = {
      ratio: InitRatio,
      recordIndex: this.props.fiberTreeInfos ? this.props.fiberTreeInfos.length - 1 : -1,
    };
    this.refershRunRecordRootNodes(props.fiberTreeInfos);
  }

  draw(currentFiberID, fibers, doms, runRecordRootNode, ratio) {
    // console.log('SSU', 'drawFiberTree', JSON.stringify(fibers));
    drawFiberTree(currentFiberID, fibers, doms, runRecordRootNode, ratio);
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

    if (this.props.fiberTreeInfos !== nextProps.fiberTreeInfos) {
      this.refershRunRecordRootNodes(nextProps.fiberTreeInfos);
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (e) => {
    let {recordIndex} = this.state;
    switch (e.keyCode) {
      case 37: //左
      case 38: //上
        recordIndex--;
        break;
      case 39: //右
      case 40: //下
        recordIndex++;
        break;
    }

    const fiberTreeInfosLength = this.props.fiberTreeInfos ? this.props.fiberTreeInfos.length : 0;
    recordIndex += fiberTreeInfosLength;
    recordIndex %= fiberTreeInfosLength;
    this.setState({
      recordIndex,
    });
  };

  // buildRunRecordTree(fiberTreeInfos, recordIndex) {
  //   let runRecordRootNode = {
  //     title: '起点',
  //     parent: null,
  //     children: [],
  //   };
  //   if (fiberTreeInfos && recordIndex >= 0 && recordIndex < fiberTreeInfos.length) {
  //     for (let i = 0; i <= recordIndex; i++) {
  //       let parentRunRecordNode = runRecordRootNode;
  //       const {runRecordStack} = fiberTreeInfos[i];
  //       const highLight = (i === recordIndex);
  //       runRecordStack && runRecordStack.forEach((runRecord) => {
  //         let runRecordNode = parentRunRecordNode.children.find((child) => (child.title === runRecord));
  //         if (runRecordNode) {
  //           runRecordNode.highLight = highLight;
  //         } else {
  //           runRecordNode = {
  //             title: runRecord,
  //             parent: parentRunRecordNode,
  //             children: [],
  //             highLight,
  //           };
  //           parentRunRecordNode.children.push(runRecordNode);
  //         }
  //         parentRunRecordNode = runRecordNode;
  //       });
  //     }
  //   }
  //
  //   return runRecordRootNode;
  // }

  getMatchRunRecordTitle(title) {
    if (title) {
      const index = title.indexOf('(');
      if (index != -1) {
        return title.substring(0, index);
      }
    }

    return title;
  }

  isRunRecordTitleEqual(title1: string, title2: string) {
    return this.getMatchRunRecordTitle(title1) === this.getMatchRunRecordTitle(title2);
  }

  buildRunRecordBoxColor(runRecord: string) {
    if (LifecycleMethods.includes(runRecord)) {
      return 'red';
    } else if (ComponentPrototypes.includes(runRecord)) {
      return 'darkorange';
    } else if (runRecord.startsWith('UIManager.')) {
      return 'blue';
    } else if (runRecord.includes('.effectTag')) {
      return 'green';
    }

    return null;
  }

  refershRunRecordRootNodes(fiberTreeInfos) {
    this.runRecordRootNodes = [];
    fiberTreeInfos && fiberTreeInfos.forEach((fiberTreeInfo, index) => {
      const preRunRecordHistory = index > 0 ? fiberTreeInfos[index - 1].runRecordHistory : null;
      const {runRecordHistory} = fiberTreeInfo;
      const runRecordRootNode = this.buildRunRecordHistoryTree(runRecordHistory, preRunRecordHistory ? preRunRecordHistory.length : -1);
      this.runRecordRootNodes.push(runRecordRootNode);
    });
  }

  buildRunRecordHistoryTree(runRecordHistory, preHistoryCount) {
    let runRecordRootNode = null;
    // let runRecordRootNode = {
    //     title: '起点',
    //     parent: null,
    //     children: [],
    // };
    let runRecordParentNode = runRecordRootNode;
    if (runRecordHistory && runRecordHistory.length) {
      runRecordHistory.forEach((runRecord, index) => {
        const boxColor = this.buildRunRecordBoxColor(runRecord);
        const isPatch = index > preHistoryCount;
        let runRecordNode;
        if ('pop()' === runRecord) {
          runRecordNode = runRecordParentNode;
          runRecordNode.highLight = false;
          runRecordNode.isPatch = isPatch;
          runRecordParentNode = runRecordNode.parent;
        } else {
          if (runRecordParentNode) {
            runRecordNode = runRecordParentNode.children.find((child) => (this.isRunRecordTitleEqual(child.title, runRecord)));
            if (runRecordNode) {
              // do nothing
              runRecordNode.title = runRecord;
              runRecordNode.count++;
            } else {
              runRecordNode = {
                title: runRecord,
                parent: runRecordParentNode,
                children: [],
                highLight: true,
                count: 1,
                boxColor,
                isPatch: false,
              };
              runRecordParentNode.children.push(runRecordNode);
            }
            runRecordNode.highLight = true;
            runRecordNode.isPatch = false;
            runRecordParentNode = runRecordNode;
          } else {
            runRecordNode = {
              title: runRecord,
              parent: null,
              children: [],
              highLight: true,
              count: 1,
              boxColor,
              isPatch: false,
            };
            runRecordRootNode = runRecordNode;
            runRecordParentNode = runRecordNode;
          }
        }
      });
    }

    return runRecordRootNode;
  }

  render() {
    // const {fibers = null} = this.state.recordIndex >= 0 ? this.fiberTreeInfos[this.state.recordIndex] : {};

    const {currentFiberID, fibers = null, doms = null, desc = null} = this.props.fiberTreeInfos ?
      (this.state.recordIndex >= 0 && this.state.recordIndex < this.props.fiberTreeInfos.length ? this.props.fiberTreeInfos[this.state.recordIndex] : this.props.fiberTreeInfos[this.props.fiberTreeInfos.length - 1])
      : {};
    // const runRecordRootNode = this.buildRunRecordTree(this.props.fiberTreeInfos, this.state.recordIndex);
    const runRecordRootNode = this.state.recordIndex >= 0 ? this.runRecordRootNodes[this.state.recordIndex] : null;
    // console.log('SSU', 'FiberTreeTab#render', JSON.stringify(fibers));
    setTimeout(() => this.draw(currentFiberID, fibers, doms, runRecordRootNode, this.state.ratio), 0);
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
          <div>{`${desc}  【${this.state.recordIndex} / ${this.props.fiberTreeInfos ? this.props.fiberTreeInfos.length - 1 : 0}】`}</div>
        </div>
        <IndexComponent runRecordRootNodes={this.runRecordRootNodes} onPress={this.onPressRecord} curRecordIndex={this.state.recordIndex}/>
        <canvas id="myCanvas" width="10000" height="10000">
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
