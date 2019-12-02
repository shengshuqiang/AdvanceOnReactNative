/**
 * @format
 */

// import 'react-native';
// import React from 'react';
// import App from '../App';



// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
const isDebug = false;
const logMsg = isDebug ? require("./test1") : require("./test2");

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

logMsg('Hello SSU');
