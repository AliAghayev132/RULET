class Player {
    initHealth(health) {
        this.health = health;
    }
    constructor({ id, name, health = null }) {
        this.id = id;
        this.name = name;
        this.initHealth(health);
    }
    getData() {
        return { id: this.id, name: this.name }
    }
    getGameData() {
        return {
            id: this.id,
            health: this.health,
            name: this.name
        }
    }
    getHealth() {
        return this.health;
    }
    increaseHealth(par) {
        this.health += par;
    }
    decreaseHealth(par = 1) {
        this.health -= par;
        if (this.health <= 0) {
            this.health = 0;
        }
    }
}

export default Player;