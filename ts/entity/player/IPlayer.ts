import ICustomObject from "../ICustomObject";
import ProjectileData from "./ProjectileData";


export default interface IPlayer extends ICustomObject {
    getProjectileData() : ProjectileData;
}

