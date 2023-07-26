import React, { useEffect, useState } from 'react'
import './master.css'
import bg from './Image/bg.jpg';
import b1 from './Image/b1.png';
import b2 from './Image/b2.png';
import b3 from './Image/b3.png';
import b4 from './Image/b4.png';
import b5 from './Image/b5.png';
import Coursera from './Image/Coursera.png';
import github from './Image/github.png';
import hackerrank from './Image/hackerrank.svg';
import LeetCode from './Image/LeetCode.png';
import linkden from './Image/linkden.png';
import redLinkedIn from './Image/linkedin.png'
import p1 from './Image/p1.png';
import p2 from './Image/p2.png';
import p21 from './Image/p21.png';
import p3 from './Image/p3.png';
import Parth from './Image/Parth.png';
import Parth1 from './Image/Parth.png';
import projectimg2 from './Image/projectimg2.png';
import rapidBasket from './Image/rapidBasket.png';
import top from './Image/top.png';
import youtube from './Image/youtube.png';
import { Grid, Paper, TextField, Button } from '@mui/material';
import styled from 'styled-components';
import { makeStyles } from "@mui/styles"
import Skills from '../skills/skills';
import { Typewriter } from 'react-simple-typewriter'
import emailjs from 'emailjs-com';
import { Form, Input, TextArea } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jio from './Image/jio1.jpg'

const useStyles = makeStyles({
  customTextField: {
    "& input::placeholder": {
      fontSize: "15px"
    }
  }
})

const SERVICE_ID = "service_wj979wd";
const TEMPLATE_ID = "template_e3mnrha";
const PUBLIC_KEY = "5FpL3v11AvK4IIR52";

