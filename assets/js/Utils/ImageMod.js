    function ImageMod({ src, width, height }) {
        this.image = new Image(width, height);
        this.image.src = src;
        return this.image;
    }
    export default ImageMod;