import React from 'react'
import './Drumkit.css'
import { Drumkit } from './Drumkit'

// image
import Drums from '../../images/drumset-copy.jpg'

function DrumkitProject() {
  Drumkit()
    return (
        <div>
             <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Drumkit Project</title>
        <main>
          <img className="drumset" src={Drums} alt="drum set" />
          <section className="main-wrapper">
            <div className="key-legend">
              <h2>Key Map</h2>
              <ul className="key-map-list">
                <li>
                  <kbd className="key-code">E</kbd>
                  <span className="key-sound">Crash</span>
                </li>
                <li>
                  <kbd className="key-code">R</kbd>
                  <span className="key-sound">Ride</span>
                </li>
                <li>
                  <kbd className="key-code">F</kbd>
                  <span className="key-sound">Floor tom</span>
                </li>
                <li>
                  <kbd className="key-code">G</kbd>
                  <span className="key-sound">Mid tom</span>
                </li>
                <li>
                  <kbd className="key-code">H</kbd>
                  <span className="key-sound">High tom</span>
                </li>
                <li>
                  <kbd className="key-code">V</kbd>
                  <kbd className="key-code">B</kbd>
                  <span className="key-sound">Kick</span>
                </li>
                <li>
                  <kbd className="key-code">J</kbd>
                  <span className="key-sound">Snare</span>
                </li>
                <li>
                  <kbd className="key-code">I</kbd>
                  <span className="key-sound">Hi-Hat Open</span>
                </li>
                <li>
                  <kbd className="key-code">K</kbd>
                  <span className="key-sound">Hi-Hat Closed</span>
                </li>
              </ul>
            </div>
          </section>
        </main>
        <div data-key={74} className="key snare">   
          <kbd>J</kbd>
        </div>    
        <div data-key={66} className="key kick">
          <kbd>B</kbd>
        </div>
        <div data-key={86} className="key kick2">
          <kbd>V</kbd>
        </div>
        <div data-key={72} className="key tom-high">
          <kbd>H</kbd>
        </div>
        <div data-key={71} className="key tom-mid">
          <kbd>G</kbd>
        </div>
        <div data-key={69} className="key crash">
          <kbd>E</kbd>
        </div>
        <div data-key={82} className="key ride">
          <kbd>R</kbd>
        </div>
        <div data-key={73} className="key hihat-open">
          <kbd>I</kbd>
        </div>
        <div data-key={75} className="key hihat-close">
          <kbd>K</kbd>
        </div>
        <audio data-key={74} src="snare.wav" />
        <audio data-key={66} src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav" />
        <audio data-key={86} src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav" />
        <audio data-key={72} src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav" />
        <audio data-key={71} src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav" />
        <audio data-key={70} src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-low.wav" />
        <audio data-key={69} src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav" />
        <audio data-key={82} src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav" />
        <audio data-key={73} src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav" />
        <audio data-key={75} src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav" />
        </div>
        </div>
    )
}

export default DrumkitProject
