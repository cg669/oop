

import Emy from './emy';
import Biu from './biu';
import { BoomType } from '../model';
import { collText } from '../utils';
type ArrItem = Biu|Emy;
class WorkBus{

    emyList: Emy[] = [];

    biuList: Biu[] = [];

    iTimer = null;

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
    /**
     * 新版的垃圾处理器
     */
    garbageCollection(){
        this.iTimer = requestAnimationFrame( () => {
            this.emyList.forEach( emy => {
                this.biuList.forEach( biu => {
                    if(collText(emy.el,biu.el)){
                        emy.destroyed();
                        biu.destroyed();
                    }
                })
            });
            this.garbageCollection();
        })
    }
    /**
     * 关闭垃圾处理器
     */
    stopGarbage(){
        cancelAnimationFrame(this.iTimer);
        this.iTimer = null;
    }

    /**
     * 这个是第一版  但是算法不够好  抛弃  不够好的原因是需要再每个实例内 运动的时候挂载检测是否跟其他的碰撞，
     * 就会导致每个实例 每帧都要去算 n^n  现在换成上面的，做了一个单独的垃圾处理器，n
     * @param itemOne 
     * @param type 
     */
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