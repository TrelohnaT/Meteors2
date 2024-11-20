

import IPoint from "../geometry/point/IPoint.js";
import Entity from "./Entity.js";
import IEntity from "./IEntity";



export default class EntityBuilder {

    private id: string;
    private centerPoint: IPoint;

    private size: number = 10;
    private offsetAngle: number = 0;
    private maxAngle: number = 360;
    private chunkAngle: number = 72;

    private pointMap: Map<string, IPoint> = new Map();

    private rotationDirection: number = 1;

    private baseRotation: number = 180;
    private moveMe: boolean = false;
    private isSymetric: boolean = true;
    private moveSpeed: number = 1;


    private vectorX: number = 0;
    private vectorY: number = 0;

    constructor(id: string, centerPoint: IPoint) {
        this.id = id;
        this.centerPoint = centerPoint;

    }

    Size(value: number): EntityBuilder {
        this.size = value;
        return this;
    }

    OffsetAngle(value: number): EntityBuilder {
        this.offsetAngle = value;
        return this;
    }

    MaxAngle(value: number): EntityBuilder {
        this.chunkAngle = value;
        return this;
    }

    ChunkAngle(value: number): EntityBuilder {
        this.chunkAngle = value;
        return this;
    }

    RotationDirection(value: number): EntityBuilder {
        this.rotationDirection = value;
        return this;
    }

    BaseRotation(value: number): EntityBuilder {
        this.baseRotation = value;
        return this;
    }

    IsSymetric(value: boolean): EntityBuilder {
        this.isSymetric = value;
        return this;

    }
    PointMap(value: Map<string, IPoint>): EntityBuilder {
        this.pointMap = value;
        return this;
    }

    MoveMe(value: boolean): EntityBuilder {
        this.moveMe = value;
        return this;
    }

    MoveSpeed(value: number): EntityBuilder {
        this.moveSpeed = value;
        return this;
    }

    VectorX(value:number): EntityBuilder {
        this.vectorX = value;
        return this;
    }
    
    VectorY(value:number): EntityBuilder {
        this.vectorY = value;
        return this;
    }

    build(): Entity {
        return new Entity(
            this.id,
            this.centerPoint,
            this.size,
            this.offsetAngle,
            this.maxAngle,
            this.chunkAngle,
            this.pointMap,
            this.rotationDirection,
            this.baseRotation,
            this.isSymetric,
            this.moveMe,
            this.moveSpeed,
            this.vectorX,
            this.vectorY
        );
    }

}




