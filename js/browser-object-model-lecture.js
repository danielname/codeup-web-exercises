let sayHey = function(){
    let count = 0;
    const hey = () => {
        console.log(`hey ${count}`);
        count++
    }
    setInterval(hey, 1000)
}

// could set interval be manually triggeted to clear interval within the hey function?


//set timeout
setTimeout(wakeUpUser,5000)
function wakeUpUser(){
    alert(`WAKE UPPPPPPPPPPP!!!!`)
}