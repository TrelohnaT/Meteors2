import IPoint from "../../geometry/point/IPoint";
import Meteor from "./Meteor.js";



export default class MeteorBuilder {

    private id: string;
    private centerPoint: IPoint;
    private size: number;
    private offsetAngle: number;
    private maxAngle: number;
    private chunkAngle: number;
    private pointMap: Map<string, IPoint>;
    private rotationDirection: number;
    private baseRotation: number;
    private isSymetric: boolean;

    private moveMe: boolean;
    private moveSpeed: number;

    constructor(id: string, centerPoint: IPoint) {
        this.id = id;
        this.centerPoint = centerPoint;
        this.size = 10;
        this.offsetAngle = 0;
        this.maxAngle = 360;
        this.chunkAngle = 90;
        this.rotationDirection = 1;
        this.baseRotation = 0;
        this.isSymetric = true;

        this.pointMap = new Map();
        //this.vector = new Vector("default", this.centerPoint, this.centerPoint);
        this.moveMe = false;
        this.moveSpeed = 1;
    }


    Size(value: number): MeteorBuilder {
        this.size = value;
        return this;
    }

    OffsetAngle(value: number): MeteorBuilder {
        this.offsetAngle = value;
        return this;
    }

    MaxAngle(value: number): MeteorBuilder {
        this.chunkAngle = value;
        return this;
    }

    ChunkAngle(value: number): MeteorBuilder {
        this.chunkAngle = value;
        return this;
    }

    RotationDirection(value: number): MeteorBuilder {
        this.rotationDirection = value;
        return this;
    }

    BaseRotation(value: number): MeteorBuilder {
        this.baseRotation = value;
        return this;
    }

    IsSymetric(value: boolean): MeteorBuilder {
        this.isSymetric = value;
        return this;

    }
    PointMap(value: Map<string, IPoint>): MeteorBuilder {
        this.pointMap = value;
        return this;
    }

    MoveMe(value: boolean): MeteorBuilder {
        this.moveMe = value;
        return this;
    }

    MoveSpeed(value: number): MeteorBuilder {
        this.moveSpeed = value;
        return this;
    }
    
/*
    build(): Meteor {
        return new Meteor(
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
            this.moveSpeed
        );
    }
*/
}


