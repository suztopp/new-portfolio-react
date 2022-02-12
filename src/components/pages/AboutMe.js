import React from 'react';
import '../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';
import SuzPic from '../../images/suzthree.jpg';
import Stack from 'react-bootstrap/Stack';

function AboutMe () {
    return (
        <div className="about-me">
            <Container style={{ maxWidth: '85%', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>

                <Stack>


                <Container>
                    <Row>
                        <Col className="about-me-column">
                            {/* <h3>ABOUT ME PAGE</h3> */}
                            <h5>G'day!</h5>
                            {/* <p>I am a new developer finding my way through the beginning stages of my career.</p>
                            <p>In a previous life I was a Retail Management Professional, working with all kinds of teams to train and develop staff to be great at what they did.</p>
                            <p>I had done all roles I could in that world, but always wanted to go into tech... I just didn't know where to look.</p>
                            <p>After the first year of the pandemic I made the big step of resigning to go to Coder Academy full time to do a Diploma of Tech in Coding, which I did after winning their scholarship.</p>
                            <p></p> */}
                            <p>I am a new developer finding my way through the beginning stages of my career.
                            In a previous life I was a Retail Management Professional, working with all kinds of teams to train and develop staff to be great at what they did.
                            <br></br>I tried all roles I could in that world, but always wanted to go into tech... I just didn't know where to look.
                            After the first year of the pandemic I made the big step of resigning to go to Coder Academy Melbourne full time to do a Diploma of IT in Coding, which I did after winning their scholarship.</p>
                            <p>After my course I did an internship for an Agency which was amazing, then I thankfully was accepted into the Mantel Group Womens Traineeship and was offered a role with them when it finished.</p>
                
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <img src={SuzPic} alt="suz pic" style={{ width: '30vh', padding: "20px" }}></img>
                    </Row>
                </Container>

                </Stack>

            </Container>

        </div>
    )
}

export default AboutMe;