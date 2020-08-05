import React from 'react'

// Tuner Utils
import './app/aubio.js'
import './app/meter.js'
import './app/tuner.js'
import './app/frequency-bars.js'
import './app/notes.js'
import './app/app.js'


function Component(){
  return (
    <div>
      <link rel="stylesheet" href="/tuner/app/style.css" />
      <canvas class="frequency-bars"></canvas>
      <div class="meter">
        <div class="meter-dot"></div>
        <div class="meter-pointer"></div>
      </div>
      <div class="notes">
        <div class="notes-list"></div>
        <div class="frequency"> <span>Hz</span></div>
      </div>
      {/* <script src="https://unpkg.com/sweetalert@2.1.2/dist/sweetalert.min.js"></script> */}
      {/* <script src="aubio.js"></script> */}
      {/* <script src="tuner.js"></script> */}
      {/* <script src="meter.js"></script> */}
      {/* <script src="frequency-bars.js"></script> */}
      {/* <script src="notes.js"></script> */}
      {/* <script src="app.js"></script> */}

    </div>
  )
}

export default Component

