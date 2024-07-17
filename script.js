const sechand = document.querySelector('.second-hand');
const minhand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');


function setDate(){
    const now = new Date();
    const secs = now.getSeconds();
    const secdeg = (secs/60)*360 + 90;
    sechand.style.transform = `rotate(${secdeg}deg)`;
    const mins = now.getMinutes();
    const mindeg = (mins/60)*360 + 90;
    minhand.style.transform = `rotate(${mindeg}deg)`;
    const hours = now.getHours();
    const hourdeg = (hours/60)*360 + 90;
    hourhand.style.transform = `rotate(${hourdeg}deg)`;
    console.log(`${hours}:${mins}:${secs}`);
}
setInterval(setDate, 1000)