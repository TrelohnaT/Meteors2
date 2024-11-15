

import IPoint from '../geometry/point/IPoint.js';

export default interface IEntity{
    getId(): string;
    getPointMap(): Map<string, IPoint>;

    setUp():void;
    update():void;

    


}




