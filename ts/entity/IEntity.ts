

import IPoint from '../geometry/point/IPoint.js';

export default interface IEntity{
    getId(): string;
    getPointMap(): Map<string, IPoint>;
    getCenterPoint(): IPoint;

    setUp():void;
    update():void;
    moveMe():void;

    


}




