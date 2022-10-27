//Choose a card to play:

const img=[
    'Anna',
    'Ariel',
    'Belle',
    'Boo',
    'Buzz',
    'Elsa',
    'Gaston',
    'Genie',
    'Merida',
    'Peter Pan',
    'Pinocchio',
    'Woody'
]

const chooseCard = img=>{
    return img [Math.floor(Math.random()*img.length)];
}

const myCard = chooseCard(img)

// Show my card:

document.getElementById('showCard').onclick= () =>{
    yourCard.height= 180;
    switch (myCard){
        case'Anna':
        yourCard.src='./anna.png';
        break;
        case 'Ariel':
        yourCard.src='./ariel.png';
        break;
        case 'Belle':
        yourCard.src='./belle.png';
        break;
        case 'Boo':
        yourCard.src='./boo.png';
        break;
        case 'Buzz':
        yourCard.src='./buzz.png';
        break;
        case 'Elsa':
        yourCard.src='./elsa.png';
        break;
        case 'Gaston':
        yourCard.src='./gaston.png';
        break;
        case 'Genie':
        yourCard.src='./genie.png';
        break;
        case 'Merida':
        yourCard.src='./merida.png';
        break;
        case 'Peter Pan':
        yourCard.src='./peterpan.png';
        break;
        case 'Pinocchio':
        yourCard.src='./pinocchio.png';
        break;
        case 'Woody':
        yourCard.src='./woody.png';
        break;
        default:
        console.log ('Ops, something went wrong');
        break;
    }
}

//Hide your card:

document.getElementById('hideCard').onclick = ()=>{
    yourCard.src = "./hide.png"
}

// Hide on the large board game:

document.getElementById('annaBoard').onclick = ()=>{
    annaBoard.src='./hide.png'
}
document.getElementById('arielBoard').onclick = ()=>{
    arielBoard.src='./hide.png'
}
document.getElementById('belleBoard').onclick = ()=>{
    belleBoard.src='./hide.png'
}
document.getElementById('booBoard').onclick = ()=>{
    booBoard.src='./hide.png'
}
document.getElementById('buzzBoard').onclick = ()=>{
    buzzBoard.src='./hide.png'
}
document.getElementById('elsaBoard').onclick = ()=>{
    elsaBoard.src='./hide.png'
}
document.getElementById('gastonBoard').onclick = ()=>{
    gastonBoard.src='./hide.png'
}
document.getElementById('genieBoard').onclick = ()=>{
    genieBoard.src='./hide.png'
}
document.getElementById('meridaBoard').onclick = ()=>{
    meridaBoard.src='./hide.png'
}
document.getElementById('peterpanBoard').onclick = ()=>{
    peterpanBoard.src='./hide.png'
}
document.getElementById('pinocchioBoard').onclick = ()=>{
    pinocchioBoard.src='./hide.png'
}
document.getElementById('woodyBoard').onclick = ()=>{
    woodyBoard.src='./hide.png'
}

// Hide on the small board game:

document.getElementById('annaBoard2').onclick = ()=>{
    annaBoard2.src='./hide.png'
}
document.getElementById('arielBoard2').onclick = ()=>{
    arielBoard2.src='./hide.png'
}
document.getElementById('belleBoard2').onclick = ()=>{
    belleBoard2.src='./hide.png'
}
document.getElementById('booBoard2').onclick = ()=>{
    booBoard2.src='./hide.png'
}
document.getElementById('buzzBoard2').onclick = ()=>{
    buzzBoard2.src='./hide.png'
}
document.getElementById('elsaBoard2').onclick = ()=>{
    elsaBoard2.src='./hide.png'
}
document.getElementById('gastonBoard2').onclick = ()=>{
    gastonBoard2.src='./hide.png'
}
document.getElementById('genieBoard2').onclick = ()=>{
    genieBoard2.src='./hide.png'
}
document.getElementById('meridaBoard2').onclick = ()=>{
    meridaBoard2.src='./hide.png'
}
document.getElementById('peterpanBoard2').onclick = ()=>{
    peterpanBoard2.src='./hide.png'
}
document.getElementById('pinocchioBoard2').onclick = ()=>{
    pinocchioBoard2.src='./hide.png'
}
document.getElementById('woodyBoard2').onclick = ()=>{
    woodyBoard2.src='./hide.png'
}

//Refresh the large board:

document.getElementById('mistake').onclick = ()=>{
        annaBoard.src='./anna.png';
        arielBoard.src='./ariel.png';
        belleBoard.src='./belle.png';
        booBoard.src='./boo.png';
        buzzBoard.src='./buzz.png';
        elsaBoard.src='./elsa.png';
        gastonBoard.src='./gaston.png';
        genieBoard.src='./genie.png';
        meridaBoard.src='./merida.png';
        peterpanBoard.src='./peterpan.png';
        pinocchioBoard.src='./pinocchio.png';
        woodyBoard.src='./woody.png'
}

//Refresh the small board:

document.getElementById('mistake2').onclick = ()=>{
    annaBoard2.src='./anna.png'
    arielBoard2.src='./ariel.png'
    belleBoard2.src='./belle.png'
    booBoard2.src='./boo.png'
    buzzBoard2.src='./buzz.png'
    elsaBoard2.src='./elsa.png'
    gastonBoard2.src='./gaston.png'
    genieBoard2.src='./genie.png'
    meridaBoard2.src='./merida.png'
    peterpanBoard2.src='./peterpan.png'
    pinocchioBoard2.src='./pinocchio.png'
    woodyBoard2.src='./woody.png'
}

//Play again:

document.getElementById('playAgain').onclick = ()=>{
    location.reload()
}
