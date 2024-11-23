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
    static pointB_angleB_lengthC(pointAId, pointB, angleB, lengthC, roundCoordinates = true) {
        // vypocitani delky usecky a
        const lengthA = lengthC * Math.cos(angleB * (Math.PI / 180));
        // vypocet delky usecky b
        const lengthB = lengthC * Math.sin(angleB * (Math.PI / 180));
        if (roundCoordinates) {
            return new BasicPoint(pointAId, Math.round(pointB.getX() + lengthA), Math.round(pointB.getY() + lengthB));
        }
        else {
            return new BasicPoint(pointAId, pointB.getX() + lengthA, pointB.getY() + lengthB);
        }
    }
    static angleBetweenTwoPoints(xA, yA, xB, yB) {
        const xDiff = xA - xB;
        const yDiff = yA - yB;
        return Math.atan2(yDiff, xDiff) * 180 / Math.PI;
    }
}
