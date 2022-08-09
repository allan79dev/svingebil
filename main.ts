input.onButtonPressed(Button.A, function () {
    servos.P1.run(-50)
    basic.pause(100)
    servos.P1.stop()
})
input.onButtonPressed(Button.B, function () {
    servos.P1.run(50)
    basic.pause(100)
    servos.P1.stop()
})
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < -30) {
        servos.P2.run(100)
    } else if (input.rotation(Rotation.Pitch) > 40) {
        servos.P2.run(-50)
    } else {
        servos.P2.stop()
    }
})
