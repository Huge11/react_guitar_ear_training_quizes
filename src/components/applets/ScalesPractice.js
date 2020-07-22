import React from 'react'
// import Guitar from 'utils/Guitar.js'
import { Scale } from "@tonaljs/tonal";

// components
import { 
  MDBBtn as Button
} from 'mdbreact'

const Scales = ["major pentatonic", "minor pentatonic", "major blues", "minor blues", "harmonic minor", "lydian", "melodic minor", "locrian", "phrygian", "aeolian", "harmonic major", "dorian", "mixolydian", "major" ]

function ScalesPractice(){
  console.log(Scale.get('C2 lydian'))
  return(
    <div>
      <h1>Scales Practice</h1>
    </div>
  )
}

export default ScalesPractice