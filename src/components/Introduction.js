import React from "react";
// import Image from "react-bootstrap/Image";
import pfp from "../assets/my-pfp3.png";
import { Container } from "react-bootstrap";

class Introduction extends React.Component {
    render () {
        return (
            <section id="about-me-section" className="my-introtext mx-auto">
                <h1 className="proj-section-title text-center">About me</h1>
                <hr className="section-hr border border-primary border-2 opacity-75 mx-auto"></hr>

                <Container className="img-container pt-5">
                    <img className="mx-auto d-block rounded-circle dynamic-sizing" id="my-pfp" src={pfp} alt="profile-pic" width={"300px"} height={"300px"} />
                </Container>

                <div className="intro-content">
                    <p id="my-intro" className="lead mx-auto" >
                        Hi my name is Brian Ramirez, welcome to my portfolio! I'm a passionate programmer with a knack for solving complex problems and creating innovative 
                        solutions. Explore my projects to see how I bring ideas to life through code. I thrive on challenges and continually seek to expand my skills. 
                        If you're interested in collaborating or have any questions, feel free to reach out. Thanks for visiting, and I'm excited to discuss how I can
                        contribute to your next project!
                    </p>
                </div>
                
            </section>
        )
    }
}

export default Introduction;