import IPoint from "../../geometry/point/IPoint.js";
import IEntity from "../IEntity";


export default class Player implements IEntity {


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

    private shouldMove: boolean;
    private moveSpeed: number;

    private pointsToCenterDistance: number[] = new Array();

    constructor(
        id: string,
        centerPoint: IPoint,
        size: number,
        offsetAngle: number,
        maxAngle: number,
        chunkAngle: number,
        pointMap: Map<string, IPoint>,
        rotationDirection: number,
        baseRotation: number,
        isSymetric: boolean,

        moveMe: boolean,
        moveSpeed: number
    ) {
        this.id = id;
        this.centerPoint = centerPoint;
        this.size = size;
        this.offsetAngle = offsetAngle;
        this.maxAngle = maxAngle;
        this.chunkAngle = chunkAngle;
        this.pointMap = pointMap;
        this.rotationDirection = rotationDirection;
        this.baseRotation = baseRotation;
        this.isSymetric = isSymetric;

        this.shouldMove = moveMe;
        this.moveSpeed = moveSpeed;

        this.setUp();

    }

    setUp(): void {

    }

    update(): void {

    }

    moveMe(): void {

    }

    getId(): string {
        return "";
    }

    getPointMap(): Map<string, IPoint> {
        return new Map();
    }

    
    getCenterPoint(): IPoint {
        return this.centerPoint;
    }



}


