import React from "react";
import '../Assets/CSS/About.css';
import Aboutdeveloper from '../Assets/Images/aboutdeveloper.png';
import {useNavigate} from 'react-router-dom';
import {SkillData} from './Data';
import Myphoto from '../Assets/Images/sivakrishna.png'

function About () {
    const navigate = useNavigate();

    const sendToProjects = () => {
        navigate('/projects');
    }

    return (
      <div className="about-page-section">
        <div className="container">
          <div className="row about-introduction-section">
            <div className="col-6 d-flex justify-content-start flex-column">
              <h3 className="head-name-desc">My name is </h3>
              <h3 className="head-fullname">Arumulla SivaKrishna</h3>
              <p className="desc-me">
                Passionate Frontend Developer with a keen eye for detail and a
                creative flair. Proficient in crafting pixel-perfect, responsive
                web experiences using cutting-edge technologies such as HTML5,
                CSS3, and JavaScript. Dedicated to staying ahead of industry
                trends and committed to delivering visually stunning and
                user-friendly interfaces. Eager to contribute my skills and
                enthusiasm to innovative projects that push the boundaries of
                web development.
              </p>
              <button className="explore-projects" onClick={sendToProjects}>
                Explore My Projects
              </button>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center flex-column">
              <img
                className="aboutdeveloperimg"
                src={Aboutdeveloper}
                alt="Developer"
              />
            </div>
          </div>
        </div>

        <div className="skills-bg-container">
          <div className="technicalskills-section container">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="heading">Technical Skills</h1>
              <div className="underline"></div>
            </div>
            <div className="skills-container">
              {SkillData.map((eachskillset, index) => {
                return (
                  <div className="eachskillset-container" key={index}>
                    <h3 className="skill-title">{eachskillset.title}</h3>
                    <div className="eachskill-tabs-container">
                      {eachskillset.skills.map((eachskills, index) => {
                        return (
                          <div key={index} className="eachskill-tabs">
                            {eachskills}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="education-bg-container">
          <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="heading">Education</h1>
              <div className="underline"></div>
            </div>
            <div className="row education-row-container">
              <div className="col-4 education-row d-flex flex-column">
                <div className="holder">
                  <img src={Myphoto} alt="SivaKrishna" />
                </div>
                <p className="collegeName">YOGI VEMANA UNIVERSITY</p>
                <p className="collegeYear">2017 - 2021</p>
                <div className="collegepercentage">Percentage: 76.8%</div>
                <p className="collegecource">Bachelor of Technology in Mechanical Engineering</p>
                <p className="collegeaddress">Kadapa, AP, India</p>
              </div>

              <div className="col-4 education-row d-flex flex-column">
              <div className="holder">
                  <img src={Myphoto} alt="SivaKrishna" />
                </div>
                <p className="collegeName">SRI CHAITANYS Jr COLLEGE</p>
                <p className="collegeYear">2015 - 2017</p>
                <div className="collegepercentage">Percentage: 96.8%</div>
                <p className="collegecource">Intermediate in MPC</p>
                <p className="collegeaddress">Nellore, AP, India</p>
              </div>

              <div className="col-4 education-row d-flex flex-column">
              <div className="holder">
                  <img src={Myphoto} alt="SivaKrishna" />
                </div>
                <p className="collegeName">APSWERIS Chillakur</p>
                <p className="collegeYear">2014 - 2015</p>
                <div className="collegepercentage">Percentage: 93%</div>
                <p className="collegecource">SSC, High School</p>
                <p className="collegeaddress">Nellore, AP, India</p>
              </div>

            </div>
          </div>
        </div>

        <div className="contact-bg-container">
          <div className="contact-me-section container">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="heading">Contact Me</h1>
              <div className="underline"></div>
            </div>

            <div className="row">
              <div className="col-6 ">
                <div className="my-mobile d-flex">
                  <i class="bi bi-phone"></i>
                  <p>+91 8125127733</p>
                </div>
                <div className="my-website d-flex">
                  <i class="bi bi-globe2"></i>
                  <p>https://developcodepro.com/</p>
                </div>
                <div className="my-email d-flex">
                  <i class="bi bi-envelope"></i>
                  <p>arumullasivakrishna@outlook.com</p>
                </div>
                <div className="my-address d-flex">
                  <i class="bi bi-house"></i>
                  <p>SPSR Nellore, AndhraPradesh, India</p>
                </div>
                <div className="social-icons-container d-flex">
                  <i class="bi bi-youtube"></i>
                  <i class="bi bi-linkedin"></i>
                  <i class="bi bi-instagram"></i>
                  <i class="bi bi-github"></i>
                </div>
              </div>
              <div className="col-6 d-flex flex-column contact-form-container">
                <input
                  type="text"
                  className="conatct-name"
                  placeholder="Enter Your Name"
                  required
                />
                <input
                  type="email"
                  className="contact-email"
                  placeholder="Enter your Email"
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  rows="7"
                  className="contact-message"
                  placeholder="Enter your message"
                  required
                ></textarea>
                <button className="contact-submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;