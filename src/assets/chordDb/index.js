import random from 'random'

import chordDb from './chords-db-master/lib/guitar.json'

const db = {}

db.getDb = () => {
  return chordDb
}

db.getRandomChord = (chordTypes=['major', 'minor', 'maj7', 'm7', '7'])=>{
  const tonic = chordDb.keys[random.int(0, chordDb.keys.length-1)].replace('#', 'sharp')
  const suffix = chordTypes[random.int(0,chordTypes.length-1)]
  console.log(`${tonic} ${suffix} ${chordDb.chords[tonic]} `)
  console.log(chordDb)
  return chordDb.chords[tonic].find(chord=>chord.suffix===suffix)
}

export default db