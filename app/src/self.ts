
import { SelfOptions } from './model/index'


class Self {
    width: Number;
    height: Number;
    container: HTMLElement;
    constructor(container: HTMLElement,options:SelfOptions){
        this.width = options.width;
        this.height = options.height;
        this.container = container;
    }
    init(){
        const oDiv = document.createElement('div');
        oDiv.className = 'self';
        oDiv.style.width = this.width + 'px'; 
        oDiv.style.height = this.height + 'px';
        this.container.appendChild(oDiv);
    }
};

export default Self;