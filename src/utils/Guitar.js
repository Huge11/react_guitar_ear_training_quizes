import * as Tone from 'tone'
import SampleLibrary from 'assets/tonejs-instruments/Tonejs-Instruments.js'

class Guitar {
  constructor(type="acoustic"){
    this.guitar = SampleLibrary.load({
      instruments: `guitar-acoustic`
    });
    this.guitar.toMaster();
  }

  playNote(tone='C2'){
    this.guitar.triggerAttack(tone);
  }

  loopNote(tone='C2'){
    Tone.Transport.cancel()
    Tone.Transport.scheduleRepeat((time) => {
      this.playNote(tone)
    }, "1n");
  }

  loopChord(notes=['C2', 'E2', 'G2']){
    Tone.Transport.cancel()
    notes.forEach(note=>{
      note = note.replace('#', 's')
      Tone.Transport.scheduleRepeat((time) => {
        this.playNote(note)
      }, "1n");
    })
  }

  start(){
    Tone.start()
    Tone.Transport.start()
  }

  stop(){
    Tone.Transport.stop()
  }

}

export default new Guitar()