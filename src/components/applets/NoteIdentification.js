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
  const getFretNumber = () => random.int(0, 12)
  const getNoteName = () => noteNames[random.int(0, noteNames.length-1)]

  const createNameThatFret = () => {
    const data = string => {
      const fret = getFretNumber()
      return {string: string, fret: fret, answer: guitar.getFretByNum(string, fret).getNoteName()}
    }
    const inputs = [data(1), data(2), data(3), data(4), data(5), data(6)]
    return inputs.map(input => <div><p><strong>String {input.string}: </strong> Fret #{input.fret}</p><Button onClick={(e)=>{e.target.innerText=input.answer; e.target.disabled=true}}>Answer</Button> </div>)
  }
  const createFindThatNote = () => {
    const data = string => {
      const noteName = getNoteName()
      return {string: string, noteName: noteName, answer: guitar.getFretByNoteName(string, noteName).getFretNum()}
    }
    const inputs = [data(1), data(2), data(3), data(4), data(5), data(6)]
    return inputs.map(input => <div><p><strong>String {input.string}: </strong> Note Name: {input.noteName.toUpperCase()}</p><Button onClick={(e)=>{e.target.innerText=`fret ${input.answer}`; e.target.disabled=true}}>Answer</Button> </div>)
  }
  // ======== FRETBOARD WITH OCTAVES ====
  const [fb, setBoard] = useState(null)
  // set up board when component mounts
  useEffect(()=>{
    setBoard(Fretboard({ 
      where: "#fb1",
      frets: 12,
    }))
  }, [])
  // change the scale display whenever the state changes
  useEffect(() => {
    if(fb){
      // fb.clear()
      fb.add(`A D`).paint();
    }
  }, [fb])
  // ======== END FRETBOARD

  return (
    <Container>
      <h1>Note Identification</h1>
      <hr />

      <div id="fb1"></div>
      <Row>
        <Col>
          <h2>Name That Fret</h2>
          {createNameThatFret()}
        </Col>
        <Col>
          <h2>Find The Note</h2>
          {createFindThatNote()}
        </Col>
      </Row>


    </Container>
  )
}

export default NoteIdentification