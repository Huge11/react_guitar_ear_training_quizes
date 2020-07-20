import React, {useState} from 'react'
import Guitar from 'utils/Guitar.js'
import { Chord } from "@tonaljs/tonal";

// components
import { 
  MDBBtn as Button
} from 'mdbreact'

const toneList = ['A1', 'A2', 'A3', 'As1', 'As2', 'As3', 'B1', 'B2', 'C2', 'Cs2', 'D1',  'D2', 'Ds1', 'Ds2', 'E1', 'E2', 'F1', 'F2', 'Fs1', 'Fs2', 'G1', 'G2', 'Gs1', 'Gs2']
const chordList = ['major', 'minor', 'maj7', 'min7', 'dom7']

console.log(Chord.getChord('major', 'A3').notes)


function ChordMatch(){
  const [rootNote, setRootNote] = useState(toneList[Math.floor(Math.random() * toneList.length)])
  const [chord, setChord] = useState(chordList[Math.floor(Math.random() * chordList.length)])
  const [check, setCheck] = useState(false)
  const playChord = ()=> {Guitar.loopChord(Chord.getChord(chord, rootNote).notes); Guitar.start()}
  const stopChord = () => Guitar.stop()
  const checkChord = () => {
    setCheck(true); 
    stopChord()
  }
  const setUpGuitar = () => {
    stopChord()
    setCheck(false)
    setChord(chordList[Math.floor(Math.random() * chordList.length)])
    setRootNote(toneList[Math.floor(Math.random() * toneList.length)])
  }

  return (
    <div>
      <h1>Chord Match</h1>
      <Button onClick={()=>{playChord()}} >Play Chord</Button>
      <Button onClick={()=>{stopChord()}}>Stop Chord</Button>
      <Button onClick={()=>{checkChord()}}>Check Chord</Button>
      <Button onClick={()=>{setUpGuitar()}}>New Chord</Button>
      <h2>Try to match the note...</h2>
      <p hidden={!check}>{rootNote} {chord} - {Chord.getChord(chord, rootNote).notes}</p>
    </div>
  )
}

export default ChordMatch