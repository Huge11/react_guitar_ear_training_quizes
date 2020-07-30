import * as Tone from 'tone'
import SampleLibrary from 'assets/tonejs-instruments/Tonejs-Instruments.js'
import { Chord } from "@tonaljs/tonal";


class Guitar {
  constructor(){
    this.guitar = SampleLibrary.load({instruments: `guitar-acoustic`});
    this.guitar.toDestination();
  }

  playNote(note='C2'){
    const cleanedNote = note.replace('s', '#')
    console.log(`playing note ${note}`)
    this.guitar.triggerAttack(cleanedNote);
  }
  playTone(tone='C2'){this.playNote(tone)}

  playChord(tones){
    const cleanedTones = tones.map(note => note.replace('s', '#'))
    console.log(`playing notes ${cleanedTones.length}`)
    this.guitar.triggerAttack(cleanedTones)
  }

  loopNote(tone='C2', ){
    console.log(`looping note ${tone}`)
    Tone.Transport.cancel()
    Tone.Transport.scheduleRepeat((time) => {
      this.playNote(tone)
    }, "1n");
  }
  loopTone(tone='C2'){this.loopNote(tone)}

  loopChord(tones=['D2', 'A2', 'D3', 'F3']){
    Tone.Transport.cancel()
    Tone.Transport.scheduleRepeat((time) => {
      this.playChord(tones)
    }, "1n");
  }

  async start(){
    await Tone.start()
    console.log('audio is ready')
    Tone.Transport.start()
  }

  stop(){
    Tone.Transport.pause()
  }

  clear(){
    Tone.Transport.cancel()
  }

}

export default new Guitar()