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
    View,
    Image
} from 'react-native';


type Props = {};
type State = {
    count: number
};

export default class App extends Component<Props, State> {

    constructor(props: Props) {
        console.log('SSU', 'App#constructor()');
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('SSU', 'App#componentDidMount()');
        // TODO 盛书强测试，删掉
        console.disableYellowBox = true
    }

    // shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
    //     debugger;
    //     console.log('SSU', 'App#shouldComponentUpdate()');
    //     return true;
    // }


    componentWillUnmount(): void {
        // debugger;
        console.log('SSU', 'App#componentWillUnmount()');
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // debugger;
        console.log('SSU', 'App#componentDidCatch()');
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null {
        // debugger;
        console.log('SSU', 'App#getSnapshotBeforeUpdate()');
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void {
        // debugger;
        console.log('SSU', 'App#componentDidUpdate()');
    }

    componentWillMount(): void {
        // debugger;
        console.log('SSU', 'App#componentWillMount()');
    }

    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        // debugger;
        console.log('SSU', 'App#componentWillReceiveProps()');
    }

    componentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void {
        // debugger;
        console.log('SSU', 'App#componentWillUpdate()');
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
    //     console.log('SSU', 'App#render()', {count: this.state.count});
    //     const ret = (
    //         <View style={{width: 300, height: 150, backgroundColor: 'red'}}>
    //             <View style={{width: 300, height: 150, backgroundColor: 'red'}}/>
    //             <View style={{width: 300, height: 150, backgroundColor: 'red'}}/>
    //         </View>
    //     );
    //     return ret;
    // }

    render() {
        console.log('SSU', 'App#render()', {count: this.state.count});
        return (
            <TouchableHighlight style={{width: 300, height: 150, backgroundColor: 'red'}} onPress={this.onPress}>
                {this.state.count % 2 === 0 ? <Text style={styles.txt}>{`点击数${this.state.count}`}</Text> :
                    <Image style={styles.img} source={{uri: 'http://demo.sc.chinaz.com/Files/pic/icons/5918/c12.png'}}/>}
            </TouchableHighlight>
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
