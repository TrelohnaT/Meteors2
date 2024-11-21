

import IPoint from '../geometry/point/IPoint.js';

export default interface IEntity{
    getId(): string;
    getPointMap(): Map<string, IPoint>;
    getCenterPoint(): IPoint;

    setUp():void;
    update(maxX:number, maxY:number):void;
    moveMe():void;

    


}




