/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableWithoutFeedback,
    View,
    Image
} from 'react-native';


type Props = {};
type State = {
    count: number
};

const LifecycleMethods: string[] = [
    'constructor',
    'componentWillMount', 'UNSAFE_componentWillMount',
    'componentWillReceiveProps', 'UNSAFE_componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate', 'UNSAFE_componentWillUpdate',
    'render',
    'getSnapshotBeforeUpdate',
    'componentDidMount',
    'componentDidUpdate',
    'componentWillUnmount'
];

const NewLifecycle: string[] = [
    'getSnapshotBeforeUpdate',
    'componentDidUpdate'
];

const DeprecatedLifecycle: string[] = [
    'componentWillMount', 'UNSAFE_componentWillMount',
    'componentWillReceiveProps', 'UNSAFE_componentWillReceiveProps',
    'componentWillUpdate', 'UNSAFE_componentWillUpdate'
];

const ComponentLifecycle: string[] = [
    ... NewLifecycle,
    ... DeprecatedLifecycle,
    'componentDidMount',
    'shouldComponentUpdate',
    'componentWillUnmount',
    'componentDidCatch'
];

class NewLifecycleComponent extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        console.log('SSU', '0. App#Render Phase NormalLifecycle Methods#constructor()');
    }

    static getDerivedStateFromProps(nextProps: Readonly<P>, prevState: S) {
        console.log('SSU', `1. App#Render Phase NewLifecycle Methods#getDerivedStateFromProps()`, nextProps, prevState);
        return prevState;
    }

    componentDidMount() {
        console.log('SSU', '2. App#Commit Phase NormalLifecycle Methods#componentDidMount()');
        // TODO 盛书强测试，删掉
        console.disableYellowBox = true
    }

    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        // debugger;
        console.log('SSU', `3. App#Render Phase NormalLifecycle Methods#shouldComponentUpdate()`, nextProps, nextState, nextContext);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null {
        // debugger;
        console.log('SSU', `4. App#Commit Phase NewLifecycle Methods#getSnapshotBeforeUpdate()`, prevProps, prevState);
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void {
        // debugger;
        console.log('SSU', `5. App#Commit Phase NewLifecycle Methods#componentDidUpdate()`, prevProps, prevState, snapshot);
    }

    componentWillUnmount(): void {
        // debugger;
        console.log('SSU', '6. App#Commit Phase NormalLifecycle Methods#componentWillUnmount()');
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // debugger;
        console.log('SSU', '7. App#Commit Phase NormalLifecycle Methods#componentDidCatch()');
    }
}

class DeprecatedLifecycleComponent extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        console.log('SSU', '0. App#Render Phase NormalLifecycle Methods#constructor()');
    }

    componentWillMount(): void {
        // debugger;
        console.log('SSU', '1. App#Render Phase DeprecatedLifecycle Methods#componentWillMount()');
    }

    UNSAFE_componentWillMount(): void {
        // debugger;
        console.log('SSU', '2. App#Render Phase DeprecatedLifecycle Methods#UNSAFE_componentWillMount()');
    }

    componentDidMount() {
        console.log('SSU', '3. App#Commit Phase NormalLifecycle Methods#componentDidMount()');
        // TODO 盛书强测试，删掉
        console.disableYellowBox = true
    }

    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        // debugger;
        console.log('SSU', `3.1. App#Render Phase DeprecatedLifecycle Methods#componentWillReceiveProps()`, nextProps, nextContext);
    }

    UNSAFE_componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        // debugger;
        console.log('SSU', `3.2. App#Render Phase DeprecatedLifecycle Methods#UNSAFE_componentWillReceiveProps()`, nextProps, nextContext);
    }

    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        // debugger;
        console.log('SSU', `4. App#Render Phase NormalLifecycle Methods#shouldComponentUpdate()`, nextProps, nextState, nextContext);
        return true;
    }

    componentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void {
        // debugger;
        console.log('SSU', `5. App#Render Phase DeprecatedLifecycle Methods#componentWillUpdate()`, nextProps, nextState, nextContext);
    }

    UNSAFE_componentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void {
        // debugger;
        console.log('SSU', `6. App#Render Phase DeprecatedLifecycle Methods#UNSAFE_componentWillUpdate()`, nextProps, nextState, nextContext);
    }

    componentWillUnmount(): void {
        // debugger;
        console.log('SSU', '7. App#Commit Phase NormalLifecycle Methods#componentWillUnmount()');
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // debugger;
        console.log('SSU', '8. App#Commit Phase NormalLifecycle Methods#componentDidCatch()');
    }
}

// export default class App extends NewLifecycleComponent<Props, State> {
export default class App extends DeprecatedLifecycleComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        // debugger;
        console.log('SSU', 'App#constructor()');
        this.state = {
            count: 0
        }
    }

    onPress = () => {
        // debugger;
        console.log('SSU', 'App#onPress()');

        this.setState({
            count: this.state.count + 1
        }, () => {
            // debugger;
        })
    }

    // render() {
    //     debugger;
    //     console.log('SSU', 'LifecycleMethods#render()', {count: this.state.count});
    //     const ret = (
    //         <View style={{width: 300, height: 150, backgroundColor: 'red'}}>
    //             <View style={{width: 300, height: 150, backgroundColor: 'red'}}/>
    //             <View style={{width: 300, height: 150, backgroundColor: 'red'}}/>
    //         </View>
    //     );
    //     return ret;
    // }

    render() {
        console.log('SSU', 'App#Render Phase NormalLifecycle Methods#render()', {count: this.state.count}, this.props, this.state);
        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={{width: 300, height: 150, backgroundColor: 'red'}}>
                    {this.state.count % 2 === 0 ? <Text style={styles.txt}>{`点击数${this.state.count}`}</Text> :
                        <Image style={styles.img}
                               source={{uri: 'http://demo.sc.chinaz.com/Files/pic/icons/5918/c12.png'}}/>}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    },
    img: {
        width: 100,
        height: 100
    }
});
