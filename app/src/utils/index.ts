

export function getArrayRandom( arr: number[] ): number{
    const rangeLen = arr && arr.length;
    if(!rangeLen){
        console.error('传入数组有误')
        return 0;
    }
    const index = Math.floor( Math.random() * rangeLen ) 
    return arr[index]
}