
import * as UUID from 'uuid-js';
import {
    BiuOptions,
    BasePostion
} from '../model/index';
export default class Biu{

    private key: string;

    private el: HTMLElement;

    private size: string;

    private speed: number;

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
            if(top > parseInt(elStyle.getPropertyValue('height'))){
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
        this.container.removeChild(this.el);
    }
}