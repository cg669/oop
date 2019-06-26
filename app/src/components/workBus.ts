

import Emy from './emy';
import Biu from './biu';
import { BoomType } from '../model';
import { collText } from '../utils';
type ArrItem = Biu|Emy;
class WorkBus{

    emyList: Emy[] = [];

    biuList: Biu[] = [];

    saveEmy( item: Emy ){
        this.emyList.push(item);
    }

    deleteEmy( key:string ){
        this.emyList = this.emyList.filter( el => el.key !== key)
    }

    saveBiu( item: Biu ){
        this.biuList.push(item);
    }
    
    deleteBiu( key:string ){
        this.biuList = this.biuList.filter( el => el.key !== key)
    }

    isBoom( itemOne: HTMLElement, type: BoomType = 'biu' ){
        let bool = false;
        const otherArr: ArrItem[] = type === 'biu' ? this.emyList : this.biuList;
        if(!itemOne){
            return false
        }
        otherArr.forEach( item => bool = bool || collText(itemOne,item.el));
        // console.log(el.el);
        return bool;
    }
}; 
export default new WorkBus();