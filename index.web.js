import { AppRegistry } from 'react-native';
import App from './App'; // 确保路径正确
import appJson from './app.json'; // 修改这里


AppRegistry.registerComponent(appJson.name, () => App);
AppRegistry.runApplication(appJson.name, {
    initialProps: {},
    rootTag: document.getElementById('app')
});
