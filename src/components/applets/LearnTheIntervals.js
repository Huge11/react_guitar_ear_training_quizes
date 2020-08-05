import React, {useState} from 'react'
import random from 'random'

import {
  MDBBtn as Button
} from 'mdbreact'

function LearnTheIntervals(){
  const intervalList = ["2m", "2M", "3m", "3M", "4P", "5P", "6m", "6M", "7m", "7M", "P8"]
  const [index, setIndex] = useState(random.int(0,intervalList.length-1))

  const getRandomInterval = ()=>setIndex(random.int(0,intervalList.length-1))

  return (
    <div>
      <h1>Learn The Intervals</h1>

      <div>
        <h2>Today's Interval</h2>
        <h3>{intervalList[index]}</h3>
        <Button onClick={()=>getRandomInterval()}>New Interval</Button>
      </div>
     <p>
        You MUST sing them. You don't have to be a good singer, but it's like an active versus passive thing: you need to be able to produce the interval (in your head, or out loud) and be able to recognize it when you hear it. The passive part comes easily after you've mastered them actively.

Start with perfect fifths, and sing them while you play them on a keyboard (or other instrument). The process is this: start at the bottom of your range (let's say it's a low C) and play and sing C then the G above it. repeat. Then play and sing the G then the C below it. Repeat. Then play the C and sing the G: hold the notes, and really listen to the "airspace" between them, the harmonic sound. Then do the same thing by singing and holding the low C while playing the G.

Then move up a half-step: repeat the process with C# and G#, then D and A, etc. Continue until you get to the top of your range, then repeat going back down.

After doing this, maybe just once, or maybe a couple days or maybe a week (depending on your current skill level) the goal is to be able to reach out and grab any note at random and instantly being to sing/hear a perfect fifth above or below that note.

You'll then repeat the process with other intervals: move on to perfect fourths, major thirds, minor thirds, etc. until you have them all. It might seem like a lot of work, but there's only so many intervals.

Once you've got a few intervals, then you go to the sites like musictheory.net to test yourself. After you've got the basic intervals, you can move on to triads, seventh chords, scales, progressions, etc.

The key is that you need to master the harmonic sounds of the interval. If you can master the harmonic sounds, it doesn't matter how fast you hear it go by, melodically or harmonically, and it doesn't matter whether it's ascending or descending, you'll know it just by how it feels. For this reason, the memory aids, such as associating a song with a specific interval, are useless. They are too slow, and actually prevent you from properly learning the sounds. Triad inversions are a very important step: this is where you're really going to learn to hear harmonically, i.e., by recognizing the third of the chord is on the bottom, or the fifth is on top, etc.

Some people misguidedly think that interval ear training is unproductive, pointing out that, in actual practice, music doesn't happen from one interval to the next, but we actually hear everything in relation to a key center, i.e. if you learn the sound of a fifth, you may be able to hear a C to G in the key of C, but hearing D to A will be more difficult because the fact that it's the 2nd to the 6th gives it a different quality.

Therefore, they say, some type of key center based ear training is superior. This is nonsense. It's true that we don't hear music from one interval to the next, however, when you hear the 2nd move to the 6th, what are you hearing? Intervals! Hearing in relation to a key center is no different than hearing intervals: in this case, a major 2nd and a major 6th, both in relation to the tonic.

Whether you practice the exercises using solfedge syllables, numbers (degrees), or note names doesn't really matter, because the end result is the same. However for these basic interval drills, it's probably best to sing the actual note names, because of the side benefit of memorizing how to spell out each interval from each note, using the proper accidentals. Later you can move on to a good sight-singing book, such as Modus Vetus/Modus Novus, using solfedge.
      </p>
    </div>
  )
}

export default LearnTheIntervals