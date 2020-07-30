import Fret from './Fret.js'
// import noteNames from './noteNames.js'
import toneList from './toneList'
import randomId from 'random-id'



export default class GuitarString {
  constructor(tone, stringNum){
    this._id = randomId()
    this.frets = this.createFrets(tone, stringNum)
    this.stringNum = stringNum

  }
  getId(){return this._id}
  createFrets(tone, stringNum){
    const tones = [...toneList.slice(toneList.indexOf(tone))]
    return tones.map((tone, index)=>new Fret(tone, index, stringNum))
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