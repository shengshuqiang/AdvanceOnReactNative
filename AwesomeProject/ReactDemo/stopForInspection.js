const UIManagerAPI = 'UIManager';
const RNBridgeAPIs = [
    UIManagerAPI,
    'SourceCode',
    'LocationObserver',
    'TimePickerAndroid',
    'Networking',
    'WebSocketModule',
    'ToastAndroid',
    'AccessibilityInfo',
    'BlobModule',
    'HeadlessJsTaskSupport',
    'JSCSamplingProfiler',
    'IntentAndroid',
    'NetInfo',
    'I18nManager',
    'DeviceInfo',
    'AsyncSQLiteDBStorage',
    'PermissionsAndroid',
    'PlatformConstants',
    'AppState',
    'NativeAnimatedModule',
    'ExceptionsManager',
    'CameraRollManager',
    'Vibration',
    'DeviceEventManager',
    'ImageStoreManager',
    'FileReaderModule',
    'DialogManagerAndroid',
    'ImageEditingManager',
    'DatePickerAndroid',
    'Timing',
    'JSCHeapCapture',
    'Clipboard',
    'ImageLoader',
    'StatusBarManager',
    'ShareModule',
];

const MRNBridgeAPIs = [
    ...RNBridgeAPIs,
    'getCurrentPosition',
    'MRNSNTPModule',
    'MRNNativeCall',
    'bindingx',
    'Toast',
    'MRNMonitorModule',
    'MRNPageLoadBridgeModule',
    'NativeLogger',
    'MRNNetwork',
    'MRNEnvironment',
    'MRNPageRouter',
    'JSCSamplingProfiler',
    'MRNViewModule',
    'MRNUtilsModule',
    'MRNPreLoadModule',
    'MRNABTestStrategyModule',
    'MRNDebugModule',
    'MRNStatistics',
    'MRNAlert',
    'RNSVGSvgViewManager',
    'MRNObtainOptimizerNodeModule',
    'MRNContainerControl',
    'MCCommonModule',
    'JSDevSupport',
    'MRNWarmUpModule',
    'MRNPageSwitch',
    'MRNBundleModule',
];

const RNBridgeComponents = [
    'AndroidSwitch',
    'AccessibilityEventTypes',
    'ARTGroup',
    'AndroidHorizontalScrollView',
    'genericDirectEventTypes',
    'AndroidViewPager',
    'AndroidSwipeRefreshLayout',
    'AndroidCheckBox',
    'RCTScrollView',
    'UIView',
    'RCTModalHostView',
    'PopupMenu',
    'RCTText',
    'RCTTextInlineImage',
    'genericBubblingEventTypes',
    'AndroidDrawerLayout',
    'ARTShape',
    'RCTImageView',
    'ToolbarAndroid',
    'ARTSurfaceView',
    'AndroidDialogPicker',
    'RCTVirtualText',
    'AndroidProgressBar',
    'RCTSlider',
    'AndroidDropdownPicker',
    'RCTView',
    'RCTRawText',
    'ARTText',
    'StyleConstants',
    'AndroidTextInput',
    'RCTWebView',
    'AndroidHorizontalScrollContentView'
];

const MRNBridgeComponents = [
    ... RNBridgeComponents,
    'BVLinearGradient',
    'ListView',
    'ListItemView',
    'MRNShadowView',
    'MRNVideoPlayerView',
    'BlurView',
    'MRNCardView',
    'MRNProgressBar',
    'RNSVGSymbol',
    'RNSVGUse',
    'RNSVGLine',
    'RNSVGGroup',
    'RNSVGImage',
    'RNSVGSvgView',
    'RNSVGDefs',
    'RNSVGClipPath',
    'RNSVGTextPath',
    'RNSVGTSpan',
    'RNSVGRect',
    'RNSVGLinearGradient',
    'RNSVGPath',
    'RNSVGEllipse',
    'RNSVGText',
    'RNSVGRadialGradient',
    'RNSVGCircle',
    'MRNSwitchView',
    'MRNSkeletonDrawerView',
    'RCTPullRefresh',
];

(function () {
    // debugger;
    console.log('SSU2', 'begin', GLOBAL);

    const { __fbBatchedBridgeConfig } = GLOBAL;
    if (__fbBatchedBridgeConfig) {
        const { remoteModuleConfig } = __fbBatchedBridgeConfig;
        if (remoteModuleConfig && remoteModuleConfig.length) {
            let resultMsg = '';

            const invalidBridges = remoteModuleConfig.filter(item => (item && item.length > 0 && !MRNBridgeAPIs.includes(item[0]))).map(item => (item && item.length > 0 && item[0]));
            if (invalidBridges && invalidBridges.length) {
                resultMsg += '非法桥：' + invalidBridges.join(',\t') + '\n';
            }

            const uiManagerConfig = remoteModuleConfig.find(item => (item && item.length > 0 && item[0] === UIManagerAPI));
            if (uiManagerConfig && uiManagerConfig.length > 1) {
                const invalidUIBridges = Object.keys(uiManagerConfig[1])
                    .map(component => String(component))
                    .filter(component => (component && !MRNBridgeComponents.includes(String(component))));
                if (invalidUIBridges && invalidUIBridges.length) {
                    resultMsg += '非法组件：' + invalidUIBridges.join(',\t');
                }
            }

            if (resultMsg) {
                console.debug('运行时监控报错❌\n' + resultMsg);
            } else {
                console.log('运行时监控通过✔️\n');
            }
        }
    }

})();


export {}
