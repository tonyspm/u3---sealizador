basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(1000)
    }
    basic.clearScreen()
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(1000)
    }
    basic.clearScreen()
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
