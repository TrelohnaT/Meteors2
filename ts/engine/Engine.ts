import Canvas from "../engine/Canvas.js";
import EntityBuilder from "../entity/EntityBuilder.js";
import IEntity from "../entity/IEntity.js";
import Meteor from "../entity/meteor/Meteor.js";
import MeteorBuilder from "../entity/meteor/MeteorBuilder.js";
import Projectile from "../entity/projectile/Projectile.js";
import ProjectileBuilder from "../entity/projectile/ProjectileBuilder.js";
import BasicPoint from "../geometry/point/BasicPoint.js";


export class Engine {

    private canvas: Canvas = new Canvas();
    private entityMap: Map<string, IEntity> = new Map();

    constructor() {

    }

    setUp(): void {

        let canvas = document.getElementById("canvas") as HTMLCanvasElement;


        // this.entityMap.set(
        //     "test",
        //     new Meteor(new EntityBuilder("test", new BasicPoint("center", 100, 100)).build())
        // );


        this.entityMap.set(
            "projectileTest",
            new Projectile(
                new EntityBuilder("testProjectile", new BasicPoint("projectileCenter", 10, 200))
                .OffsetAngle(45)
                .ChunkAngle(180)
                .VectorX(1)
                .VectorY(1)
                .build()
            )
        )

        /*
        this.entityMap.set(
            "testProjectile",
            new ProjectileBuilder("testProjectile", new BasicPoint("projectileCenter", 10, 200))
                .Angle(45)
                //.VectorX(-1)
                //.VectorY(-1)
                .build()
        );
        */

    }

    update(): void {
        this.canvas.clear();

        const doomedEnityList: string[] = new Array();

        // loop for update
        for (let [id, entity] of this.entityMap) {
            entity.update();
            this.canvas.drawEntity(entity);

        }

        // deleting entities
        for (const doomedId of doomedEnityList) {
            this.entityMap.delete(doomedId);
        }

        // drawing entities
        for (const [id, entity] of this.entityMap) {
            entity.moveMe();

        }

    }

}


