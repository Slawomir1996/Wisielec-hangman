window.onload = start

function start() {
    canvas = ''
    board.innerHTML = hidenSlogan.join('')
    divContent = ''
    for (i = 0; i <= 34; i++) {
        element = 'letter' + i
        divContent = `${divContent}<div onclick=sprawdz(${i})   class='letter'id='${element}'>${litterChar[i]}</div>`
        //  if((i+1)%7 ==0) {divContent = `${divContent}<div style="clear:right;"></div>`}
    }

    document.querySelector('.alphabet').innerHTML = divContent



    // showSlogan()
}
const litterChar = [
    'A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ź', 'Ż'
]


let element
let targetChar
let mistake = 0;

const board = document.querySelector('.board')


let slogan = 'to jest hasło'
slogan = slogan.toLocaleUpperCase().split('')
let long = slogan.length
const hidenSlogan = []
for (const hiden of slogan) {
    if (hiden !== ' ') {
        hidenSlogan.push('-')
    } else {
        hidenSlogan.push(" ")
    }
}


const showSlogan = (place, char) => {
    hidenSlogan.splice(place, 1, char)
    board.innerHTML = hidenSlogan.join('')
}


const sprawdz = (nr) => {
    let correct = false

    for (i = 0; i < long; i++) {
        if (slogan[i] == litterChar[nr]) {
            correct = true
            showSlogan(i, litterChar[nr])
        }
    }
    if (correct == true) {
        targetChar = 'letter' + nr

        document.querySelector(`#${targetChar}`).classList.add('corectStr')
        document.querySelector(`#${targetChar}`).classList.remove('letter')

    } else {
        targetChar = 'letter' + nr
        document.querySelector(`#${targetChar}`).classList.add('faulStr')
        document.querySelector(`#${targetChar}`).classList.remove('letter')

        document.querySelector(`#${targetChar}`).setAttribute('onclick', ';')
        mistake++
        console.log(mistake);
        canvasDraw(mistake)

    }
}

const canvasDraw = (mistake) => {
    if (mistake == 1) {
        draw = () => {
            let canvas = document.querySelector('canvas')
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            let context = canvas.getContext("2d")
            context.fillStyle = 'white';
            context.fillRect(50, 500, 300, 40, );

        }
        draw()


    }
    if (mistake == 2) {
        draw = () => {
            let canvas = document.querySelector('canvas')
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            let context = canvas.getContext("2d")
            context.fillStyle = 'white';
            context.fillRect(50, 500, 300, 40, );
            context.fillRect(80, 100, 20, 400, );


        }
        draw()


    }
    if (mistake == 3) {
        draw = () => {
            let canvas = document.querySelector('canvas')
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            let context = canvas.getContext("2d")
            context.fillStyle = 'white';
            context.fillRect(50, 500, 300, 40, );
            context.fillRect(80, 100, 20, 400, );
            context.fillRect(80, 100, 200, 20, );

        }
        draw()
    }
    if (mistake == 4) {
        draw = () => {
            let canvas = document.querySelector('canvas')
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            let context = canvas.getContext("2d")
            context.fillStyle = 'white';
            context.fillRect(50, 500, 300, 40, );
            context.fillRect(80, 100, 20, 400, );
            context.fillRect(80, 100, 200, 20, );
            context.fillRect(220, 100, 10, 140, );
        }

    }
    draw()



    if (mistake == 5) {
        draw = () => {
            let canvas = document.querySelector('canvas')
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            let context = canvas.getContext("2d")
            context.fillStyle = 'white';
            context.fillRect(50, 500, 300, 40, );
            context.fillRect(80, 100, 20, 400, );
            context.fillRect(80, 100, 200, 20, );
            context.fillRect(220, 100, 10, 140, );
            context.arc(240, 200, 35, 0, 2 * Math.PI)
            context.fillStyle = 'white';
            context.fill();
            context.lineWiddth = 6;
            context.srrokeStyle = '#505050'
            context.stroke();

            context.beginPath()
            context.moveTo(240, 235)
            context.lineTo(240, 340)
            context.strokeStyle = 'white'
            context.lineWidth =15
            context.stroke()

            context.beginPath()
            context.moveTo(240, 265)
            context.lineTo(280, 290)
            context.strokeStyle = 'white'
            context.lineWidth =15
            context.stroke()

            context.beginPath()
            context.moveTo(240, 265)
            context.lineTo(200, 290)
            context.strokeStyle = 'white'
            context.lineWidth =15
            context.stroke()

            context.beginPath()
            context.moveTo(240, 340)
            context.lineTo(200, 390)
            context.strokeStyle = 'white'
            context.lineWidth =15
            context.stroke()

            context.beginPath()
            context.moveTo(240, 340)
            context.lineTo(280, 390)
            context.strokeStyle = 'white'
            context.lineWidth =15
            context.stroke()
           
        }


        draw()
    }
    if(mistake==6){
        alert('game over')
        window.location.reload(true)
    }
    
}