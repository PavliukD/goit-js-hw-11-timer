
export default class CountdownTimer{
    constructor({selector, targetDate}){
        this.refs = {
            timer: document.querySelector(`${selector}`),
            days: document.querySelector('[data-value = days]'),
            hours: document.querySelector('[data-value = hours]'),
            mins: document.querySelector('[data-value = mins]'),
            secs: document.querySelector('[data-value = secs]'),
        }
   
        this.startCounter(targetDate)
    }

    pad(value) {
        return String(value).padStart(2, '0')
      }

    timerCalc(time){
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)))
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000))
        
        let counterValue = {days, hours, mins, secs}

        this.timerUpdate(counterValue)
        }
    
    startCounter(targetDate){
        if (targetDate < Date.now()){
            this.refs.timer.innerHTML = 'Error'
            return
        }

        setInterval(() =>{
            this.timerCalc(targetDate - Date.now())
        })
    }

    timerUpdate({days, hours, mins, secs}){
        this.refs.days.textContent = `${days}`
        this.refs.hours.textContent = `${hours}`
        this.refs.mins.textContent = `${mins}`
        this.refs.secs.textContent = `${secs}`
    }
}

