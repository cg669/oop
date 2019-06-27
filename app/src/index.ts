import Self from './components/self';
import EmyBus from './components/emyBus';
import workBus from './components/workBus';

const root = document.getElementById('root');

new Self(root,{
    width: 100,
    height: 120,
    level: 'easy',
    speed: 5
});
new EmyBus(root);
//  开启动态事件
workBus.playWork();