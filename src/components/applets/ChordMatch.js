import React, {useState} from 'react'
import random from 'random'
// import GuitarPlayer from 'utils/GuitarPlayer.js'
// import { Chord } from "@tonaljs/tonal";
import chordDb from 'assets/chordDb/index.js'
import { Guitar } from 'utils/guitarMap/index.js'

// components
import { 
  MDBBtn as Button
} from 'mdbreact'

// const toneList = ['A1', 'A2', 'A3', 'As1', 'As2', 'As3', 'B1', 'B2', 'C2', 'Cs2', 'D1',  'D2', 'Ds1', 'Ds2', 'E1', 'E2', 'F1', 'F2', 'Fs1', 'Fs2', 'G1', 'G2', 'Gs1', 'Gs2']
const allChords = ['major', 'minor', 'maj7', 'm7', '7']

// console.log(Chord.getChord('major', 'A3').notes)

function ChordMatch(){
  const guitar = new Guitar()
  const [chordList, setChordList] = useState(allChords)
  const createChordMatch = (max=10) => {
    const chords = []
    for(let i=0; i<max; i++){
      chords.push(chordDb.getRandomChord())
    }
    return chords.map((chord, i)=>{
      const Positions = chord.positions
      // console.log(Pos[random.int(0,chord.positions.length-1)].frets)
      return chord ? (
        <div>
          <h2>#{i+1}</h2>
          <Button onClick={()=>{guitar.loopFrets(Positions[random.int(0,chord.positions.length-1)].frets)}} >Play Chord</Button>
          <Button onClick={()=>{guitar.stopPlaying()}} >Stop Chord</Button>
          <Button onClick={(e)=>{e.target.innerText=`${chord.key} ${chord.suffix}`; e.target.disabled=true; guitar.stopPlaying()}} >Check Chord</Button>
        </div>
      ) : <p>Error</p>
    })
  }
  const createChordSelection = ()=>{
    const addOrRemoveChordFromList = (e) => {
      const chordName = e.target.id
      chordList.indexOf(chordName) != -1 ? setChordList(chordList.filter(item=>item != chordName)) : setChordList([...chordList, chordName])
    }
    return allChords.map(chord=>(
      <div key={chord} className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id={`${chord}`} checked={chordList.indexOf(chord) != -1} onChange={addOrRemoveChordFromList} />
        <label className="custom-control-label" for={`${chord}`}>{chord}</label>
      </div> 
    ))
  }

  return (
    <div>
      <h1>Chord Match</h1>
      {createChordSelection()}
      <hr />
      {createChordMatch()}
    </div>
  )
}

// function ChordMatch(){
//   const [rootNote, setRootNote] = useState(toneList[Math.floor(Math.random() * toneList.length)])
//   const [chord, setChord] = useState(chordList[Math.floor(Math.random() * chordList.length)])
//   const [check, setCheck] = useState(false)
//   const playChord = ()=> { Guitar.loopChord(chord, rootNote); Guitar.start() }
//   const stopChord = () => { Guitar.stop() }
//   const checkChord = () => { setCheck(true); stopChord() }
//   const setUpGuitar = () => {
//     stopChord(); setCheck(false);
//     const newChord = chordList[Math.floor(Math.random() * chordList.length)]
//     const newRoot = toneList[Math.floor(Math.random() * toneList.length)]
//     setChord(newChord); setRootNote(newRoot);
//     console.log(`set up guitar with ${newRoot} ${newChord}`)
//   }

//   return (
//     <div>
//       <h1>Chord Match</h1>
//       <Button onClick={()=>{playChord()}} >Play Chord</Button>
//       <Button onClick={()=>{stopChord()}}>Stop Chord</Button>
//       <Button onClick={()=>{checkChord()}}>Check Chord</Button>
//       <Button onClick={()=>{setUpGuitar()}}>New Chord</Button>
//       <h2>Try to match the note...</h2>
//       <p hidden={!check}>{rootNote} {chord} - {Chord.getChord(chord, rootNote).notes}</p>
//     </div>
//   )
// }

export default ChordMatch