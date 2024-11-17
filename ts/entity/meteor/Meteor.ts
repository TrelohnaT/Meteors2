
import Calculations from '../../engine/Calculations.js';
import IPoint from '../../geometry/point/IPoint';
import IEntity from '../IEntity';

export default class Meteor implements IEntity {

    private id: string;
    private centerPoint: IPoint;
    private kind: string;
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
        kind: string,
        size: number,
        offsetAngle: number,
        maxAngle: number,
        chunkAngle: number,
        pointMap: Map<string, IPoint>,
        rotationDirection: number,
        baseRotation: number,
        isSymetric: boolean,

        moveMe: boolean,
        moveSpeed: number,
    ) {
        this.id = id;
        this.centerPoint = centerPoint;
        this.kind = kind;
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
        console.log("setUp");
        this.pointMap.clear();

        // formula to draw cyrcular shapes
        for (let j = 1; (this.chunkAngle * j) <= this.maxAngle; j++) {

            //if (this.pointsToCenterGenerate) {

            //if (this.isSymetric) {
            //    this.pointsToCenterDistance.push(this.size / 2);
            //} else {
            // get random change to the distance

            // this is not the best place for this, change it later
            if (this.pointsToCenterDistance.length <= this.maxAngle / this.chunkAngle) {
                const change = Math.floor(Math.random() * 10);
                // increment or decrement by chance
                if (Math.floor(Math.random() * 2) == 1) {
                    this.pointsToCenterDistance.push(this.size / 2 - change);
                } else {
                    this.pointsToCenterDistance.push(this.size / 2 + change);
                }
            }
            //}

            //}

            //let current_triangle_id = this.id + "_triangle_" + j;
            //let triagle = new Triangle(current_triangle_id);
            //triagle.point_B_angle_B_length_c_direction(this.centerPoint,
            //    ((this.offset_angle + this.baseRotation) + (this.chunck_angle * j)) * this.rotation_direction,
            //    this.pointsToCenterDistance[j - 1]);

            const pointId = "point_" + j;
             let distanceToCenter:number = 0;
            if (this.isSymetric) {
                distanceToCenter = this.size;
            } else {
                distanceToCenter = this.pointsToCenterDistance[j - 1];
            }
            const point = Calculations.pointB_angleB_lengthC(
                pointId,
                this.centerPoint,
                ((this.offsetAngle + this.baseRotation) + (this.chunkAngle * j)) * this.rotationDirection,
                distanceToCenter
            );
            this.pointMap.set(pointId, point);
            // this is the start point of vector vere the entity is facing


            //this.pointList.push(point);

            //triagle.print_info();
        }


    }

    update(): void {

    }


    moveMe(): void {
        this.centerPoint.moveMeX();
        this.centerPoint.moveMeY();
        for(let [id, point] of this.pointMap) {
            point.moveMeX();
            point.moveMeY();
        }
    }

    getId(): string {
        return this.id;
    }

    getPointMap(): Map<string, IPoint> {
        return this.pointMap;
    }
}



