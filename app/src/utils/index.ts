

export function getArrayRandom( arr: number[] ): number{
    const rangeLen = arr && arr.length;
    if(!rangeLen){
        console.error('传入数组有误')
        return 0;
    }
    const index = Math.floor( Math.random() * rangeLen ) 
    return arr[index]
}

export function collText( obj:HTMLElement ,obj2:HTMLElement){
    const x1 = obj.offsetLeft;
    const y1 = obj.offsetTop;
    const w1 = obj.offsetWidth;
    const h1 = obj.offsetHeight;

    const x2 = obj2.offsetLeft;
    const y2 = obj2.offsetTop;
    const w2 = obj2.offsetWidth;
    const h2 = obj2.offsetHeight;
     // 矩形A位于矩形B的右侧
    if (x1 >= x2 && x1 >= x2 + w2) {
    return false;
    // 矩形A位于矩形B的左侧
    } else if (x1 <= x2 && x1 + w1 <= x2) {
        return false;
    // 矩形A位于矩形B的下侧
    } else if (y1 >= y2 && y1 >= y2 + h2) {
        return false;
    // 矩形A位于矩形B的上侧
    } else if (y1 <= y2 && y1 + h1 <= y2) {
        return false;
    }
    // 不相交都不满足，那就是相交了
    return true;
};