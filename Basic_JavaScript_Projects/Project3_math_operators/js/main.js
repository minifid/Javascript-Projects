var rndNum=Math.floor(Math.random() * 100);
document.getElementById('rndNum').textContent=rndNum;
var pMath=document.getElementById('math');
var add, minus;
allDaMaths();
function allDaMaths(){
    var txt = ''
    add = rndNum + 5;
    minus = rndNum - 5;
    txt += 'Add ' + add + ' ';
    txt += 'Subtract ' + minus + ' ';
    txt += 'Multiply ' + rndNum * 5 + ' ';
    txt += 'Remainder ' + rndNum % 5 + ' ';
    txt += 'Increment ' +  rndNum ++ + ' ';
    txt += 'Decrement ' + rndNum -- + ' ';
    pMath.innerHTML=txt;
}
function newRnd(){
    rndNum=Math.floor(Math.random() * 100);
    document.getElementById('rndNum').textContent=rndNum;
    allDaMaths();
}