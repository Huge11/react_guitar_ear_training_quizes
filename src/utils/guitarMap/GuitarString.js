import Fret from './Fret.js'
// import noteNames from './noteNames.js'
import toneList from './toneList'


export default class GuitarString {
  constructor(tone){
    this.frets = this.createFrets(tone)
    // console.log(this.frets)
  }
  createFrets(tone){
    const tones = [...toneList.slice(toneList.indexOf(tone))]
    // console.log(tones)
    return tones.map((tone, index)=>new Fret(tone, index))
  }
  getFretByNum(num){
    return this.frets[num]
  }
  getFretByName(noteName){
    return this.frets.find(fret=>fret.getNoteName() === noteName)
  }
  getFretByTone(tone){
    return this.frets.find(fret=>fret.getTone() === tone)
  }
}