/*
* File: app.js
* Author: Grünhut Gábor
* Copyright: 2023, Grünhut Gábor
* Group: Szoft I-1/E
* Date: 2023-02-13
* Github: https://github.com/GaborGrunhut/
* Licenc: GNU GPL
*/


const pieceLengthElement = document.querySelector('#pieceLength');
const ppTurntElement = document.querySelector('#ppTurn');
const spindleRPMElement = document.querySelector('#spindleRPM');
const Button = document.querySelector('#Button');
const machTimeElement = document.querySelector('#machTime');

Button.addEventListener('click', () => {
    let pieceLength = Number(pieceLengthElement.value);
    let ppTurn = Number(ppTurntElement.value);
    let spindleRPM = Number(spindleRPMElement.value);
    let time = calcTime(pieceLength, ppTurn, spindleRPM);
    machTimeElement.value = time;
})

function calcTime (pieceLength, ppTurn, spindleRPM) {
    let time = pieceLength / (ppTurn*spindleRPM);
    return time;
}