import logo from './logo.svg';
import './App.css';
import {motion} from 'framer-motion';

function App() {
  return (
    <div
      style={{
        background: 'radial-gradient(circle at top, #111459f2 , #2048a7)',
      }}>
      <div
        className="example"
        style={{

          border: 'none',
          padding: '12px',
          marginLeft: 'auto',
          marginRight: 'auto',
          stroke: '#00b7ff',
        }}>
        <svg style={{ width: '67vw', height: '100vh' }} viewBox="-2 -2 360 500" xmlns="http://www.w3.org/2000/svg">
          <image href="bitmoji1.png" opacity="1" height="170" width="145" x="2" mask="url(#about-profil-picture-mask)" image-rendering="optimizeSpeed"></image>
          <g>
            <g transform="translate(170 118)" font-weight="bold" fill="#00b7ff" style={{ stroke: '#00b7ff', strokeWidth: '0.5px' }}>
              <text x="0" y="0" fontSize="12"  className="about-header-upper-text" style={{ opacity: 1 }}>
                Name :
              </text>
              <text x="0" y="20" fontSize="18" className="about-header-lower-text" style={{ opacity: 1 }}>
                Usman
              </text>
              <text
                x="110"
                y="0"
                fontSize="12"
                fill="#00b7ff"
                className="about-header-upper-text"
                style={{ opacity: 1, stroke: '#00b7ff', strokeWidth: '1px' }}>
                Age :
              </text>
              <text x="110" y="20" fontSize="18" className="about-header-lower-text" style={{ opacity: 1 }}>
                23
              </text>
              <text
                x="200"
                y="0"
                fontSize="12"
                fill="#00b7ff"
                className="about-header-upper-text"
                style={{ opacity: 1, stroke: '#00b7ff', strokeWidth: '1px' }}>
                Experience :
              </text>
              <text x="200" y="20" fontSize="18" className="about-header-lower-text" style={{ opacity: 1 }}>
                1 year
              </text>
            </g>
            <motion.polyline
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: 1,
                repeatDelay: 1,
              }}
              strokeDasharray="0 1"
              fill="none"
              points="65,170 145,170 145,50 135,40 135,10 125,0 70,0 10,0 0,10 0,160 10,170"
            />
            <motion.polyline
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: 1,
                repeatDelay: 1,
              }}
              strokeDasharray="0 1"
              fill="none"
              points="145,85 250,85 260,95 490,95 500,105 500,135 500,150 490,160 200,160 190,170 145,170"
            />
          </g>
          <g transform="translate(0 188)">
            <mask id="skills-header-mask">
              <polyline fill="white" points="0,37 0,10 10,0 190,0 200,10 200,37"></polyline>
              <rect fill="white" x="0" y="210" width="500" height="6"></rect>
            </mask>
            <rect
              id="skills-header-rect"
              x="0"
              y="0"
              height="40"
              width="200"
              fill="#00b7ff"
              opacity=".15"
              mask="url(#skills-header-mask)"
              style={{ width: '200px' }}></rect>
            <text x="71" y="25" class="about-header" fill="#00b7ff" font-size="18" font-weight="bold" style={{ stroke: '#00b7ff', strokeWidth: '1px' }}>
              SKILLS
            </text>
            <foreignObject x="0" y="60" width="506" height="340">
              <div id="about-skills-container" class="about-container">
                <div id="about-skills-render-container">
                  <div id="about-skill-container-0" class="row about-skill-container" style={{ opacity: 1 }}>
                    <span id="about-skill-span-0" class="about-skill-span">
                      React Js
                    </span>
                    <div class="about-skill-bar-container">
                      <div id="about-skill-bar-0" class="about-skill-bar" style={{ width: '80%' }}></div>
                    </div>
                  </div>

                  <div id="about-skill-container-1" class="row about-skill-container" style={{ opacity: 1 }}>
                    <span id="about-skill-span-1" class="about-skill-span">
                      Node Js
                    </span>
                    <div class="about-skill-bar-container">
                      <div id="about-skill-bar-1" class="about-skill-bar" style={{ width: '60%' }}></div>
                    </div>
                  </div>

                  <div id="about-skill-container-2" class="row about-skill-container" style={{ opacity: 1 }}>
                    <span id="about-skill-span-2" class="about-skill-span">
                      JavaScript
                    </span>
                    <div class="about-skill-bar-container">
                      <div id="about-skill-bar-2" class="about-skill-bar" style={{ width: '55%' }}></div>
                    </div>
                  </div>

                  <div id="about-skill-container-3" class="row about-skill-container" style={{ opacity: 1 }}>
                    <span id="about-skill-span-3" class="about-skill-span">
                      HTML + CSS
                    </span>
                    <div class="about-skill-bar-container">
                      <div id="about-skill-bar-3" class="about-skill-bar" style={{ width: '80%' }}></div>
                    </div>
                  </div>

                  <div id="about-skill-container-4" class="row about-skill-container" style={{ opacity: 1 }}>
                    <span id="about-skill-span-4" class="about-skill-span">
                      React Three Fiber
                    </span>
                    <div class="about-skill-bar-container">
                      <div id="about-skill-bar-4" class="about-skill-bar" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
                <div id="about-others-render-container"></div>
              </div>
            </foreignObject>
            <motion.polyline
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 1,
              }}
              fill="none"
              points="250,35 200,35 200,10 190,0 10,0 0,10 0,245 10,255 197,255 215,273 215,290 250,290 400,290 410,280 490,280 500,270 500,55 490,45 310,45 300,35
"
            />
            {/* <motion.polyline
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 1,
              }}
              fill="none"
              points="250,35 300,35 310,45 490,45 500,55 500,270 490,280 410,280 400,290 250,290"
            />
            <motion.polyline
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 1,
              }}
              fill="none"
              points="250,35 200,35 200,10 190,0 10,0 0,10 0,35 0,315 10,325 100,325 110,335 250,335 490,335 500,325 500,55 490,45 410,45 400,35"
            /> */}
          </g>
        </svg>
      </div>
      ;
    </div>
  )
}

export default App;
