import React, {useState} from 'react'
// import Guitar from 'utils/GuitarPlayer.js'
import { Guitar } from 'utils/guitarMap/index.js'

// components
import { 
  MDBBtn as Button
} from 'mdbreact'

function ToneMatch(){
  const guitar = new Guitar()
  const createToneMatchItems = (max=10) => {
    const frets = []
    for(let i=0; i<max; i++){
      frets.push(guitar.getRandomFret())
    }
    return frets.map((fret, i) => {
      return fret ? (
        <div>
          <h2>#{i+1}</h2>
          <Button onClick={()=>fret.loopTone()}>Play Tone</Button>
          <Button onClick={()=>fret.stopTone()}>Stop Tone</Button>
          <Button onClick={e=>{e.target.innerText=fret.getTone().replace('s', '#'); e.target.disabled=true; fret.stopTone()}}>Check Answer</Button>
        </div>
      ) : <p>Error</p>
    })
  }

  return (
    <div>
      <h1>Tone Match</h1>
      <hr />
      {createToneMatchItems()}
    </div>
  )
}

export default ToneMatch