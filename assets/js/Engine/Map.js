import ChairAndTable from "../Objects/Furnitures/ChairAndTable.js";
import MapObject from "../Objects/MapObject.js";

const ObjectsID = {
    "CHAIRANDTABLE": ChairAndTable,
    "BACKGROUND": MapObject,
}

class Map {
    constructor() {
        this.objects = [];
    }
    addObject(ID, texture, pos, size) {
        this.objects.push(new ObjectsID[ID](texture, pos, size));
    }
    update() {
        for (let object of this.objects) {
            object.update();
        }
    }
    render(ctx) {
        for (let object of this.objects) {
            object.render(ctx);
        }
    }
}

export default Map;