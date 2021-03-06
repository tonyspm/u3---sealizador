input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # #
                . . . . #
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # . .
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            basic.pause(1000)
            basic.clearScreen()
        } else {
            if (input.buttonIsPressed(Button.B)) {
                basic.showLeds(`
                    . . . . .
                    # . . . .
                    # # . . .
                    # . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    . . # # .
                    . . # . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . # . .
                    . . . # .
                    # # # # #
                    . . . # .
                    . . # . .
                    `)
                basic.pause(1000)
                basic.clearScreen()
            }
        }
    }
})
