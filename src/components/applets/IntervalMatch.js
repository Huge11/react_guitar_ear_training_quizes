import React, {useState} from 'react'
// import Guitar from 'utils/GuitarPlayer.js'
import { Guitar } from 'utils/guitarMap/index.js'
import { Interval, Note } from '@tonaljs/tonal'
import Audio from 'utils/GuitarPlayer.js'
import * as Tone from 'tone'
import random from 'random'

// components
import { 
  MDBBtn as Button,
  MDBRow as Row,
  MDBCol as Col
} from 'mdbreact'


function IntervalMatch(){
  const guitar = new Guitar()
  const intervalList = ["1P", "2m", "2M", "3m", "3M", "4P", "5P", "6m", "6M", "7m", "7M", "P8"]
  const [intervalOptions, setIntervalOptions] = useState(intervalList)
  const createIntervalCheckboxes = () => {
    const addOrRemoveIntervalFromList = (e) => {
      const intervalName = e.target.id
      intervalOptions.indexOf(intervalName) != -1 ? setIntervalOptions(intervalOptions.filter(item=>item != intervalName)) : setIntervalOptions([...intervalOptions, intervalName])
    }
    return intervalList.map(interval => (
      <div class="custom-control custom-checkbox" key="interval">
        <input type="checkbox" class="custom-control-input" id={`${interval}`} checked={intervalOptions.indexOf(interval) != -1} onChange={addOrRemoveIntervalFromList} />
        <label class="custom-control-label" for={`${interval}`}>{interval}</label>
      </div>      
    ))
  }

  const createIntervalMatchItems = (max=10) => {
    const intervals = []
    // console.log(interval)
    for(let i=0; i<max; i++){
      const interval = intervalOptions[random.int(0, intervalOptions.length-1)]
      const fret = guitar.getRandomFret()
      intervals.push([fret.getTone(), Note.transpose(fret.getTone(), interval), fret, interval])
    }
    const playInterval = ((tone1, tone2)=>{
      guitar.clear()
      const loopA = new Tone.Loop(time => {
        Audio.guitar.triggerAttackRelease(tone1, "4n", time);
      }, "1n").start(0);
      //play another note every off quarter-note, by starting it "8n"
      const loopB = new Tone.Loop(time => {
        Audio.guitar.triggerAttackRelease(tone2, "4n", time);
      }, "1n").start("4n");
      const loopC = new Tone.Loop(time => {
        Audio.guitar.triggerAttackRelease(tone1, "2n", time);
        Audio.guitar.triggerAttackRelease(tone2, "2n", time);
      }, "1n").start("2n");
      Tone.start()
      Tone.Transport.start()
    })
    return intervals.map((tones, i) => {
      return tones.length === 4 ? (
        <div>
          <h2>#{i+1}</h2>
          <Button onClick={()=>playInterval(tones[0], tones[1])}>Play Interval</Button>
          <Button onClick={()=>guitar.stopPlaying()}>Stop Tone</Button>
          <Button style={{textTransform: "none"}} onClick={e=>{e.target.innerText=tones[3]; e.target.disabled=true; guitar.stopPlaying()}}>CHECK INTERVAL</Button>
          <Button className='' onClick={e=>{e.target.innerText=`${tones[0]} ${tones[1]}` ; e.target.disabled=true; guitar.stopPlaying()}}>Check Tones</Button>
        </div>
      ) : <p>Error</p>
    })
  }

  return (
    <div>
      <h1>Interval Match</h1>
      <Row>
        <Col sm="2">
          {createIntervalCheckboxes()}
        </Col>
        <Col>
        <h2>Levels</h2>
          <Button onClick={()=>setIntervalOptions(["4P", "5P"])}>Easy</Button>
          <Button onClick={()=>setIntervalOptions(["2M", "3M", "4P", "5P", "6M", "7M"])}>Medium</Button>
          <Button onClick={()=>setIntervalOptions(["1P", "2m", "2M", "3m", "3M", "4P", "5P", "6m", "6M", "7m", "7M", "P8"])}>Hard</Button>
        </Col>
      </Row>
      <hr />
      {createIntervalMatchItems()}
      <hr />
 
    </div>
  )
}

export default IntervalMatch