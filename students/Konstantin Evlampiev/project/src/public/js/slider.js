import '../styles/slider.css';

let sliderItem = {
    props: ['slide'],
    data() {
        return {

        }
    },
    template: `<div v-bind:class="slide.currentClass">
                    <img v-bind:src="slide.imgFile" alt="slide.fileComment" class="grayImg">
                </div>`
};



let slider = {
    data() {
        return {
            slides: [],
            readyToSlide: true,
            imp_path: './img/forSlider/',
            currentIdx: 0,
            intervalID: null
        }
    },

    template: ` <div class="slider centered">
                    <slider-item v-for="slide of slides" :slide="slide" :key="slide.imgFile"> </slider-item>
                    <i class="fas fa-chevron-circle-right slider-rightArrow" @click="nextSlideRight()"> </i>
                    <i class="fas fa-chevron-circle-left slider-leftArrow" @click="nextSlideLeft()"> </i>
                    <div class="slider__comment cyanStyled">
                        {{slides[currentIdx].slideText}}
                    </div>
                </div>
              `,

    components: {
        'slider-item': sliderItem
    },

    methods: {

        getData() {
            let donorText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam officia consequuntur nisi
            recusandae, ratione impedit excepturi magni ducimus repudiandae id minus commodi consectetur quibusdam
            reprehenderit quidem culpa. Necessitatibus tempore saepe maxime iusto ea velit, ipsum perferendis eius
            accusantium fugit excepturi illum, praesentium nobis? Corporis rem quae voluptates repellendus vel
            nesciunt.`;
            for (let i = 0; i < 5; i++) {
                let rnd1 = Math.floor(Math.random() * 60);

                this.slides.push({
                    imgFile: `${this.imp_path}${i+1}.jpg`,
                    currentClass: 'slider-item hidden-slide',
                    fileComment: `The slide number ${i+1}`,
                    slideText: donorText.slice(0, rnd1 + 40)
                });

            };
            this.slides[0].currentClass = 'slider-item';
        },

        nextSlideRight() {
            if (this.readyToSlide) {
                this.readyToSlide = false;
                clearInterval(this.intervalID);
                let prevIndex = this.currentIdx;

                this.currentIdx = prevIndex == (this.slides.length - 1) ? 0 : (this.currentIdx + 1);

                this.slides[this.currentIdx].currentClass = 'slider-item slide-left';
                this.slides[prevIndex].currentClass = 'slider-item erase-left';
                setTimeout(() => {
                    this.slides[this.currentIdx].currentClass = 'slider-item';
                    this.slides[prevIndex].currentClass = 'slider-item hidden-slide';
                    this.readyToSlide = true; //!!
                    this.intervalID = setInterval(this.nextSlideRight, 10000);
                }, 1500);
            }
        },

        nextSlideLeft() {
            if (this.readyToSlide) {
                this.readyToSlide = false;
                clearInterval(this.intervalID);
                let prevIndex = this.currentIdx;

                this.currentIdx = prevIndex == 0 ? (this.slides.length - 1) : (this.currentIdx - 1);

                this.slides[this.currentIdx].currentClass = 'slider-item slide-right';
                this.slides[prevIndex].currentClass = 'slider-item erase-right';
                setTimeout(() => {
                    this.slides[this.currentIdx].currentClass = 'slider-item';
                    this.slides[prevIndex].currentClass = 'slider-item hidden-slide';
                    this.readyToSlide = true; //!!
                    this.intervalID = setInterval(this.nextSlideRight, 10000);
                }, 1500);
            }
        },
    },

    beforeMount() {
        this.getData();
        this.intervalID = setInterval(this.nextSlideRight, 10000);
        this.readyToSlide = true;
    }
}

export default slider