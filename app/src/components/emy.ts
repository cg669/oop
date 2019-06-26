
import * as UUID from 'uuid-js';
import {
    BiuOptions,
    BasePostion,
    WidthAndHeight
} from '../model/index';
import {  windowHeight } from '../constant';
import workBus from './workBus';
export default class Emy{

    key: string;

    el: HTMLElement;

    private size: string;

    private speed: number;

    wh: WidthAndHeight = {
        width: 200,
        height: 30
    }; 

    basePostion: BasePostion;

    container: HTMLElement;

    iTimer = null;

    constructor( container: HTMLElement, options:BiuOptions ){
        this.key = UUID.create();
        this.size = options.size;
        this.basePostion = options.basePostion;
        this.speed = options.speed;
        this.container = container;
        this.init();
    }
    init(){
        const oDiv = document.createElement('div');
        oDiv.className = `emy emy-${this.size}`;
        oDiv.style.left = this.basePostion.x + 'px';
        oDiv.style.top = this.basePostion.y + 'px';
        this.container.appendChild(oDiv);
        this.el = oDiv;
        this.move();
        return this;
    }
    move(){
        this.iTimer = requestAnimationFrame( ()=> {
            const top = this.el.offsetTop;
            const elStyle = window.getComputedStyle(this.el,null);
            // console.log(top,windowHeight - parseInt(elStyle.getPropertyValue('height')));
            if(top < windowHeight - parseInt(elStyle.getPropertyValue('height')) && !workBus.isBoom(this.el,'emy')){
                // console.log(this.el.style.top);
                this.el.style.top = parseInt(elStyle.getPropertyValue('top') ) + this.speed + 'px';
                this.move();
            } else {
                cancelAnimationFrame(this.iTimer);
                this.destroyed();
                this.iTimer = null;
            }
        })
    }
    destroyed() {
        workBus.deleteEmy(this.key);
        this.container.removeChild(this.el);
    }
}