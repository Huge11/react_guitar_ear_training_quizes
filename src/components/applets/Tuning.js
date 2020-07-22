import React from 'react'
import Guitar from 'utils/Guitar.js'

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
      <Button onClick={()=>playTone('E2')}>E2</Button>
      <Button onClick={()=>playTone('A2')}>A2</Button>
      <Button onClick={()=>playTone('D3')}>D3</Button>
      <Button onClick={()=>playTone('G3')}>G3</Button>
      <Button onClick={()=>playTone('B3')}>B3</Button>
      <Button onClick={()=>playTone('E4')}>E4</Button>
      <Button color="danger" onClick={stopTone}>Stop Playing</Button>
    </div>
  )
}

export default Tuning