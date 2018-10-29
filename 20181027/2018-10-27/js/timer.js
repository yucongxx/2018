let  timeBox= document.getElementById('timeBox');


function computed() {
    let targetime = new Date('2019 03 12 00:00:00');
    let nowTime = new Date();
    let time = Math.floor((targetime - nowTime) / 1000);

    if (time <= 0) {
        timeBox.innerHTML = '亲亲宝宝';
        clearInterval(timer);
    } else {
        let day = Math.floor(time / 86400);
        time %= 86400;
        let hour = Math.floor(time / 3600);
        time %= 3600;
        let minutes = Math.floor(time / 60);
        time %= 60;
        timeBox.innerHTML = addZero(day) + '天 ' + addZero(hour) + ': ' + addZero(minutes) + ': ' + addZero(time);
        console.log(minutes);
    }

}
computed();
let timer = setInterval(computed, 1000);

function addZero(val) {
    return val < 10 ? '0' + val : val;
}