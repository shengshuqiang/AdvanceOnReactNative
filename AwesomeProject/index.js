/**
 * @format
 */

import {AppRegistry, NativeModules} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FlatListDemo from "./FlatListDemo";
import calendars from "./CalendarDemo/screens/calendars.js";
import agenda from "./CalendarDemo/screens/agenda.js";
import calendarsList from "./CalendarDemo/screens/calendarsList.js";
import expandableCalendar from "./CalendarDemo/screens/expandableCalendar.js";
import horizontalCalendarList from "./CalendarDemo/screens/horizontalCalendarList.js";

console.log('SSU', NativeModules.ToastAndroid);
debugger;
NativeModules.ToastAndroid = {
    show: function (msg) {
        console.log('SSU', msg);
    }
};
NativeModules.XXX = {
    xx: function (msg) {
        console.log('SSU', msg);
    }
};
console.log('SSU', NativeModules.ToastAndroid);
debugger;
AppRegistry.registerComponent(appName, () => {
    console.log('SSU', 'index#AppRegistry.registerComponent().componentProvider(){获取和native指定的已注册js入口代码}', appName);
    return App;
});
// AppRegistry.registerComponent(appName, () => FlatListDemo);
// AppRegistry.registerComponent(appName, () => calendars);
// AppRegistry.registerComponent(appName, () => agenda);
// AppRegistry.registerComponent(appName, () => calendarsList);
// AppRegistry.registerComponent(appName, () => expandableCalendar);
// AppRegistry.registerComponent(appName, () => horizontalCalendarList);
