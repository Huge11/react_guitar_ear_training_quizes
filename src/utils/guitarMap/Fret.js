import audio from 'utils/GuitarPlayer.js'
// import { Guitar } from '.'

export default class Fret {
  constructor(tone, fretNum){
    this.tone = tone
    this.noteName = tone.replace(/[-0-9]+/, "") // remove any +/- integer
    this.fretNum = fretNum
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