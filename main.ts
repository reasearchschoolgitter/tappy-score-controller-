enum RadioMessage {
    scoreinbound = 61264,
    sync = 27907,
    zero = 7640,
    otaupdate = 23912,
    message1 = 49434
}
radio.onReceivedMessage(RadioMessage.scoreinbound, function () {
    radio.sendMessage(RadioMessage.scoreinbound)
})
function seral_mode () {
    if (input.logoIsPressed()) {
        serial.setBaudRate(BaudRate.BaudRate115200)
        serial.writeLine("controller")
    }
}
serial.onDataReceived(serial.readString(), function () {
	
})
input.onButtonPressed(Button.A, function () {
    score += -1
    radio.sendString("a")
})
radio.onReceivedMessage(RadioMessage.otaupdate, function () {
    radio.sendMessage(RadioMessage.otaupdate)
    basic.showString("your outdated, please bring your microbit back to neekan or hamza")
})
// same reason for the otaupdate reasons
radio.onReceivedMessage(RadioMessage.sync, function () {
    radio.sendMessage(RadioMessage.sync)
})
input.onButtonPressed(Button.B, function () {
    score += 1
    radio.sendString("b")
})
let myImage = images.createImage(`
    . . . . .
    # # # # #
    # . # # #
    # . # # #
    . . . # .
    `)
let score = 0
radio.setGroup(91)
radio.setTransmitPower(7)
while (true) {
    radio.sendNumber(score)
    basic.showString("" + (score))
}
myImage.showImage(0)
