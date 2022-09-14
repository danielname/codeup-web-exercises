let sayHey = function(){
    let count = 0;
    const hey = () => {
        console.log(`hey ${count}`);
        count++
    }
    setInterval(hey, 1000)
}

