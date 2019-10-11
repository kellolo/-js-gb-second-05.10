document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

let slider = document.querySelector('.slider');

// Создаем иконку загрузки
let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement("afterbegin", loadIcon);

// Создаем левую стрелку
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", leftArrow);

// Создаем правую стрелку
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement("beforeend", rightArrow);

// Ждем когда весь контент целиком загрузится
window.addEventListener('load', function () {
    leftArrow.addEventListener('click', function () {
        if (images.readyToSlide) {
            images.readyToSlide = false;
            images.setNextLeftImage();
            setTimeout(() => {
                images.readyToSlide = true;
            }, 1500);
        }
    });

    rightArrow.addEventListener('click', function () {
        if (images.readyToSlide) {
            images.readyToSlide = false;
            images.setNextRightImage();
            setTimeout(() => {
                images.readyToSlide = true;
            }, 1500);
        }
    });

    // Инициализация слайдера
    images.init();
    // Скрываем иконку загрузки
    hideLoadIcon(loadIcon);
});

/**
 * Функция скрывает иконку загрузки
 * @param {HTMLElement} loadIcon 
 */
function hideLoadIcon(loadIcon) {
    loadIcon.style.display = "none";
}

/**
 * Функция берет у элемента слайдера его data-атрибуты размеров,
 * и если они определены, то самому слайдеру меняет размеры.
 * @param {HTMLDivElement} slider 
 */
function setSizes(slider) {
    let width = slider.getAttribute("data-width");
    let height = slider.getAttribute("data-height");
    if (width !== null && width !== "") {
        slider.style.width = width;
    }
    if (height !== null && height !== "") {
        slider.style.height = height;
    }
}
setSizes(slider);

// Объект слайдера
let images = {
    /* {int} Номер текущего изображения */
    currentIdx: 0,

    /* {int} Готовность к изменению слайда (а то захлебывается) */
    readyToSlide: true,

    /* {HTMLDivElement[]} slides элементы слайдов */
    slides: [],

    /** Получаем все слайды и показываем первый слайд. */
    init() {
        this.slides = document.querySelectorAll('.slider-item');
        this.showImageWithCurrentIdx();
    },

    /** Берем слайд с текущим индексом и убираем у него класс
     * hidden-slide. */
    showImageWithCurrentIdx() {
        this.slides[this.currentIdx].classList.remove('hidden-slide');
    },

    /** Всем слайдам добавляем класс hidden-slide. */
    hideVisibleImages() {
        this.slides.forEach(function (slide) {
            slide.classList.add('hidden-slide');
        });
    },

    /** Переключиться на предыдущее изображение. */
    setNextRightImage() {


        this.readyToSlide = false;
        let prevIndex = this.currentIdx;

        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        this.slides[this.currentIdx].classList.remove('hidden-slide');
        this.slides[this.currentIdx].classList.add('slide-left');
        this.slides[prevIndex].classList.add('erase-left');
        setTimeout(() => {
            this.slides[this.currentIdx].classList.remove('slide-left');
            this.slides[prevIndex].classList.add('hidden-slide');
            this.slides[prevIndex].classList.remove('erase-left');
        }, 1500);

    },

    /** Переключиться на следующее изображение. */
    setNextLeftImage() {

        let prevIndex = this.currentIdx;
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        this.slides[this.currentIdx].classList.remove('hidden-slide');
        this.slides[this.currentIdx].classList.add('slide-right');
        this.slides[prevIndex].classList.add('erase-right');
        setTimeout(() => {
            this.slides[this.currentIdx].classList.remove('slide-right');
            this.slides[prevIndex].classList.add('hidden-slide');
            this.slides[prevIndex].classList.remove('erase-right');
        }, 1500);
    },
}