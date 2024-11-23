import UpdateContainer from "../engine/update/UpdateContainer";
import IPoint from "../geometry/point/IPoint";
import IEntity from "./IEntity";


export default interface ICustomObject{
    getId(): string;
    getPointMap(): Map<string, IPoint>;
    getCenterPoint(): IPoint;
    getEntity(): IEntity;
    setUp():void;
    update(UpdateContainer:UpdateContainer):void;
    moveMe():void;

}


