/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
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
        return (
            <Calendar
                // Initially visible month. Default = Date()
                current={'2012-03-01'}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={'2012-05-10'}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={'2012-05-30'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => {console.log('selected day', day)}}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={(day) => {console.log('selected day', day)}}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'yyyy MM'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={(month) => {console.log('month changed', month)}}
                // Hide month navigation arrows. Default = false
                hideArrows={true}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                renderArrow={(direction) => (<Arrow />)}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}
                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={true}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                firstDay={1}
                // Hide day names. Default = false
                hideDayNames={true}
                // Show week numbers to the left. Default = false
                showWeekNumbers={true}
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={substractMonth => substractMonth()}
                // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
            />
        );
    }
}


const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }
});
