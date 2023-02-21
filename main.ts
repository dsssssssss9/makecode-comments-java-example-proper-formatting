/**
 * A program to scroll hello and then display a heart in a loop.
 */
// Create a loop
basic.forever(function () {
    // Show this string on the micro:bit LED display
    basic.showString("Hello, World!")
    // Show the heart image on the micro:bit LED display
    basic.showIcon(IconNames.Heart)
})
