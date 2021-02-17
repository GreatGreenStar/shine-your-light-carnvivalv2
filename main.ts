let Flicker = false
basic.showString("Shine your light")
for (let index = 0; index < 3; index++) {
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . # . . .
        . . # . .
        . # . # .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # # # .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . # . . .
        . . # . .
        . # # # .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        . # # # .
        `)
}
basic.showString("That's it enjoy the candle")
let Candle = true
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && Candle == true || input.isGesture(Gesture.TiltLeft) && Candle == true) {
        basic.showLeds(`
            . # . . .
            . . # . .
            . # # # .
            . . # . .
            . # # # .
            `)
    } else if (input.buttonIsPressed(Button.B) && Candle == true || input.isGesture(Gesture.TiltRight) && Candle == true) {
        basic.showLeds(`
            . . . # .
            . . # . .
            . # # # .
            . . # . .
            . # # # .
            `)
    } else {
        if (Candle == true) {
            Flicker = Math.randomBoolean()
            if (input.isGesture(Gesture.FreeFall) && Candle == true) {
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    . # # # .
                    . . # . .
                    . # # # .
                    `)
            } else if (Flicker == true && Candle == true) {
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    . # # # .
                    . . # . .
                    . # # # .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    . # # # .
                    . . # . .
                    . # # # .
                    `)
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    . # # # .
                    . . # . .
                    . # # # .
                    `)
            } else if (Flicker == false && Candle == true) {
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    . # # # .
                    . . # . .
                    . # # # .
                    `)
            } else {
                basic.showString("You found an error! OH NO!")
            }
        }
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 500) {
        pins.servoWritePin(AnalogPin.P0, 180)
        for (let index = 0; index < 1; index++) {
            music.playMelody("C5 C B D A E G F ", 120)
            music.playMelody("F G E A D B C C5 ", 120)
        }
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
        for (let index = 0; index < 2; index++) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            music.playTone(330, music.beat(BeatFraction.Whole))
            basic.pause(1000)
            pins.digitalWritePin(DigitalPin.P0, 0)
            music.playTone(165, music.beat(BeatFraction.Whole))
            basic.pause(1000)
        }
    }
})
basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        basic.pause(70000)
    }
    control.reset()
})
