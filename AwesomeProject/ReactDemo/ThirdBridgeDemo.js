import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableWithoutFeedback,
    View,
    ToastAndroid,
    NativeModules,
    Image,
    requireNativeComponent
} from 'react-native';
import stopForInspection from './stopForInspection';

type Props = {};
type State = {
    count: number
};

const ReactNativeViewConfigRegistry = require('ReactNativeViewConfigRegistry');
// const SSUView = requireNativeComponent('SSUView');

export default class ThirdBridgeDemo extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        console.log('SSU2', 'App#constructor()', GLOBAL, ReactNativeViewConfigRegistry);
        // debugger;
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <Text style={{width: 200, height: 50, color: 'black'}}>'SSU'</Text>
        );
    }
}


const styles = StyleSheet.create({
    txt: {
        width: 300,
        height: 150,
        backgroundColor: 'red',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30
    },
    img: {
        width: 300,
        height: 150,
        backgroundColor: 'red',
        resizeMode: 'center'
    }
});
