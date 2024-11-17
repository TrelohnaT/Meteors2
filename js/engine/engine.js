import Canvas from "../engine/Canvas.js";
import MeteorBuilder from "../entity/meteor/MeteorBuilder.js";
import ProjectileBuilder from "../entity/projectile/ProjectileBuilder.js";
import BasicPoint from "../geometry/point/BasicPoint.js";
export class Engine {
    constructor() {
        this.canvas = new Canvas();
        this.entityMap = new Map();
    }
    setUp() {
        let canvas = document.getElementById("canvas");
        this.entityMap.set("test", new MeteorBuilder("test", new BasicPoint("center", 100, 100)).build());
        this.entityMap.set("testProjectile", new ProjectileBuilder("testProjectile", new BasicPoint("projectileCenter", 10, 200))
            .Angle(45)
            //.VectorX(-1)
            //.VectorY(-1)
            .build());
    }
    update() {
        this.canvas.clear();
        const doomedEnityList = new Array();
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
