import GuitarString from './GuitarString.js'
import random from 'random'
import GuitarPlayer from 'utils/GuitarPlayer.js'

export default class Guitar {
  constructor(tuning=['E1', 'A1', 'D2', 'G2', 'B2', 'E3']){
    this.strings = tuning.map(note => new GuitarString(note.toLowerCase()))
  }
  getString(num){
    return this.strings[num-1]
  }
  getFretByNoteName(stringNum, noteName){
    return this.getString(stringNum).getFretByName(noteName)
  }
  getFretByNum(stringNum, fretNum){
    if(fretNum === -1){return -1}
    return this.getString(stringNum).getFretByNum(fretNum)
  }
  getRandomFret(stringNum=null){
    const string = stringNum ? stringNum : random.int(1,6)
    const fretNum = random.int(0,12)
    // console.log(`${string} ${fret} ${this.getFretByNum(string, fret)}`)
    return this.getFretByNum(string, fretNum)
  }
  playFrets(frets=[-1,-1,0,2,3,2]){
    const tones = frets.map((fret, index) => this.getFretByNum(index+1,fret)).filter(tone => tone !== -1)
    GuitarPlayer.playChord(tones)
    GuitarPlayer.start()
  }
  loopFrets(frets=[-1,-1,0,2,3,2]){
    const tones = frets.map((fret,index) => this.getFretByNum(index+1,fret)).filter(tone => tone !== -1).map(Fret=>Fret.getTone())
    console.log(tones)
    GuitarPlayer.loopChord(tones)
    GuitarPlayer.start()
  }
  stopPlaying(){
    GuitarPlayer.stop()
  }
}