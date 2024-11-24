import Canvas from "../engine/Canvas.js";
import EntityBuilder from "../entity/EntityBuilder.js";
import Player from "../entity/player/Player.js";
import Projectile from "../entity/projectile/Projectile.js";
import BasicPoint from "../geometry/point/BasicPoint.js";
import Calculations from "./Calculations.js";
import UpdateInputContainer from "./update/UpdateInputContainer.js";
export class Engine {
    constructor() {
        this.canvas = new Canvas();
        this.entityMap = new Map();
        this.playerId = "player";
        this.porjectileCounter = 0;
        this.ableToShoot = true;
    }
    setUp() {
        this.entityMap.set(this.playerId, new Player(new EntityBuilder(this.playerId, new BasicPoint(this.playerId + "Center", this.canvas.getWidth() / 2, this.canvas.getHeight() / 2, "#ff0000"))
            .OffsetAngle(18)
            .Size(20)
            .ChunkAngle(72)
            .DrawLines(true)
            .PointsToCenterDistance([1, 2, 2, 1, 2])
            .build()));
    }
    update(mouseData) {
        this.canvas.clear();
        const updateContainer = new UpdateInputContainer(this.canvas.getWidth(), this.canvas.getHeight(), mouseData);
        const doomedEnityList = new Array();
        // handling mouse events
        console.log(mouseData.leftBtn);
        if (mouseData.leftBtn) {
            if (this.ableToShoot) {
                this.ableToShoot = false;
                this.playerShooting();
            }
        }
        else {
            this.ableToShoot = true;
        }
        // loop for update
        for (let [id, customObject] of this.entityMap) {
            customObject.update(updateContainer);
            this.canvas.drawEntity(customObject);
            if (customObject.getDoomed()) {
                doomedEnityList.push(customObject.getId());
            }
        }
        // deleting entities
        for (const doomedId of doomedEnityList) {
            this.entityMap.delete(doomedId);
        }
        // drawing entities
        for (const [id, entity] of this.entityMap) {
            entity.moveMe();
        }
        this.logToDom();
    }
    playerShooting() {
        const player = this.entityMap.get(this.playerId);
        if (player != null) {
            this.porjectileCounter++;
            const projectileData = player.getProjectileData();
            // projectile center point
            const projectileCenterPoint = new BasicPoint("projectile" + this.porjectileCounter + "Center", projectileData.x, projectileData.y, "#ff0000");
            // calculation of point to get the vector for projectile
            const tmp = Calculations.pointB_angleB_lengthC("tmp", projectileCenterPoint, projectileData.angle, 5, false);
            const newProjectile = new Projectile(new EntityBuilder("projectile" + this.porjectileCounter, projectileCenterPoint)
                .OffsetAngle(projectileData.angle)
                .ChunkAngle(180)
                .VectorX(projectileData.x - tmp.getX())
                .VectorY(projectileData.y - tmp.getY())
                .PointsToCenterDistance([0.5, 0.5])
                .DrawLines(true)
                .build());
            this.entityMap.set("projectile" + this.porjectileCounter, newProjectile);
        }
    }
    logToDom() {
        const projectileCount = document.getElementById("projectilesCount");
        if (projectileCount != null) {
            projectileCount.innerHTML = String(this.porjectileCounter);
        }
    }
}
