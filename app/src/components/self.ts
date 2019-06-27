
import { 
    SelfOptions, 
    SelfModel 
} from '../model/index';
import { 
    rangeNumList, 
    windowWith 
} from '../constant/index';
import { getArrayRandom } from '../utils/index';

import Biu from './biu';
import workBus from './workBus';

import * as UUID from 'uuid-js';

class Self implements SelfModel {
    width: number;

    height: number;

    mouseDownX: number;

    container: HTMLElement;

    iTimer = null;

    level = 'normal';

    speed: number;

    private key: string;

    private el: HTMLElement;

    constructor(container: HTMLElement,options:SelfOptions){
        this.width = options.width;
        this.height = options.height;
        this.level = options.level;
        this.speed = options.speed;
        this.container = container;
        this.key = UUID.create();
        this.init().biu();
    }
    private getPositionX(num: number):number{
        if(windowWith - num < this.width){
            return windowWith - this.width
        }else if(num < 0){
            return 0
        }else{
            return num
        }
    }
    //  暴露出去
    init = ()=>{
        if(!!this.el){
            console.warn('单个实例只能生成一个tank');
            return this;
        }
        const oDiv = document.createElement('div');
        oDiv.className = 'self';
        oDiv.style.width = this.width + 'px'; 
        oDiv.style.height = this.height + 'px';
        oDiv.style.bottom = '0px';
        const nLeft = windowWith * getArrayRandom(rangeNumList); 
        oDiv.style.left = this.getPositionX(nLeft) + 'px';
        this.container.appendChild(oDiv);
        this.el = oDiv;
        this.move();
        return this;
    }
    move (){
        this.el.onmousedown = (e: MouseEvent) =>{
            // console.log(this);
            this.mouseDownX = e.pageX;
            document.onmouseup = ()=> {
                document.onmousemove = null;
                document.onmouseup = null;
            };
            document.onmousemove = ( e: MouseEvent) => {
                const pageX = e.pageX;
                const dx = Number(pageX) - Number(this.mouseDownX);
                const elX = this.el.offsetLeft;
                const newX = Number(elX) + dx;
                this.el.style.left = this.getPositionX(newX) + 'px';
                this.mouseDownX = pageX
            }  
        };      
    }
    biu(){
        let time = this.level === 'hard' ? 1200 : 800;
        time = this.level === 'easy' ? 400 : 800;
        this.iTimer = setInterval( ()=> this.initBiu(), time);
        return this;
    }
    initBiu(){
        const elX = this.el.offsetLeft;
        if(workBus.biuList.length < 10){
            const el = new Biu(this.container,{
                size: 'big',
                speed: this.speed,
                basePostion:{
                    x: Number(elX) + this.width/2,
                    y: this.height + 10
                }
            })
            workBus.saveBiu(el);
        }
    }
    stop(){
        return this;
    }
};

export default Self;