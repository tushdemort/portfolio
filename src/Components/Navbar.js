import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Navbar.css';
import robo from "./assets/robo.png"

export class Navbar extends Component {
    static propTypes = {}

    render() {
        window.onscroll = function () { myFunction() };

        function myFunction() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("myBar").style.width = scrolled + "%";
        }
        function topFunction() {
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          }
        return (
            <>
                <nav className="navbar bg-body-tertiary">
                    <img src={robo} alt="robo" className="robo"/>
                    <div className="container">
                        <a className="brand" onClick={topFunction}>Home</a>
                        <a className="brand" href="#about">About</a>
                        <a className="brand" href="#projects">Projects</a>
                        <a className="brand" href="#skills">Skills</a>
                        <a className="brand" href="#socials">Socials</a>
                        <a className="brand2" href="https://drive.google.com/file/d/1iaPT-7iiI7gnHYppwhxIaLUw7Y7Gmn3U/view?usp=sharing" style={{position:'relative',left:'80%'}}>Resume</a>

                    </div>
                </nav>
                <scroll>
                    <div className="header">
                        <div className="progress-container">
                            <div className="progress-bar" id="myBar"></div>
                        </div>
                    </div>
                </scroll>


            </>
        )
    }
}

export default Navbar 