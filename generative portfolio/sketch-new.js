const CRYSTAL_SIZE = 150
const SIDES = 6

// layout
const MARGIN = CRYSTAL_SIZE / 2
const COLUMNS = 3
const ROWS = 4
const PADDING = CRYSTAL_SIZE * 0.2
const GRIDBOX = CRYSTAL_SIZE + PADDING
const START = (CRYSTAL_SIZE / 2) + MARGIN

let PALETTE = []
ALL_CRYSTALS = []

function setup() {
  const totalX = START + GRIDBOX * COLUMNS
  const totalY = START + GRIDBOX * ROWS
  createCanvas(totalX, totalY, SVG)

  PALETTE = [
    color('#1669a8'),
    color ('#f68d5b'), 
    color ('#569dd5'),
    color ('#db5446'),
    color ('#efba46'),
    color('#f37121'),
    color('#341928'),
    color('#758697')
  ]

  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  for (let x = 0; x < COLUMNS; x++) {
    for (let y = 0; y < ROWS; y++) {
      const posX = START + (x * GRIDBOX)
      const posY = START + (y * GRIDBOX)
      ALL_CRYSTALS.push(new Crystal(posX, posY))
    }
  }

  ALL_CRYSTALS.forEach(crystal => {
    crystal.render()
  })
}