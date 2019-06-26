
import * as UUID from 'uuid-js';
import {
    BiuOptions,
    BasePostion,
    WidthAndHeight
} from '../model';

import workBus from './workBus';

export default class Biu{

    key: string;

    el: HTMLElement;

    private size: string;

    private speed: number;

    basePostion: BasePostion;

    container: HTMLElement;

    position: BasePostion;

    wh: WidthAndHeight; 

    iTimer = null;

    constructor( container: HTMLElement, options:BiuOptions ){
        this.key = UUID.create();
        this.size = options.size;
        this.basePostion = options.basePostion;
        this.speed = options.speed;
        this.container = container;
        this.wh =  this.getWh(options.size);
        this.init();
    }
    private getWh(size: string):WidthAndHeight{
        if(size === 'big'){
            return {
                width: 10,
                height: 10
            }
        }else if( size==='noraml'){
            return {
                width: 6,
                height: 6
            }
        }
        return {
            width: 4,
            height: 4
        }
    }
    init(){
        const oDiv = document.createElement('div');
        oDiv.className = `biu biu-${this.size}`;
        oDiv.style.left = this.basePostion.x + 'px';
        oDiv.style.bottom = this.basePostion.y + 'px';
        this.container.appendChild(oDiv);
        this.el = oDiv;
        this.move();
        return this;
    }
    move(){
        this.iTimer = requestAnimationFrame( ()=> {
            const top = this.el.offsetTop;
            const elStyle = window.getComputedStyle(this.el,null);
            // console.log(workBus.isBiuBoom(this.key));
            if(top > parseInt(elStyle.getPropertyValue('height')) && !workBus.isBoom(this.el)){
                // console.log(this.el.style.top);
                this.el.style.bottom = parseInt(elStyle.getPropertyValue('bottom') ) + this.speed + 'px';
                this.move();
            }else{
                cancelAnimationFrame(this.iTimer);
                this.destroyed();
                this.iTimer = null;
            }
        })
    }
    destroyed() {
        workBus.deleteBiu(this.key);
        this.container.removeChild(this.el);
    }
}