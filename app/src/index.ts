import Self from './components/self';
import EmyBus from './components/emyBus';
import workBus from './components/workBus';


const root = document.getElementById('root');
const btn = document.getElementById('btn');
btn.onclick = initWork;


new EmyBus(root);


function initWork(){
    const self = new Self(root,{
        width: 100,
        height: 120,
        level: 'wudi',
        speed: 5
    });
    //  将实例的本机保存到work-store里
    workBus.saveSelf(self);
    //  开启动态事件
    workBus.playWork();
}