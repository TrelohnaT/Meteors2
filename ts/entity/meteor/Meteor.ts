
import UpdateContainer from '../../engine/update/UpdateContainer';
import IPoint from '../../geometry/point/IPoint';
import ICustomObject from '../ICustomObject';
import IEntity from '../IEntity';

export default class Meteor implements ICustomObject {


    private entity: IEntity;

    constructor(entity: IEntity) {
        this.entity = entity;
    }

    setUp(): void {
        this.entity.setUp();

    }

    update(updateContainer:UpdateContainer): void {
        this.entity.update(updateContainer.maxX, updateContainer.maxY);
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
}



