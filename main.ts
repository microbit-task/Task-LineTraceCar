basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 350) {
        led.plot(0, 2)
        pins.analogWritePin(AnalogPin.P13, 1023)
    } else {
        led.unplot(0, 2)
        pins.analogWritePin(AnalogPin.P13, 500)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.analogWritePin(AnalogPin.P15, 500)
    }
    if (pins.analogReadPin(AnalogPin.P1) < 350) {
        led.plot(4, 2)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.analogWritePin(AnalogPin.P15, 1023)
    } else {
        led.unplot(0, 2)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.analogWritePin(AnalogPin.P15, 500)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.analogWritePin(AnalogPin.P13, 500)
    }
    if (pins.analogReadPin(AnalogPin.P0) < 350 && pins.analogReadPin(AnalogPin.P0) < 350) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.analogWritePin(AnalogPin.P13, 800)
        pins.analogWritePin(AnalogPin.P15, 800)
    }
})
