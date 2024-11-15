import BasicPoint from '../geometry/point/BasicPoint.js';
export default class Calculations {
    constructor() {
    }
    /**
     *
     *
     *   A
     *   |\
     *   | \
     * b |  \ c
     *   |___\
     *  C  a  B
     *
     */
    static pointB_angleB_lengthC(pointAId, pointB, angleB, lengthC) {
        // vypocitani delky usecky a
        const lengthA = lengthC * Math.cos(angleB * (Math.PI / 180));
        // vypocet delky usecky b
        const lengthB = lengthC * Math.sin(angleB * (Math.PI / 180));
        const pointA = new BasicPoint(pointAId, pointB.getX() + lengthA, pointB.getY() + lengthB);
        return pointA;
    }
}
