import Self from './components/self';
import EmyBus from './components/emyBus';


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
// self2.init();
// console.log(111);