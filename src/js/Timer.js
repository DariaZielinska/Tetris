class Timer{
    constructor(tickCallback){
        this.tickCallback = tickCallback;
    }

    startCount = () =>{
        this.time = setInterval(() => {
            this.tickCallback();
        }, 1000);
    }

    pauseCount = () =>{
        clearInterval(this.time)
    }

}

export default Timer;

