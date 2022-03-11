const litterChar = [
    'A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ź', 'Ż'
]

let element
let targetChar
let mistake= 0

let graphics = document.querySelector('canvas')

const board = document.querySelector('.board')


let slogan ='to jest hasło'
slogan=slogan.toLocaleUpperCase().split('')
let long = slogan.length
const hidenSlogan=[]
for (const hiden of slogan){
    if (hiden!==' '){
        hidenSlogan.push('-')
    }else {
        hidenSlogan.push(" ")
    }
}

   
const showSlogan = (place,char) => {
    hidenSlogan.splice(place,1,char)
    board.innerHTML= hidenSlogan.join('')
}


const sprawdz = (nr) => {
let correct = false

    for(i = 0; i < long; i++){
        if(slogan[i]==litterChar[nr]) {
            correct= true
            showSlogan(i,litterChar[nr])
        }
    }
    if(correct== true){
    targetChar= 'letter'+ nr
        
        document.querySelector(`#${targetChar}`).classList.add('corectStr')
        document.querySelector(`#${targetChar}`).classList.remove('letter')
       
    }else{
        targetChar= 'letter'+ nr
        document.querySelector(`#${targetChar}`).classList.add('faulStr')
        document.querySelector(`#${targetChar}`).classList.remove('letter')
        
        document.querySelector(`#${targetChar}`).setAttribute('onclick',';')
        mistake++
        console.log(mistake);
       

    }
    
}

function start() {

    board.innerHTML=hidenSlogan.join('')
    divContent = ''
    for (i = 0; i <= 34; i++) {
        element = 'letter' + i
        divContent = `${divContent}<div onclick=sprawdz(${i})   class='letter'id='${element}'>${litterChar[i]}</div>`
        //  if((i+1)%7 ==0) {divContent = `${divContent}<div style="clear:right;"></div>`}
    }

    document.querySelector('.alphabet').innerHTML = divContent


    // showSlogan()
}

window.onload = start