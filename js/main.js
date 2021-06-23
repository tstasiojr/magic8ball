const fieldQuestion = document.createElement('input');
const labelAskMe = document.createElement('label');
const buttonAsk = document.createElement('button');

labelAskMe.innerText = 'Ask me anyting!';
buttonAsk.innerText = 'Ask';

const inputBox = document.createElement('div');

inputBox.appendChild(labelAskMe);
inputBox.appendChild(fieldQuestion);
inputBox.appendChild(buttonAsk);

document.body.appendChild(inputBox);

const answerBox = document.createElement('div');
const eightBall = document.createElement('img');

answerBox.id = 'answers';
eightBall.src = 'img/magic8ball_start.png';
eightBall.width = '250';
answerBox.appendChild(eightBall);
document.body.appendChild(answerBox);

function ask() {
    let randNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randNumber);
    eightBall.src = 'img/magic8ball_'+ randNumber +'.png';
}

buttonAsk.addEventListener('click', function() {
    ask();
    });
