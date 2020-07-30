import React, {useState, useEffect} from 'react'
import Guitar from 'utils/GuitarPlayer.js'

// components
import { 
  MDBBtn as Button,
  MDBNav,
  MDBNavItem,
  MDBNavLink
} from 'mdbreact'

function Tuning(){
  const tunningList = [{id: 'standard', title: "Standard", tones: ['E1', 'A1', 'D2', 'G2', 'B2', 'E3']}, {id: 'open-b', title: "Open B", tones: ["D1", "A1", "D2", "F#2", "A2", "D3"]}] // current tunning (only standard)
  const [tunningIndex, setTunningIndex] = useState(0)
  const [stringIndex, setStringIndex] = useState(-1) // string number, -1 for not set yet
  const playTone = ()=> {Guitar.loopNote(tunningList[tunningIndex].tones[stringIndex]); Guitar.start()} // loop tone
  const stopTone = () => Guitar.stop() // stop audio
  const createTuningButtons = () => tunningList[tunningIndex].tones.map((tone, index) => <Button key={index} onClick={() => setStringIndex(index)}>{tone}</Button>) // set index on button press
  useEffect(()=>{if( 0 <= stringIndex && stringIndex < tunningList[tunningIndex].tones.length){playTone()}}, [stringIndex]) // play tone every time index changes
  // useEffect(()=>{}, [tunningIndex])
  return (
    <div>
      <h1>Tuning - Standard</h1>
      <p>Tune down your guitar so that you can retune up to match the notes.  If you do this every day you will begin to memorize the guitar tones while practicing tone matching.</p>

      <MDBNav className="mt-5 nav-pills">
        <MDBNavItem>
          <MDBNavLink link to="#" active={tunningIndex === 0} onClick={()=>setTunningIndex(0)} >
            {tunningList[0].title}
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink link to="#" active={tunningIndex === 1} onClick={()=>setTunningIndex(1)} >
            {tunningList[1].title}
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>
      <hr />

      {createTuningButtons()}
      <Button color="danger" onClick={stopTone}>Stop Playing</Button>
    </div>
  )
}

export default Tuning