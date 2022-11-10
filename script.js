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
        yourCard.src='./images/anna.png';
        break;
        case 'Ariel':
        yourCard.src='./images/ariel.png';
        break;
        case 'Belle':
        yourCard.src='./images/belle.png';
        break;
        case 'Boo':
        yourCard.src='./images/boo.png';
        break;
        case 'Buzz':
        yourCard.src='./images/buzz.png';
        break;
        case 'Elsa':
        yourCard.src='./images/elsa.png';
        break;
        case 'Gaston':
        yourCard.src='./images/gaston.png';
        break;
        case 'Genie':
        yourCard.src='./images/genie.png';
        break;
        case 'Merida':
        yourCard.src='./images/merida.png';
        break;
        case 'Peter Pan':
        yourCard.src='./images/peterpan.png';
        break;
        case 'Pinocchio':
        yourCard.src='./images/pinocchio.png';
        break;
        case 'Woody':
        yourCard.src='./images/woody.png';
        break;
        default:
        console.log ('Ops, something went wrong');
        break;
    }
}

//Hide your card:

document.getElementById('hideCard').onclick = ()=>{
    yourCard.src = "./images/hide.png"
}

// Hide pictures:

const hidePic= pictureName =>{
    document.getElementById(pictureName).src = './images/hide.png'
}

//Refresh the large board:

document.getElementById('mistake').onclick = ()=>{
        annaBoard.src='./images/anna.png';
        arielBoard.src='./images/ariel.png';
        belleBoard.src='./images/belle.png';
        booBoard.src='./images/boo.png';
        buzzBoard.src='./images/buzz.png';
        elsaBoard.src='./images/elsa.png';
        gastonBoard.src='./images/gaston.png';
        genieBoard.src='./images/genie.png';
        meridaBoard.src='./images/merida.png';
        peterpanBoard.src='./images/peterpan.png';
        pinocchioBoard.src='./images/pinocchio.png';
        woodyBoard.src='./images/woody.png'
}

//Refresh the small board:

document.getElementById('mistake2').onclick = ()=>{
    annaBoard2.src='./images/anna.png'
    arielBoard2.src='./images/ariel.png'
    belleBoard2.src='./images/belle.png'
    booBoard2.src='./images/boo.png'
    buzzBoard2.src='./images/buzz.png'
    elsaBoard2.src='./images/elsa.png'
    gastonBoard2.src='./images/gaston.png'
    genieBoard2.src='./images/genie.png'
    meridaBoard2.src='./images/merida.png'
    peterpanBoard2.src='./images/peterpan.png'
    pinocchioBoard2.src='./images/pinocchio.png'
    woodyBoard2.src='./images/woody.png'
}

//Play again:

document.getElementById('playAgain').onclick = ()=>{
    location.reload()
}
