import React from 'react'
import Guitar from 'utils/GuitarPlayer.js'

// components
import { 
  MDBBtn as Button
} from 'mdbreact'

function Tuning(){
  const playTone = (note)=> {Guitar.loopNote(note); Guitar.start()}
  const stopTone = () => Guitar.stop()

  return (
    <div>
      <h1>Tuning - Standard</h1>
      <p>Tune down your guitar so that you can retune up to match the notes.  If you do this every day you will begin to memorize the guitar tones while practicing tone matching.</p>
      <p>Try to make sure the strings are detuned at random intervals to avoid repitition.  </p>
      <Button onClick={()=>playTone('E1')}>E2</Button>
      <Button onClick={()=>playTone('A1')}>A2</Button>
      <Button onClick={()=>playTone('D2')}>D3</Button>
      <Button onClick={()=>playTone('G2')}>G3</Button>
      <Button onClick={()=>playTone('B2')}>B3</Button>
      <Button onClick={()=>playTone('E3')}>E4</Button>
      <Button color="danger" onClick={stopTone}>Stop Playing</Button>
    </div>
  )
}

export default Tuning