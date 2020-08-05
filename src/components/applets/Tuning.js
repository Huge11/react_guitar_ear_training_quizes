import React, {useState, useEffect} from 'react'
import Guitar from 'utils/GuitarPlayer.js'

// components
import { 
  MDBBtn as Button,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBLink
} from 'mdbreact'

function Tuning(){
  const tuningList = [{id: 'standard', title: "Standard", tones: ['E1', 'A1', 'D2', 'G2', 'B2', 'E3']}, {id: 'open-b', title: "Open B", tones: ["D1", "A1", "D2", "F#2", "A2", "D3"]}] // current tunning (only standard)
  const [tuningIndex, setTuningIndex] = useState(0)
  const [stringIndex, setStringIndex] = useState(-1) // string number, -1 for not set yet
  const playTone = ()=> {Guitar.loopNote(tuningList[tuningIndex].tones[stringIndex]); Guitar.start()} // loop tone
  const stopTone = () => Guitar.stop() // stop audio
  const createTuningButtons = () => tuningList[tuningIndex].tones.map((tone, index) => <Button key={index} onClick={() => setStringIndex(index)}>{tone}</Button>) // set index on button press
  useEffect(()=>{if( 0 <= stringIndex && stringIndex < tuningList[tuningIndex].tones.length){playTone()}}, [stringIndex]) // play tone every time index changes
  // useEffect(()=>{}, [tunningIndex])
  return (
    <div>
      <h1>Tuning - Standard</h1>
      <p>Tune down your guitar so that you can retune up to match the notes.  If you do this every day you will begin to memorize the guitar tones while practicing tone matching.</p>
      <div className=''>
        <MDBNav className="mt-4 nav-pills">
          <MDBNavItem>
            <MDBNavLink link to="#" active={tuningIndex === 0} onClick={()=>setTuningIndex(0)} >
              {tuningList[0].title}
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={tuningIndex === 1} onClick={()=>setTuningIndex(1)} >
              {tuningList[1].title}
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <hr className='pb-3' />

        {createTuningButtons()}
        <Button color="danger" onClick={stopTone}>Stop Playing</Button>
      </div>
      <div className="pt-5">
        <h3>Make sure to test yourself after using a tuner, to make sure you are becoming more accurate!</h3>
        <p>You can use our tuner <a href='/tuner/app' target="_blank">by opening a new window</a></p>
      </div>
    </div>
  )
}

export default Tuning