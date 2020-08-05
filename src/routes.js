import NotFound from 'components/pages/404.js'
import Start from 'components/pages/Start.js'
import { ToneMatch, ChordMatch, Tuning, ScalesPractice, NoteIdentification, IntervalMatch, LearnTheIntervals } from 'components/applets/index.js'
// import { LearnTheIntervals } from './components/applets'
// import Tuner from 'utils/Tuner/index.js'

class Route {
  constructor({name="", path, component=NotFound }){
    this.name = name
    this.path = path
    this.component = component
  }
}

const routes = [
  new Route({name: "Start", path: '/start', component: Start}),
  new Route({name: "Tuning", path: '/tuning', component: Tuning }),
  new Route({name: "Note Identification", path: '/noteIdentification', component: NoteIdentification}),
  new Route({name: "Tone Match", path: '/toneMatch', component: ToneMatch}),
  new Route({name: "Learn The Intervals", path: '/learnTheIntervals', component: LearnTheIntervals}),
  new Route({name: 'Interval Match', path: '/intervalMatch', component: IntervalMatch}),
  new Route({name: "Chord Match", path: '/chordMatch', component: ChordMatch}),
  new Route({name: "Scales Practice", path: '/scalesPractice', component: ScalesPractice}),
  // new Route({name: "Tuner", path: "/tuner", component: Tuner}),
  new Route({name: "404", "path": "/", component: NotFound})
]

export default routes