import React from "react"
import jimmy from "../images/headshots/jimmy.jpg"
import jay from "../images/headshots/jay-headshot.png"
import jacob from "../images/headshots/JacobBanks.png"
import juan from "../images/headshots/juan-photo.png"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

class DevProfiles extends React.Component {
  constructor() {
  super() 
    this.state = {
      devs: [
        ['Jacob Banks',
          ['imageURL', jacob],
          ['LinkedIn', 'https://www.linkedin.com/in/jacobjbanks'],
          ['Github', 'https://www.github.com/jacobbanks'],
          ['twitter', 'https://www.twitter.com/jacobbanks',],
        ],
        ['Jamar Dawson',
          ['imageURL', jay],
          ['LinkedIn', 'https://www.linkedin.com/in/jamardawson/'],
          ['Github', 'https://www.github.com/ImJustJay'],
          ['twitter', ""],
        ],

        ['Jimmy Deng',
          ['imageURL', jimmy],
          ['LinkedIn', 'https://www.linkedin.com/in/zhijimmydeng/'],
          ['Github', 'https://www.github.com/rev619'],
          ['twitter', '',]
        ],

        ['Juan Espinoza',
          ['imageURL', juan],
          ['LinkedIn', 'http://linkedin.com/in/espinoza-juan'],
          ['Github', 'https://github.com/jespinoza17'],
          ['twitter', 'httts://www.twitter.com/wan_espinoza'],
        ]
      ]
    }
  }

  // <a href={this.state.devs[i][3][1]} src={<FaGithub/>}></a></span>
render() {
  console.log(this.state.devs)
  let rowArr = [];
  for (let i = 0; i < this.state.devs.length; i++) {
    rowArr.push(
    <div key={`row${i}`} className="devProfiles">
        <div className="img-container">
          <img id={`img${i}`} src={this.state.devs[i][1][1]} alt="Developer Headshot"></img>
        </div>
      <h3>{this.state.devs[i][0]}</h3>
      <div className="social-icons">
      <span><a id="Github" href={this.state.devs[i][3][1]}><FaGithub size={"2.5em"}/></a></span>
      <span><a id="Twitter" href={this.state.devs[i][4][1]}><FaTwitter size={"2.5em"}/></a></span>
      <span><a id="Linkedin" href={this.state.devs[i][2][1]}><FaLinkedin size={"2.5em"}/></a></span>
      </div>
    </div>
    )
  }
  return (
  <div>
  <h2 style={{textAlign: "center"}}>Engineering Team</h2>
    <div className="profile-container">
      {rowArr}
    </div>
  </div>
    );
  }
}

export default DevProfiles
