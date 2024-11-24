import UpdateInputContainer from "../engine/update/UpdateInputContainer";
import UpdateOutputContainer from "../engine/update/UpdateOutputContainer";
import IPoint from "../geometry/point/IPoint";
import IEntity from "./IEntity";


export default interface ICustomObject{
    getId(): string;
    getPointMap(): Map<string, IPoint>;
    getCenterPoint(): IPoint;
    getEntity(): IEntity;
    getDoomed(): boolean;
    setUp():void;
    update(UpdateContainer:UpdateInputContainer):UpdateOutputContainer;
    moveMe():void;

}


