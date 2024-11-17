import IPoint from "../../geometry/point/IPoint";
import Projectile from "./Projectile.js";

export default class ProjectileBuilder {

    private id: string;
    private centerPoint: IPoint;

    private angle: number = 0;
    private size: number = 10;
    private vectorX: number = 0;
    private vectorY: number = 0;

    constructor(
        id: string,
        centerPoint: IPoint
    ) {
        this.id = id;
        this.centerPoint = centerPoint;
    }

    Angle(value: number): ProjectileBuilder {
        this.angle = value;
        return this;
    }

    Size(value: number): ProjectileBuilder {
        this.size = value;
        return this;
    }
    VectorX(value: number): ProjectileBuilder {
        this.vectorX = value;
        return this;
    }

    VectorY(value: number): ProjectileBuilder {
        this.vectorY = value;
        return this;
    }

    build(): Projectile {
        return new Projectile(
            this.id,
            this.centerPoint,
            this.angle,
            this.size,
            this.vectorX,
            this.vectorY
        );
    }

}




