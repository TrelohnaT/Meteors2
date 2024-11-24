
import UpdateInputContainer from '../../engine/update/UpdateInputContainer';
import UpdateOutputContainer from '../../engine/update/UpdateOutputContainer';
import IPoint from '../../geometry/point/IPoint';
import ICustomObject from '../ICustomObject';
import IEntity from '../IEntity';

export default class Meteor implements ICustomObject {


    private entity: IEntity;

    private doomed: boolean = false;

    constructor(entity: IEntity) {
        this.entity = entity;
    }

    setUp(): void {
        this.entity.setUp();

    }

    update(updateContainer:UpdateInputContainer): UpdateOutputContainer {
        this.entity.update(updateContainer.maxX, updateContainer.maxY);
        return new UpdateOutputContainer(false);
    }


    moveMe(): void {
        this.entity.moveMe();
    }

    getEntity(): IEntity {
        return this.entity;
    }

    getId(): string {
        return this.entity.getId();
    }

    getPointMap(): Map<string, IPoint> {
        return this.entity.getPointMap();
    }
    
    getCenterPoint(): IPoint {
        return this.entity.getCenterPoint();
    }

    getDoomed(): boolean {
        return this.doomed;
    }
}



