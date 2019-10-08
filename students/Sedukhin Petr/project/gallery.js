let counter = 0

function makeRoulette(){
    let htmlString = '<div id="roulette">'
    imgs.forEach(el => {
        htmlString += `
        <img src="img/${el}" alt="${imgs.indexOf(el)}">
         `
    })
    return (htmlString)  
}

function renderGallery(){
    let htmlString = '<button class="cls-glr">x</button>'
    htmlString += '<button id="left" class="cmd-btn" data-step="-1"><</button>'
    htmlString += `<img class = "main-img" src="img/${imgs[0]}" alt="${imgs[0]}">`
    htmlString += '<button id="right" class="cmd-btn" data-step="1">></button>'
    htmlString += makeRoulette()
    document.querySelector('.gallery-show').innerHTML = htmlString  
}

document.querySelector ('.products').addEventListener ('click', function (e) {
    if (e.target.tagName === ('IMG')) {
        renderGallery()
        document.querySelector('.gallery-window').style.display = ('block')
    }
})


document.querySelector('.gallery-window').addEventListener ('click', function (evt) {
    if (evt.target.tagName === 'IMG' && evt.target.parentElement.id === 'roulette') {
        document.querySelector('.main-img').src = evt.target.src
        counter = +evt.target.alt
    } else if (evt.target.classList.contains ('cmd-btn')) {
        if (evt.target.id === 'left' && counter === 0) counter = 7
        if (evt.target.id === 'right' && counter === 6) counter = -1
        document.querySelector('.main-img').src = `img/${imgs[counter += +evt.target.dataset['step']]}`
    } else if (evt.target.classList.contains ('cls-glr')){
        document.querySelector('.gallery-window').style.display = ('none')
    }
})
