import React, {useState, useEffect} from 'react'
import random from 'random'
import { Fretboard } from "fretboards";


// local dependencies
import { noteNames, Guitar } from 'utils/guitarMap/index.js'

// components
import {
  MDBBtn as Button,
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col
} from 'mdbreact'


function NoteIdentification(){
  const guitar = new Guitar()

  const createNameThatFret = () => {
    const frets = [guitar.getRandomFret(1), guitar.getRandomFret(2),guitar.getRandomFret(3),guitar.getRandomFret(4),guitar.getRandomFret(5),guitar.getRandomFret(6)]
    return frets.map(fret => (<div key={fret.getId()} className="px-3"><p><strong>String: {fret.getStringNum()} -  Fret #{fret.getFretNum()}</strong></p><Button onClick={(e)=>{e.target.innerText=fret.getNoteName(); e.target.disabled=true}}>Answer</Button> </div>))
  }
  const createFindThatNote = () => {
    const frets = [guitar.getRandomFret(1), guitar.getRandomFret(2),guitar.getRandomFret(3),guitar.getRandomFret(4),guitar.getRandomFret(5),guitar.getRandomFret(6)]
    return frets.map(fret => <div key={fret.getId()} className='px-3'><p><strong>String: {fret.getStringNum()} - Note: {fret.getNoteName().toUpperCase()}</strong></p><Button onClick={(e)=>{e.target.innerText=`fret ${fret.getFretNum()}`; e.target.disabled=true}}>Answer</Button> </div>)
  }
  // ======== FRETBOARD WITH OCTAVES ====
  const [fb, setBoard] = useState(null)
  // set up board when component mounts
  useEffect(()=>{
    setBoard(Fretboard({ 
      where: "#fb1",
      frets: 24,
    }))
  }, [])
  // change the scale display whenever the state changes
  useEffect(() => {
    if(fb){
      fb.add(`A D`).paint();
    }
  }, [fb])
  // ======== END FRETBOARD

  return (
    <div>
      <h1>Note Identification - Standard Tuning</h1>
      <hr />

      <div id="fb1"></div>
        <Row className="pt-5 pl-3">
          <Col xs='12' sm='12' md='12' lg='6'>
            <h2>Name That Fret</h2>
            <Container>
              <Row>
                {createNameThatFret()}
              </Row>
            </Container>
          </Col>
          <Col>
            <h2>Find The Note</h2>
            <Container>
              <Row>
                {createFindThatNote()}
              </Row>
            </Container>
          </Col>
        </Row>
    </div>
  )
}

export default NoteIdentification