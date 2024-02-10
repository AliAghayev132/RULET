import ImageMod from "../../Utils/ImageMod";

class AnimationComponent {
    constructor(
        {
            texture,
            size,
            pos,
            frame,
        }
    ) {
        this.texture = new ImageMod({ ...texture });
        this.size = size;
        this.frame = frame;

        this.animations = new Map;
    }
    addAnimation(key, size, pos, endPos) {
        this.animations.set(key, new Animation({ size, pos, endPos }));
    }
}

class Animation {
    constructor(
        {
            size,
            pos,
            endPos,
        }
    ) {
        this.size = size;
        this.pos = pos;
        this.endPos = endPos;
    }
    play() {
        
    }
    resetAnimation() {

    }
}
export default AnimationComponent;