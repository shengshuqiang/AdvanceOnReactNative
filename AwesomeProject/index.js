/**
 * @format
 */
import React from 'react';
import { AppRegistry, Text, View, NativeModules, requireNativeComponent } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FlatListDemo from "./ReactDemo/FlatListDemo";
import calendars from "./CalendarDemo/screens/calendars.js";
import agenda from "./CalendarDemo/screens/agenda.js";
import calendarsList from "./CalendarDemo/screens/calendarsList.js";
import expandableCalendar from "./CalendarDemo/screens/expandableCalendar.js";
import horizontalCalendarList from "./CalendarDemo/screens/horizontalCalendarList.js";

// console.log('SSU', NativeModules.ToastAndroid);
// debugger;
// NativeModules.ToastAndroid = {
//     show: function (msg) {
//         console.log('SSU', msg);
//     }
// };
// NativeModules.XXX = {
//     xx: function (msg) {
//         console.log('SSU', msg);
//     }
// };
// console.log('SSU', NativeModules.ToastAndroid);
// debugger;
AppRegistry.registerComponent('AwesomeProject', () => {
    return class HelloSSUComponent extends React.PureComponent {
        isFirst = true;
        constructor(){
            super();
        }

        componentDidMount(): void {
            setTimeout(() => {
                this.forceUpdate();
            }, 1000);
        }

        render() {
            if (this.isFirst) {
                this.isFirst = false;
                const RCTView = 'RCTView';
                return <RCTView style={ { width: 100, height: 100, backgroundColor: 'blue' } }/>;
            } else {
                requireNativeComponent('SSUView');
                const SSUView = 'SSUView';
                console.log('SSUView', SSUView);
                return <SSUView style={{width: 100, height: 100}}/>;
            }
        }
    };
    // return function HelloSSUTextFunc () {
    //     // const rawSSUToastAndroid = NativeModules.SSUToastAndroid;
    //     // Object.defineProperty(NativeModules, 'SSUToastAndroid', {
    //     //     get() {
    //     //         console.log('HelloSSUTextFunc', '监听到正在获取属性SSUToastAndroid的值');
    //     //         alert('监听到正在获取属性SSUToastAndroid的值');
    //     //         return rawSSUToastAndroid;
    //     //     }
    //     // });
    //     // const rawSSUView = NativeModules.UIManager.SSUView;
    //     // console.log('HelloSSUTextFunc', NativeModules.UIManager);
    //     // console.log('HelloSSUTextFunc', SSUView);
    //     // Object.defineProperty(NativeModules.UIManager, 'SSUView', {
    //     //     get() {
    //     //         debugger;
    //     //         console.log('HelloSSUTextFunc', '监听到正在获取属性SSUView的值');
    //     //         alert('监听到正在获取属性SSUView的值');
    //     //         return rawSSUView;
    //     //     }
    //     // });
    //     // const rawRequireNativeComponent = requireNativeComponent;
    //     // requireNativeComponent = function (name) {
    //     //     console.log('HelloSSUTextFunc', '监听到正在获取属性SSUView的值');
    //     //     alert('监听到正在获取属性SSUView的值');
    //     //     return rawRequireNativeComponent(name);
    //     // };
    //     // debugger;
    //     // NativeModules.SSUToastAndroid;
    //     // console.log('HelloSSUTextFunc', NativeModules.SSUToastAndroid);
    //     const RCTView = 'RCTView';
    //     return <RCTView style={{width: 100, height: 100, backgroundColor: 'blue'}}/>;
    //     // requireNativeComponent('SSUView');
    //     // const SSUView = 'SSUView';
    //     // console.log('SSUView', SSUView);
    //     // return <SSUView style={{width: 100, height: 100}}/>;
    // };
});
// AppRegistry.registerComponent('AwesomeProject', () => ThirdBridgeDemo);
// AppRegistry.registerComponent(appName, () => FlatListDemo);
// AppRegistry.registerComponent(appName, () => calendars);
// AppRegistry.registerComponent(appName, () => agenda);
// AppRegistry.registerComponent(appName, () => calendarsList);
// AppRegistry.registerComponent(appName, () => expandableCalendar);

// AppRegistry.registerComponent(appName, () => horizontalCalendarList);
