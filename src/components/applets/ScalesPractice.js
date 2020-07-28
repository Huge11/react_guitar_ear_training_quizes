import React, { useState, useEffect } from 'react'
// import Guitar from 'utils/Guitar.js'
import { Scale } from "@tonaljs/tonal";
import { Fretboard } from "fretboards";


// components
import { 
  MDBBtn as Button
} from 'mdbreact'

// const Scales = ["major pentatonic", "minor pentatonic", "major blues", "minor blues", "harmonic minor", "lydian", "melodic minor", "locrian", "phrygian", "aeolian", "harmonic major", "dorian", "mixolydian", "major" ]
const Scales = ['lydian', 'major', 'mixolydian', 'dorian', 'aeolian', 'phrygian', 'locrian', "harmonic-minor", "melodic-minor", "minor-pentatonic", "minor-blues", "major-pentatonic", "major-blues"]
const allNotes = [ "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"];

function ScalesPractice(){
  const [scaleList, setScaleList] = useState(Scales)
  const [scale, setScale] = useState(null)
  const [tonic, setTonic] = useState(null)
  const [scaleAlias, setScaleAlias] = useState(null)
  const [fb, setBoard] = useState(null)
  // set up board when component mounts
  useEffect(()=>{
    setBoard(Fretboard({ 
      where: "#fb1",
      frets: 12,
    }))
  }, [])
  // change the scale display whenever the state changes
  useEffect(() => {
    if(fb){
      fb.clear()
      fb.scale(`${tonic} ${scale}`).paint();
    }
    getMoreScaleData()
  }, [tonic, scale])

  const newScale = async () => {
    setScale(scaleList[Math.floor(Math.random() * scaleList.length)])
    setTonic(allNotes[Math.floor(Math.random() * allNotes.length)])
  }
  const getMoreScaleData = () => {
    const data = Scale.get(`${tonic} ${scale ? scale.replace('-', ' ') : ''}`)
    setScaleAlias(data.aliases)
  }

  // function to create scale checkboxes
  const createScaleCheckboxes = () => {
    return Scales.map(scale => (
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id={`${scale}`} checked={scaleList.indexOf(scale) != -1} onChange={addOrRemoveScaleFromList} />
        <label class="custom-control-label" for={`${scale}`}>{scale}</label>
      </div>      
    ))
  }
  const addOrRemoveScaleFromList = (e) => {
    const scaleName = e.target.id
    scaleList.indexOf(scaleName) != -1 ? setScaleList(scaleList.filter(item=>item != scaleName)) : setScaleList([...scaleList, scaleName])
  }


  return(
    <div>
      <h1>Scales Practice</h1>
      <h2>{tonic ? tonic.toUpperCase() : ""} {scale ? scale.replace('-', ' ') : ''} {scaleAlias}</h2>
      <div id="fb1"></div>
      <Button onClick={newScale}>New Scale</Button>
      <div>
        <h2>Which Scales To Practice</h2>
        {createScaleCheckboxes()}
      </div>
    </div>
  )
}

export default ScalesPractice