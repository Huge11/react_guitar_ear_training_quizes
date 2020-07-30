import audio from 'utils/GuitarPlayer.js'
import randomId from 'random-id'
// import { Guitar } from '.'

export default class Fret {
  constructor(tone, fretNum, stringNum){
    this.tone = tone.replace("s", "#").toLowerCase()
    this.noteName = tone.replace(/[-0-9]+/, "").replace("s", "#").toLowerCase() // remove any +/- integer -> replace s with # -> everything to lower case
    this.fretNum = fretNum
    this._id = randomId()
    this.stringNum = stringNum
  }
  getId(){
    return this._id
  }
  getStringNum(){
    return this.stringNum
  }
  getFretNum(){ 
    return this.fretNum 
  }
  getNoteName(){ 
    return this.noteName 
  } 
  getTone(){
    return this.tone
  }
  playTone(){
    audio.playTone(this.tone)
    audio.start()
  }
  loopTone(){
    audio.loopTone(this.tone)
    audio.start()
  }
  stopTone(){
    audio.stop()
  }
}