import HealthBar from "../UI/Hud/HealthBar.js";
import HealthComponent from "../Engine/Components/HealthComponent.js";
import { TEXTURES } from "../Engine/Variables.js";
import ImageMod from "../Utils/ImageMod.js";
import Sprite from "./Sprite.js";
class Player {
    initHealthBar() {
        this.healthBar = new HealthBar(
            this.healthComponent.health,
            this.pos
        );
    }
    initHealthComponent(health) {
        this.healthComponent = new HealthComponent(health);
    }
    initSprite(data) {
        this.sprite = new Sprite(
            data.texture,
            data.pos,
            {
                width: data.size.width,
                height: data.size.height,
            },
        );
    }
    constructor(
        texture,
        pos,
        size,
        id,
        name,
    ) {
        this.name = name;
        this.id = id;
        this.pos = pos;
        this.size = size;
        this.initSprite({
            texture,
            size: {
                width: size.width,
                height: size.height,
            },
            pos
        });
    }
    addHealth(health) {
        this.initHealthComponent(health);
        this.initHealthBar();
    }
    setHealth(health) {
        this.healthComponent.health = health;
        this.healthBar.setHearths(health);
    }
    getData() {
        return {
            id: this.id,
            name: this.name
        }
    }
    updatePosition(pos) {
        this.pos = pos;
    }
    updateAnimation() { }
    setTexture(texture) {
        this.sprite.setTexture(texture);
    }
    update(mouse) {
        if (
            mouse.x >= this.pos.x &&
            mouse.x <= this.pos.x + this.size.width &&
            mouse.y >= this.pos.y &&
            mouse.y <= this.pos.y + this.size.height
        ) {
            if (this.healthBar) {
                this.healthBar.toggleRender();
            }
        }

    }
    render(ctx) {
        this.sprite.render(ctx);
        if (this.healthBar) this.healthBar.render(ctx);
    }
}
export default Player;