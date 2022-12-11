const {createApp} = Vue

const sourceImg = {
    0:  { 
        src: "Media/Flower1.png",
        alt: "budding"
    },
    1:  {
        src: "Media/Flower2.png",
        alt: "early bloom"
    },
    2:  {
        src: "Media/Flower3.png",
        alt: "partial bloom"
    },
    3:  {
        src: "Media/Flower4.png",
        alt: "full bloom"
    }
}

createApp({
    data() {
        return {
            count: 0,
            imageSource: sourceImg[0],
        }
    }, methods: {
        changeImage() {
            this.count = (this.count + 1) % 4;
            this.imageSource = sourceImg[this.count];
        } 
    }
}).mount('#app')