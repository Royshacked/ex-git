'use strict'

function onBallClick(elBall,maxDiameter) {
    var ballSize = +elBall.innerText
    ballSize += getRandomInt(20, 61)

    if (ballSize > maxDiameter) ballSize = 100
    
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerText = ballSize
    elBall.style.backgroundColor = getRandomColor()
}

