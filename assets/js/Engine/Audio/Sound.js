class Sound {
    constructor(sound, volume) {
        this.volume = volume;
        this.setSound(sound);
    }
    setSound(sound) {
        this.sound = new Audio(sound);
        this.sound.volume = this.volume;
    }
    play() {
        this.sound.play();
    }
    pause() {
        this.sound.pause();
    }
    update(volume) {
        this.sound.volume = volume;
    }
}
export default Sound;