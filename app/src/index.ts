import Self from './components/self';
import EmyBus from './components/emyBus';
import workBus from './components/workBus';

const root = document.getElementById('root');

const self = new Self(root,{
    width: 100,
    height: 120,
    level: 'easy',
    speed: 5
});
new EmyBus(root);
// const self2 = new Self(root,{
//     width: 100,
//     height: 120
// });
self.init().biu();
//  垃圾回收开启
workBus.garbageCollection()
// self2.init();
// console.log(111);