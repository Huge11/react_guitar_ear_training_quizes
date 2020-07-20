import NotFound from 'components/pages/404.js'
import Start from 'components/pages/Start.js'
import { ToneMatch, ChordMatch } from 'components/applets/index.js'

class Route {
  constructor({name="", path, component=NotFound }){
    this.name = name
    this.path = path
    this.component = component
  }
}

const routes = [
  new Route({name: "Start", path: '/start', component: Start}),
  new Route({name: "Tone Match", path: '/toneMatch', component: ToneMatch}),
  new Route({name: "Chord Match", path: '/chordMatch', component: ChordMatch}),
  new Route({name: "404", "path": "*", component: NotFound})
]

export default routes