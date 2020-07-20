import React, {useState} from 'react'
import Guitar from 'utils/Guitar.js'

// components
import { 
  MDBBtn as Button
} from 'mdbreact'

const toneList = ['A1', 'A2', 'A3', 'As1', 'As2', 'As3', 'B1', 'B2',  'B3', 'C2', 'C3', 'C4', 'Cs2', 'Cs3', 'Cs4', 'D1',  'D2', 'D3', 'D4', 'Ds1', 'Ds2', 'Ds3', 'E1', 'E2',  'E3',  'F1', 'F2',  'F3', 'Fs1', 'Fs2', 'Fs3', 'G1',  'G2', 'G3',  'Gs1', 'Gs2', 'Gs3']



function ToneMatch(){
  const [note, setNote] = useState(toneList[Math.floor(Math.random() * toneList.length)])
  const [check, setCheck] = useState(false)
  const playTone = ()=> {Guitar.loopNote(note); Guitar.start()}
  const stopTone = () => Guitar.stop()
  const checkNote = () => {
    setCheck(true); 
    stopTone()
  }
  const setUpGuitar = () => {
    stopTone()
    setCheck(false)
    setNote(toneList[Math.floor(Math.random() * toneList.length)])
    // Guitar.loopNote(note)
  }

  return (
    <div>
      <h1>ToneMatch</h1>
      <Button onClick={()=>{playTone()}} >Play Tone</Button>
      <Button onClick={()=>{stopTone()}}>Stop Tone</Button>
      <Button onClick={()=>{checkNote()}}>Check Note</Button>
      <Button onClick={()=>{setUpGuitar()}}>New Note</Button>
      <h2>Try to match the note...</h2>
      <p hidden={!check}>{note}</p>
    </div>
  )
}

export default ToneMatch