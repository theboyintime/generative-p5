// Function to create a blank canvas with width height and render type
// Setup global constraints for the size of elements
const CRYSTAL_SIZE = 500
const SIDES = 6
let PALETTE = [] // color palette for crystals

const layers = []

function setup() {
    createCanvas(600, 600, [SVG])

    PALETTE = [
        //https://www.instagram.com/p/BkyPvPrBce6/?taken-by=khromacolors
        color(205, 55, 31), 
        color(31, 33, 120), 
        color(225, 162, 163),
        color(236, 236, 219)
    ]

    noLoop()
    angleMode(DEGREES) // setup rotation units in degrees
    rectMode(CENTER) // draw rectangles from the center
}

// function decideds whether to draw a shape with 6 or 12 lines based on randomSelectTwo()
function testLines() {
let numShapes = randomSelectTwo() ? SIDES : SIDES * 2// randomly draw some shapes with 6 or 12 lines
/* if (randomSelectTwo()) {
    numShapes = SIDES // same function as let numShapes
} else {
    numShapes = SIDES * 2
} */

const strokeColor = getRandomColor()
    noFill()
    stroke(PALETTE[0]) // outline color for ellipse
    strokeWeight(1)
    push() 
        translate(width/2, height/2)
        
        ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
        stroke(strokeColor) // outline color for line drawn on line 34
        const angle = 360 / numShapes
        // for loop helps to repeat line drawn in line below
        for (let i = 0; i < numShapes; i++) {
            line(0, 0, 0, CRYSTAL_SIZE/2)
            rotate(angle)
        }
    pop() // restore origin axis  
}

// function to determine hexagon or ellipse
// function outlineShape() {
//     const strokeColor = getRandomColor()
//     const weight = randomSelectTwo() ? 1 : 3
//     const hexagonTrue = randomSelectTwo()
  
//     strokeWeight(weight)
//     stroke(strokeColor)
//     push()
//     translate(width/2, height/2)
//     if (hexagonTrue) {
//         hexagon(0,0,CRYSTAL_SIZE/2)
//     }else {
//         ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
//     }
//     pop()
// }

// Same function as testLines() but they start from 3 steps inwards
// function simpleLines() {
//     const stepsOut = 8
//     const numSteps = randomSelectTwo() ? stepsOut : int(stepsOut * 1.25) // determines how far out of center to draw lines
//     const step = (CRYSTAL_SIZE / 2) / numSteps
//     const start =  floor(random(0, numSteps))
//     const stop = floor(random(start, numSteps + 1))

//     let numShapes = randomSelectTwo() ? SIDES : SIDES * 2// randomly draw some shapes with 6 or 12 lines
//     const strokeColor = getRandomColor()
//     const weight = randomSelectTwo() ? 1 : 3

//     const angle = 360 / numShapes
    
//     noFill()
//     stroke(strokeColor)
//     strokeWeight(weight)
//     push() 
//         translate(width/2, height/2)
        
//         // for loop helps to repeat line drawn in line below
//         for (let i = 0; i < numShapes; i++) {
//             //line( 0,start * step,0, stop * step) // x1, y1, x2, y2
//             line(start * step, 0, stop * step, 0)
//             rotate(angle)
//         }
//     pop() // restore origin axis  
// }

//function to draw external circles
// new file in layers.js
// function circles() {
//     //const numShapes = SIDES * 2
//     const numShapes = SIDES
//     const angle = 360 / numShapes
//     const shapeSize = (CRYSTAL_SIZE / 2) * 0.93
//     const position = (CRYSTAL_SIZE / 2) - (shapeSize / 2)
//     const strokeColor = getRandomColor()

//     noFill()
//     stroke(strokeColor)
//     strokeWeight(1)
//     push()
//         translate(width/2, height/2)
//         for (let i = 0; i <= numShapes; i++) {
//             ellipse(position, 0, shapeSize, shapeSize)
//             rotate(angle)  
//         }
//     pop()

// }

// Function to draw to canvas 
function draw() {
    // const circles = new Circles()
    // // render cirlce drawing from layer.js
    // circles.render()

    // const simpleLines = new SimpleLines()
    // simpleLines.render()

    // const outlineShape = new OutlineShape()
    // outlineShape.render()

    const dottedLines = new DottedLines()
    dottedLines.render()

    const centeredShape = new CenteredShape()
    centeredShape.render()

    const ringOfShapes = new RingOfShapes()
    ringOfShapes.render()

    const steppedHexagons = new SteppedHexagons()
    steppedHexagons.render()


    // testLines()
    //console.log(Layer)

    //testLines()
    // outlineShape()
    // simpleLines()
    // circles()

    let picker = random(0, 1)
    if (picker > 0.3) {
        layers.push(new OutlineShape())
    }

    picker = random(1)
    if (picker > 0.3) {
        layers.push(new SimpleLines())
    }

    picker = random(1)
    if (picker > 0.3) {
        layers.push(new Circles())
    }

    layers.forEach(layer =>{
        layer.render()
    })
}
