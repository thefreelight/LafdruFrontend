import { AppRegistry } from 'react-native';
import App from './App'; // 假设 App 是您的主组件

// 注册主组件。确保组件名称与您在 iOS/Android 中使用的一致
AppRegistry.registerComponent('MyAppName', () => App);

// 如果在 Web 上运行，使用下面的代码
if (window.document) {
    AppRegistry.runApplication('MyAppName', {
        initialProps: {},
        rootTag: document.getElementById('app-root')
    });
}
