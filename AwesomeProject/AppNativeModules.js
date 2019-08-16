/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableHighlight, NativeModules, ToastAndroid} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    onPress = () => {
        // NativeModules.ToastCustomAndroid.callBackFunction(
        //     true,
        //     (a, b, c, d, e) => {
        //         debugger
        //         ToastAndroid.show('pressed+++true;' + a + "," + b + "," + c + "," + d + "," + e, 1);
        //     },
        //     (a, b, c, d, e) => {
        //         debugger
        //         ToastAndroid.show('pressed++++false;' + a + "," + b + "," + c + "," + d + "," + e, 1);
        //     }
        // )

        console.log('NativeModules.ToastCustomAndroidPromise.promiseCallbackTest', new Date().getTime())
        NativeModules.ToastCustomAndroidPromise.promiseCallbackTest(false).then(
            (value)=>{
                ToastAndroid.show("promise返回值为"+value,1);
            },
            (message)=>{
                debugger
                console.log('NativeModules.ToastCustomAndroidPromise.promiseCallbackTest callback', new Date().getTime())
                ToastAndroid.show("rejected"+message,1);
            }
        )
    }

    render() {
        return (
            <TouchableHighlight onPress={this.onPress}>
                <Text style={styles.instructions}>To get started, edit App.js
                    <Image
                        style={{width: 50, height: 50}}
                        source={{uri: 'https://p0.meituan.net/travelcube/dd43bbb9399a6a0f4e7f215ddda05c264482.png'}}
                    />
                </Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        height: 100
    },
});
