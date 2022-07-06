const time = setTimeout(() => {
    console.log('Time out in 2')

}, 3000);

setInterval(() => {
    console.log('Time Interval in 2');
    time;
}, 1000)