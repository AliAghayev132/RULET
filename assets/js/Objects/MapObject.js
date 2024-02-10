class MapObject {
    constructor(texture, pos, size) {
        this.pos = pos;
        this.size = size;
        this.texture = new Image(size.width, size.height);
        this.texture.src = texture;
    }
    update() { };
    render(ctx) {
        ctx.drawImage(this.texture, this.pos.x, this.pos.y, this.size.width, this.size.height);
    }
}

export default MapObject;