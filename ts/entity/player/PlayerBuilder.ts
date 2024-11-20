import IPoint from "../../geometry/point/IPoint";
import IEntity from "../IEntity";
import Player from "./Player";



export default class PlayerBuilder {

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


    constructor(id: string, centerPoint: IPoint) {
        this.id = id;
        this.centerPoint = centerPoint;

    }

Size(value: number): PlayerBuilder {
        this.size = value;
        return this;
    }

    OffsetAngle(value: number): PlayerBuilder {
        this.offsetAngle = value;
        return this;
    }

    MaxAngle(value: number): PlayerBuilder {
        this.chunkAngle = value;
        return this;
    }

    ChunkAngle(value: number): PlayerBuilder {
        this.chunkAngle = value;
        return this;
    }

    RotationDirection(value: number): PlayerBuilder {
        this.rotationDirection = value;
        return this;
    }

    BaseRotation(value: number): PlayerBuilder {
        this.baseRotation = value;
        return this;
    }

    IsSymetric(value: boolean): PlayerBuilder {
        this.isSymetric = value;
        return this;

    }
    PointMap(value: Map<string, IPoint>): PlayerBuilder {
        this.pointMap = value;
        return this;
    }

    MoveMe(value: boolean): PlayerBuilder {
        this.moveMe = value;
        return this;
    }

    MoveSpeed(value: number): PlayerBuilder {
        this.moveSpeed = value;
        return this;
    }

    build(): Player {
        return new Player(
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

}


