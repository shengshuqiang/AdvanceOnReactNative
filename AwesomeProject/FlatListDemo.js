/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    NativeModules,
    ToastAndroid,
    FlatList,
    Button,
    SectionList
} from 'react-native';


type Props = {};
type State = {
    count: number;
};
var ITEM_HEIGHT = 100;

const InitItems = [
    {
        id: 1
    }, {
        id: 2
    }, {
        id: 3
    }, {
        id: 2
    }
];

const SecondItems = [
    {
        id: 1
    }, {
        id: 4
    }, {
        id: 3
    }, {
        id: 4
    }
];


export default class App extends Component<Props> {

    constructor(props: P, context: any) {
        super(props, context);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        // TODO 盛书强测试，删掉
        console.disableYellowBox = true
    }

    getItemKey = (item, index) => {
        // return item.id;
        return index;
    }

    renderItem = ({ item, index }) => {
        // const key = this.getItemKey(item, index);
        const title = `${item.id}`;
        console.log('SSU', 'renderItem', title);
        return (
            <View style={{flex: 1, width: 50, height: 50,  justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{
                    position: 'absolute',
                    color: 'red',
                    backgroundColor: 'blue',
                    width: 50, height: 50
                }}>{title}</Text>
            </View>
        );
    }

    // renderSectionItem = (info) => {
    //     var txt = '第' + info.section.key + '/' + info.index + '个' + ' title=' + info.item.title;
    //     var bgColor = info.index % 2 == 0 ? 'red' : 'blue';
    //     return <Text style={[{flex: 1, height: 100, backgroundColor: bgColor}, styles.txt]}>{txt}</Text>
    // }

    // getItemLayout = (data, index: number) => ({length: 100, offset: index * 100, index})

    // render() {
    //     var data = [];
    //     for (var i = 0; i < 1000; i++) {
    //         data.push({key: i, title: i + ''});
    //     }
    //
    //     return (
    //         <View style={{flex: 1}}>
    //             <View style={{flex: 1}}>
    //                 <FlatList
    //                     initialNumToRender={1}
    //                     windowSize={2}
    //                     getItemLayout={this.getItemLayout}
    //                     renderItem={this.renderItem}
    //                     data={data}
    //                     stickyHeaderIndices={[0, 5, 10, 15, 20, 30, 40, 50, 60, 100]}>
    //                 </FlatList>
    //             </View>
    //
    //         </View>
    //     );
    // }

    keyExtractor = (item: ItemT, index: number) => {
        return '123';
    }
    onPress = () => {
        console.log('SSU', 'App#onPress()');

        this.setState({
            count: this.state.count + 1
        }, () => {
            // debugger;
        })
    }

    render() {
        const data = this.state.count % 2 === 0 ? InitItems : SecondItems;
        return (
            <View style={{flex: 1}}>
                <TouchableHighlight style={{width: 300, height: 150, backgroundColor: 'red'}} onPress={this.onPress}>
                    <Text style={styles.txt}>{`点击数:${this.state.count}`}</Text>
                </TouchableHighlight>
                <FlatList
                    style={{flex: 1}}
                    renderItem={this.renderItem}
                    data={data}>
                </FlatList>

            </View>
        );
    }

    renderSectionHeader(info) {

        var txt = '第' + info.section.key + '部分';
        return (
            <Text key={info.section.key} style={[{
                flex: 1,
                height: 150,
                textAlign: 'center',
                backgroundColor: '#21c6cd',
                color: '#fff'
            }, styles.txt]}>{txt}</Text>
        )
    }

    // render() {
    //     const sections = []
    //     for (var i = 0; i < 1000; i++) {
    //         let data = [];
    //         for (var j = 0; j < 5; j++) {
    //             data.push({key: j, title: i + '/' + j});
    //         }
    //         sections.push({data, key: i});
    //     }
    //
    //     return (
    //         <View style={{flex: 1}}>
    //             <SectionList
    //                 initialNumToRender={1}
    //                 windowSize={2}
    //                 stickySectionHeadersEnabled={true}
    //                 renderSectionHeader={this.renderSectionHeader}
    //                 getItemLayout={this.getItemLayout}
    //                 renderItem={this.renderSectionItem}
    //                 sections={sections}
    //             >
    //             </SectionList>
    //         </View>
    //     );
    // }
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
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }
});
