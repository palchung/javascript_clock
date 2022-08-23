const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function skipRollBack(deg, hand) {
    if(deg=== 0 || deg === 360) {
        hand.style.transition = 'all 0s'
    }
}

function setDate() {
    const now = new Date()

    const seconds = now.getSeconds()
    const secondsDegrees = (seconds / 60 * 360 + 90)
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    skipRollBack(secondsDegrees, secondHand)

    const mins = now.getMinutes()
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90
    minHand.style.transform = `rotate(${minsDegrees}deg)`


    const hour = now.getHours()
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`


}

setInterval(setDate, 1000);

setDate()