function Master(props) {
  const classes = useStyles();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [data, setData] = useState({
    email: "",
    msg: ""
  })

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    setData({
      email: "",
      msg: ""
    })
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  //--//
  const handleSubmit = () => {
    //e.preventDefault();
    if (data.email && data.msg) {
      //emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, {
          to_email: data.email,
          message: data.msg,
        }, PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          })
        });
      setData({
        email: "",
        msg: ""
      })
    }
    else {
      toast.error('Please fill in all required fields.', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  return (
    <>
      {/* Header */}
      <header className="header" role="banner" id="top">
        <div className="row">
          <nav className="nav" role="navigation">
            <ul className="nav__items">
              <li className="nav__item"><a href="#Project" className="nav__link">Project</a></li>
              <li className="nav__item"><a href="#Certificates" className="nav__link">Certificates</a></li>
              <li className="nav__item"><a href="#skilll" className="nav__link">Skill</a></li>
              <li className="nav__item"><a href="#About" className="nav__link">About</a></li>
            </ul>
          </nav>
        </div>

        <div className="header__text-box row">
          <div className="header__text">
            <h1 className="heading-primary">

              <span style={{ color: '#fff', fontWeight: '400' }}>
                <Typewriter
                  words={['Parth Bhatt']}
                  loop={1}
                  cursor
                  cursorStyle=''
                  typeSpeed={100}
                  delaySpeed={1000}
                />
              </span> <br />
            </h1>
            <p> Experienced &nbsp;
              <Paper
                style={{
                  display: "inline-flex",
                  backgroundColor: "transparent",
                  color: '#bb271a',
                  fontWeight: '400',
                  width: "130px",
                  margin: "20px 0px 10px 0px"
                }}>
                <span>
                  <Typewriter
                    words={['Frontend', 'Backend', 'FullStack', 'Software', 'Website']}
                    loop={500}
                    cursor
                    cursorStyle='|'
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </Paper> developer based in  Galway, Ireland.</p>
            <a href="#Contact" className="btn">Connect with me</a>
          </div>
        </div>
      </header>
      {/* Job Exp */}
      {/* Feed Back */}

      <section className="work" id="work">
        <div className="row">
          <h2>Work Experience</h2>
          <div className="Project__boxes">
            <div className="Project__box">
              <div className="Project__text">
                <h3>Reliance - Jio Platforms Limited</h3>

                <ul>
                  <li><u>Role</u> - Full Stack Developer </li>
                  <li><u>Recognition</u> - Spotlight Award in 2022</li>
                  <li><u>Team</u> - Manged and worked with Team of 5 members </li>
                  <li><u>Projects</u> -
                    <ul>
                      <li> Jio Bharat Phone - Developed B2B website for scanning and delibery the phone for PAN India people </li>
                      <li> MARCOM - Developed a billboard managing webiste to manage hoarding and billboard across PAN India. </li>
                      <li> VRN - Developed a website to monitor goods delivery at different Reliance warehouse across PAN India. </li>
                    </ul>
                  </li>
                </ul>
                <div className="Project__links">
                  <a href="https://rapidbasket.netlify.app/" target="_blank" className="link__text">
                    Visit Site <span>&rarr;</span>
                  </a>
                  <a href="https://github.com/parthbhatt268/Live-Corona-Case-Counter" target="_blank" title="View Source Code">
                    <img src={github} className="Project__code" alt="GitHub" />
                  </a>
                </div>
              </div>
              <div className="Project__image-box">
                <img src={jio} className="Project__image" alt="Project 0" />
              </div>
            </div>

          </div>
        </div>


        {/* spotlight award
         Jio bharat application
         VRN checklist */}

      </section>

      {/* Projects */}
      <main role="main">
        ˘
        <section className="Project" id="Project">
          <div className="row">
            <h2>Projects</h2>
            <div className="Project__boxes">
              <div className="Project__box">
                <div className="Project__text">
                  <h3>Rapid Basket - A end to end Food Ordering Website</h3>

                  <ul>
                    <li><u>Front-End</u> - React, Redux, Redux Toolkit Thunk, HTML, CSS, Javascript</li>
                    <li><u>Back-End</u> - ExpressJS and NodeJS	REST API</li>
                    <li><u>Database</u> - MongoDb</li>
                    <li><u>Payment Integration</u> - Stripe Payment (For Credit & Debit card Payment) </li>
                  </ul>
                  <div className="Project__links">
                    <a href="https://rapidbasket.netlify.app/" target="_blank" className="link__text">
                      Visit Site <span>&rarr;</span>
                    </a>
                    <a href="https://github.com/parthbhatt268/Live-Corona-Case-Counter" target="_blank" title="View Source Code">
                      <img src={github} className="Project__code" alt="GitHub" />
                    </a>
                  </div>
                </div>
                <div className="Project__image-box">
                  <img src={rapidBasket} className="Project__image" alt="Project 0" />
                </div>
              </div>
              <div className="Project__boxes">
                <div className="Project__box">
                  <div className="Project__text">
                    <h3>Website for live counting of corona cases</h3>

                    <ul className="Project__list">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>jQuery</li>
                    </ul>
                    <div className="Project__links">
                      <a href="https://parthbhatt268.github.io/Live-CoronaCase-Report/" target="_blank" className="link__text">
                        Visit Site <span>&rarr;</span>
                      </a>
                      <a href="https://github.com/parthbhatt268/Live-Corona-Case-Counter" target="_blank" title="View Source Code" >
                        <img src={github} className="Project__code" alt="GitHub" />
                      </a>
                    </div>
                  </div>
                  <div className="Project__image-box">
                    <img src={p1} className="Project__image" alt="Project 1" />
                  </div>
                </div>
                {/* Web Portfolio */}
                <div className="Project__box">
                  <div className="Project__text">
                    <h3>Web Based Portfolio</h3>

                    <ul className="Project__list">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>ReactJS</li>
                      <li>EmailJS</li>
                    </ul>
                    <div className="Project__links">
                      <a href="https://parthbhatt268.github.io/Live-CoronaCase-Report/" target="_blank" className="link__text">
                        Visit Site <span>&rarr;</span>
                      </a>
                      <a href="https://github.com/parthbhatt268/Live-Corona-Case-Counter" target="_blank" title="View Source Code" >
                        <img src={github} className="Project__code" alt="GitHub" />
                      </a>
                    </div>
                  </div>
                  <div className="Project__image-box">
                    <img src={p21} className="Project__image" alt="Project 1" />
                  </div>
                </div>
                {/* --- */}
                <div className="Project__box">
                  <div className="Project__text">
                    <h3>Fire Chat - Web chatting application</h3>

                    <ul className="Project__list">
                      <li>React</li>
                      <li>JavaScript</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Firebase</li>
                    </ul>
                    <div className="Project__links">
                      <a href="https://webchat-4d001.web.app/" target="_blank" className="link__text">
                        Visit Site <span>&rarr;</span>
                      </a>
                      <a href="https://github.com/parthbhatt268/Fire-Chat" target="_blank" title="View Source Code">
                        <img src={github} className="Project__code" alt="GitHub" />
                      </a>
                    </div>
                  </div>
                  <div className="Project__image-box">
                    <img src={projectimg2} className="Project__image" alt="Project 2" />
                  </div>
                </div>
                <div className="Project__box">
                  <div className="Project__text">
                    <h3>Profit/Loss Calculator</h3>
                    <p>
                      Android app to calculate Profit and loss made on buying or selling of stocks
                    </p>
                    <ul className="Project__list">
                      <li>Android</li>
                      <li>Java</li>
                      <li>XML</li>
                    </ul>
                    <div className="Project__links">
                      <a href="https://github.com/parthbhatt268/Profit-Loss-Calculator-" target="_blank" className="link__text">
                        Visit Site <span>&rarr;</span>
                      </a>
                      <a href="https://github.com/parthbhatt268/Profit-Loss-Calculator-" target="_blank" >
                        <img src={github} className="Project__code" title="View Source Code" alt="GitHub" />
                      </a>
                    </div>
                  </div>
                  <div className="Project__image-box">
                    <img src={p2} className="work__image" alt="Project 3" />
                  </div>
                </div>
                <div className="Project__box">
                  <div className="Project__text">
                    <h3> Desktop app to count Corona cases</h3>
                    <p>
                      Desktop app for counting Corona cases and Plot them on chart to make visualisation easier
                    </p>
                    <ul className="Project__list">
                      <ul>Language Python </ul>
                      <li>Matplotlib</li>
                      <li>Numpy</li>
                      <li>BeautifulSoup4</li>
                      <li>Tkinter</li>
                    </ul>

                    <div className="Project__links">
                      <a href="https://github.com/parthbhatt268/Corona-Virus-Case-Tracker-in-India" target="_blank" className="link__text">
                        Visit Site <span>&rarr;</span>
                      </a>
                      <a href="https://github.com/parthbhatt268/Corona-Virus-Case-Tracker-in-India" target="_blank" >
                        <img src={github} className="Project__code" title="View Source Code" alt="GitHub" />
                      </a>
                    </div>
                  </div>
                  <div className="Project__image-box">
                    <img src={p3} className="Project__image" alt="Project 4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="Certificates" id="Certificates" >
          <div className="row">
            <h2>Certificates</h2>
            <div className="cards-list">
              <div className="card 1">
                <div className="card_image"> <a href="https://www.credly.com/badges/6259f4dc-87c0-46f3-92e5-9ebe14857f03/public_url" target="_blank" ><img src={b1} /> </a></div>
                <div className="card_title title-white">
                  <p>Microsoft certified in Azure fundamental</p>
                </div>
              </div>
              <div className="card 1">
                <div className="card_image"> <a href="https://www.credly.com/badges/3c0ab82f-5e01-4f04-b0a2-bc941e051dbe/public_url" target="_blank" ><img src={b2} /> </a></div>
                <div className="card_title title-white">
                  <p>Microsoft certified in Python fundamental</p>
                </div>
              </div>
              <div className="card 1">
                <div className="card_image"> <a href="https://www.credly.com/badges/94b202b1-70bd-422b-bf70-686b845050e3/public_url" target="_blank" ><img src={b3} /> </a></div>
                <div className="card_title title-white">
                  <p>Python for Data science by IBM </p>
                </div>
              </div>
              <div className="card 1">
                <div className="card_image"> <a href="https://www.credly.com/badges/22172d49-616c-4a81-b10a-6ae77bb9c2c2/public_url" target="_blank" ><img src={b4} /> </a></div>
                <div className="card_title title-white">
                  <p>Machine learning with Python</p>
                </div>
              </div>
              <div className="card 1">
                <div className="card_image"> <a href="https://coursera.org/share/2da5a65dfb1d33363d2f6f89c45ddf32" target="_blank" ><img src={b5} /> </a></div>
                <div className="card_title title-white">
                  <p>Specialization in Web Development by Coursera</p>
                </div>
              </div>
              <div className="card 1">
                <div className="card_image"> <a href="https://coursera.org/share/14a23fc4cf4ebb1940c89487f8758fe2" target="_blank" ><img src={b5} /> </a></div>
                <div className="card_title title-white">
                  <p>Specialization in Pyhton Language by Coursera</p>
                </div>
              </div>

            </div>
          </div>
        </section>


        <section className="skilll" id="skilll">
          <div className="row">
            <h2>Skills </h2>
            <Skills />
          </div>
        </section>
      </main>

      {/* About Me */}
      <section className="About" id="About">
        <div className="row">
          <h2>About Me</h2>
          <div className="about__info">
            <p>
              Hi,&#128075; my name is Parth and I am a Full stack Web Developer.
              I have completed my Bachelor in Engineering &#x1F393; with aggregate pointer of 8.61 &#x1F396; from University of Mumbai.&#x1F3DB;
              You can connect with me on following social media platform. Also if you have any suggestions or comments for the webpage you can connect with me on linkedin.
              <p>Thank you for visiting my Webpage.&#x1F60A;</p>
            </p>
          </div>
          <div className="profile">
            <img src={Parth} width="300" height="300" className="Project__image" alt="My Photo" />
          </div>
        </div>
      </section>

      {/* Feed Back */}

      <section className="About" id="Contact">
        <div className="row">
          <h2>Contact me</h2>
          <footer className="footer" >

            <Grid container spacing={2}>
              <Grid item lg={6} xs={12}>
                <Paper style={{
                  backgroundColor: 'transparent',
                  color: "white",
                  width: "90%",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "20px",
                  justifyContent: "center",
                  padding: "5px",
                  borderBottom: "2px solid #ff0000"
                }}>

                  Contact Details
                </Paper>

                <Paper elevation={0}
                  style={{
                    backgroundColor: 'transparent',
                    color: "white",
                    width: "90%",
                    padding: "20px",
                    height: "auto",
                    display: "block",
                    alignItems: "center",
                    justifyContent: "left",
                    margin: "20px 0px 20px 0px",
                    border: "2px solid #ff0000"

                  }}>
                  <Paper style={{
                    width: "100%",
                  }} />
                  📞 - +91-9757023237 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <br />
                  🏠 - Galway, Ireland &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <br />
                  📧 - pb31286@gmail.com

                </Paper>


              </Grid>
              <Grid item lg={6} xs={12}>
                <Paper
                  style={{
                    width: "90%",
                    padding: "5px",
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "px",
                    backgroundColor: 'transparent',
                    color: "white",
                    borderBottom: "2px solid #ff0000"

                  }}>
                  Any suggestions or feedbacks
                </Paper>
                <Paper elevation={0} style={{
                  backgroundColor: 'transparent',
                  color: "white",
                  width: "90%",
                  padding: "20px",
                  height: "auto",
                  display: "block",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "20px 0px 20px 0px",
                  border: "2px solid #ff0000"

                }}>
                  <TextField
                    classes={{ root: classes.customTextField }}
                    onChange={(e) => { setData({ ...data, email: e.target.value }) }}
                    value={data.email}
                    id="outlined-basic"
                    style={{
                      width: "100%",
                      backgroundColor: "white",
                      fontSize: "15px"
                    }} label="Your Email ID*"
                    placeholder='Email@domain.com'
                    variant="outlined" color="secondary" />
                  <br />
                  <br />
                  <TextField
                    classes={{ root: classes.customTextField }}
                    onChange={(e) => { setData({ ...data, msg: e.target.value }) }}
                    value={data.msg}
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    style={{
                      width: "100%",
                      backgroundColor: "white",
                      fontSize: "15px"
                    }}
                    label="Message*"
                    placeholder='Please enter your valuable feedback'
                    variant="outlined" color="secondary" />
                  <br />
                  <br />

                  <Button variant='standard' style={{
                    backgroundColor: "#bb271a",
                    fontSize: "15px"
                  }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>

                </Paper>



              </Grid>
            </Grid>

          </footer>
        </div>
      </section>
      {/* Footer */}

      <footer role="contactinfo" className="footer">
        <div className="row">
          <ul className="footer__social-links">
            <li className="footer__social-link-item">
              <a href="https://leetcode.com/Parth_Bhatt/" target="_blank" title="Link to hackerrank">
                <img src={LeetCode} title="Link to hackerrank Profile" className="footer__social-image" alt="hackerrank" />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a href="https://www.linkedin.com/in/parth-bhatt-092024186/" target="_blank" title="Link to linkden">
                <img src={linkden} className="footer__social-image" alt="Linkden" />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a href="https://github.com/parthbhatt268" target="_blank" title="Link to Github">
                <img src={github} className="footer__social-image" alt="Github" />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a href="https://www.youtube.com/channel/UChgx5fqYK8R5Odj19S_gEzA" target="_blank" title="Link to youtube">
                <img src={youtube} className="footer__social-image" alt="youtube" />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a href="" title="Link to coursera">
                <img src={Coursera} target="_blank" title="Link to coursera Profile" className="footer__social-image" alt="coursera" />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a href="https://www.hackerrank.com/parthbhatt_268" target="_blank" title="Link to hackerrank">
                <img src={hackerrank} title="Link to hackerrank Profile" className="footer__social-image" alt="hackerrank" />
              </a>
            </li>
          </ul>
        </div>

        <p>Copyright © 2023 All rights reserved</p>
        <p>Made with ❤️ in Galway, Ireland</p>
      </footer>
      {showBackToTop && (
        <Button
          variant="contained"
          color="error"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            borderRadius: "50%",
            height: "62px",
            width: "42px",
            zIndex: 9999,
          }}
          onClick={handleBackToTop}
        >
          <img src={top} />
        </Button>
      )}
    </>
  )
}

export default Master