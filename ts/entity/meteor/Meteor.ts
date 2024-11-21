
import IPoint from '../../geometry/point/IPoint';
import IEntity from '../IEntity';

export default class Meteor implements IEntity {


    private entity: IEntity;

    constructor(entity: IEntity) {
        this.entity = entity;
    }

    setUp(): void {
        this.entity.setUp();

    }

    update(maxX:number, maxY:number): void {
        this.entity.update(maxX, maxY);
    }


    moveMe(): void {
        this.entity.moveMe();
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



