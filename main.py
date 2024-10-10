input.onButtonPressed(Button.A, function () {
    score += -1
    radio.sendString("a")
})
radio.onReceivedString(function (receivedString) {
	
})
input.onButtonPressed(Button.B, function () {
    score += 1
    radio.sendString("b")
})
let score = 0
while (true) {
    basic.showNumber(score)
}
while (true) {
    radio.setGroup(1)
    radio.setTransmitPower(7)
    radio.setFrequencyBand(37)
    radio.sendNumber(score)
}
