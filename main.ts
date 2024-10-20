radio.onReceivedNumber(function (receivedNumber) {
    ShowTheFace(receivedNumber)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    selected = selected + 1
    if (selected > Max) {
        selected = 0
    }
    ShowTheFace(selected)
})
function ShowTheFace (num: number) {
    basic.clearScreen()
    if (num == 0) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (num == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            # . . . #
            . # # # .
            `)
    }
    if (num == 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    if (num == 4) {
        images.createBigImage(`
            . # # . . # # . . .
            # . . . # . . # . .
            # . . . # . . # . .
            # . . . # . . # . .
            . # # . . # # . . .
            `).scrollImage(1, 50)
        images.createBigImage(`
            # . . . # . # # # .
            # # . # # . # . . .
            # . # . # . # # . .
            # . . . # . # . . .
            # . . . # . # # # .
            `).scrollImage(1, 50)
        images.createBigImage(`
            . # . . # . # # # .
            . # . . # . # . . .
            . # # # # . # # . .
            . # . . # . # . . .
            . # . . # . # # # .
            `).scrollImage(1, 50)
        images.createBigImage(`
            . # # . . . # # # .
            . # . # . . # . . .
            . # # . . . # # . .
            . # . # . . # . . .
            . # . # . . # # # .
            `).scrollImage(1, 50)
    }
    if (num == 5) {
        images.createBigImage(`
            # . . # . # # # . .
            # . . # . . # . . .
            # # # # . . # . . .
            # . . # . . # . . .
            # . . # . # # # . .
            `).scrollImage(1, 100)
    }
    if (num == 6) {
        images.createBigImage(`
            # . . . # . . # # .
            . # . # . . # . . #
            . . # . . . # . . #
            . . # . . . # . . #
            . . # . . . . # # .
            `).scrollImage(1, 100)
    }
    if (num == 7) {
        images.iconImage(IconNames.Heart).showImage(0)
    }
    if (num == 8) {
        images.iconImage(IconNames.SmallHeart).showImage(0)
    }
    if (num == 9) {
        images.iconImage(IconNames.Yes).showImage(0)
    }
    if (num == 10) {
        images.iconImage(IconNames.No).showImage(0)
    }
    if (num == 11) {
        images.iconImage(IconNames.Confused).showImage(0)
    }
    if (num == 12) {
        images.iconImage(IconNames.Angry).showImage(0)
    }
    if (num == 13) {
        images.iconImage(IconNames.Asleep).showImage(0)
    }
    if (num == 14) {
        images.iconImage(IconNames.Silly).showImage(0)
    }
    if (num == 15) {
        images.iconImage(IconNames.Fabulous).showImage(0)
    }
    if (num == 16) {
        images.iconImage(IconNames.Fabulous).showImage(0)
    }
    if (num == 17) {
        images.iconImage(IconNames.Meh).showImage(0)
    }
    if (num == 18) {
        images.iconImage(IconNames.TShirt).showImage(0)
    }
    if (num == 19) {
        images.iconImage(IconNames.Rollerskate).showImage(0)
    }
    if (num == 20) {
        images.iconImage(IconNames.Duck).showImage(0)
    }
    if (num == 21) {
        images.iconImage(IconNames.House).showImage(0)
    }
    if (num == 22) {
        images.iconImage(IconNames.Tortoise).showImage(0)
    }
    if (num == 23) {
        images.iconImage(IconNames.StickFigure).showImage(0)
    }
    if (num == 24) {
        images.iconImage(IconNames.Giraffe).showImage(0)
    }
    if (num == 24) {
        images.iconImage(IconNames.Ghost).showImage(0)
    }
    if (num == 25) {
        images.iconImage(IconNames.Skull).showImage(0)
    }
    if (num == 26) {
        images.iconImage(IconNames.Umbrella).showImage(0)
    }
    if (num == 27) {
        images.iconImage(IconNames.Snake).showImage(0)
    }
    if (num == 28) {
        images.iconImage(IconNames.Rabbit).showImage(0)
    }
    if (num == 29) {
        images.iconImage(IconNames.Cow).showImage(0)
    }
    if (num == 30) {
        images.iconImage(IconNames.QuarterNote).showImage(0)
    }
    if (num == 31) {
        images.iconImage(IconNames.EighthNote).showImage(0)
    }
    if (num == 32) {
        images.iconImage(IconNames.EighthNote).showImage(0)
    }
}
input.onButtonPressed(Button.AB, function () {
    Send()
})
function Send () {
    radio.sendNumber(selected)
    basic.clearScreen()
    images.createImage(`
        . . . . .
        . . . . .
        # . # . #
        . . . . .
        . . . . .
        `).scrollImage(1, 50)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    selected = selected - 1
    if (selected < 0) {
        selected = Max
    }
    ShowTheFace(selected)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
let selected = 0
let Max = 0
Max = 8
radio.setGroup(3)
selected = 0
ShowTheFace(selected)
basic.pause(500)
basic.clearScreen()
