

import IPoint from '../geometry/point/IPoint.js';

export default interface IEntity{
    getId(): string;
    getPointMap(): Map<string, IPoint>;
    getCenterPoint(): IPoint;
    getOffsetAngle():number;
    getDrawLines():boolean;
    updateOffsetAngle(offsetAngle:number):void;

    setUp():void;
    update(maxX:number, maxY:number):void;
    moveMe():void;

    getHitBorderX():boolean;
    getHitBorderY():boolean;
    


}




