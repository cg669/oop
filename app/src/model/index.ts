
export interface SelfOptions extends WidthAndHeight{
    level: 'easy' | 'normal' |'hard',
    speed: number
}
export interface SelfModel {
    width: number;
    height: number;
}
export interface BiuOptions{
    size: 'big' | 'middle' | 'small',
    speed: number,
    basePostion: BasePostion
}
export interface BasePostion{
    x: number,
    y: number
}

export interface WidthAndHeight{
    width: number;
    height: number;
}

export type BoomType = 'emy' | 'biu';
