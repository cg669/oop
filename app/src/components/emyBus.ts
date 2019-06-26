import Emy from './emy';
import { 
    windowWith 
} from '../constant/index';
export default class EmyBus{

    container: HTMLElement;
    iTimer = null;
    constructor(
        container: HTMLElement,
    ){
        this.container = container;
        this.rush();
    }
    build(){
        const width = 200;
        const height = 30;
        const x = Math.random() * (windowWith - width);
        new Emy(this.container,{
            size: 'big',
            speed: 5,
            basePostion:{
                x:  x,
                y: height
            }
        })
    }
    rush(){
        console.log(111)
        // let time = this.level === 'hard' ? 1200 : 800;
        // time = this.level === 'easy' ? 400 : 800;
        const time = 400;
        this.iTimer = setInterval( ()=> this.build(), time);
        return this;
    }
}