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

  playChord(chord='major', rootNote='C2'){
    const cleanedNote = rootNote.replace('s', '#')
    console.log(`Guitar.playChord inputs: ${chord} ${cleanedNote}`)
    const notes = Chord.getChord(chord, cleanedNote).notes
    console.log(`Guitar.playChord tonal chord notes: ${notes}`)
    const cleanedNotes = notes.map(note => note.replace('s', '#'))
    console.log(`playing notes ${cleanedNotes.length}`)
    this.guitar.triggerAttack(cleanedNotes)
  }

  loopNote(tone='C2'){
    console.log(`looping note ${tone}`)
    Tone.Transport.cancel()
    Tone.Transport.scheduleRepeat((time) => {
      this.playNote(tone)
    }, "1n");
  }

  loopChord(chord='major', rootNote='C2'){
    console.log(`looping chord ${rootNote} ${chord}`)
    Tone.Transport.cancel()
    Tone.Transport.scheduleRepeat((time) => {
      this.playChord(chord, rootNote)
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

}

export default new Guitar()