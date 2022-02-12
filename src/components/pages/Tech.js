import React from 'react';
import '../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import CSS from '../../images/icons/css.png'
// import GOLANG from '../../images/icons/golang.png'
// import HTML from '../../images/icons/html.png'
// import JAVASCRIPT from '../../images/icons/javascript.png'
// import LINUX from '../../images/icons/linux.png'
// import MAC from '../../images/icons/mac.png'
// import REACT from '../../images/icons/react.png'
// import RUBY from '../../images/icons/ruby.png'
// import RAILS from '../../images/icons/rubyonrails.png'

// import CardItem from '../../notused/Carditem';
// import '../Cards.css'

function Tech () {
    return (
        <div className="tech">
            <Stack style={{ textAlign: 'center', maxHeight: '95vh' }}>

            <Container>
                <h5>TECH STACK</h5>
            </Container>

            <Container style={{ backgroundColor: 'white', opacity:  '0.7' }}>
                {/* <Row>
                    <img src={CSS} alt="css" style={{ maxWidth: '8vh' }} />
                    <img src={HTML} alt="html" style={{ maxWidth: '8vh' }} />
                    <img src={GOLANG} alt="golang" style={{ maxWidth: '8vh' }} />
                    <img src={LINUX} alt="linux" style={{ maxWidth: '8vh' }} />
                    <img src={MAC} alt="mac" style={{ maxWidth: '8vh' }} />
                    <img src={JAVASCRIPT} alt="javascript" style={{ maxWidth: '8vh' }} />
                    <img src={REACT} alt="react" style={{ maxWidth: '8vh' }} />
                    <img src={RUBY} alt="ruby" style={{ maxWidth: '8vh' }} />
                    <img src={RAILS} alt="rails" style={{ maxWidth: '8vh' }} />
                </Row> */}
            </Container>

            <Container>
                <h5>SOME OF MY WORK</h5>

                <Row>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/img-home.jpg" />
                    <Card.Body>
                        <Card.Title>TEST CARD</Card.Title>
                        <Card.Text>
                            <p>SAMPLE TEXT</p>
                        </Card.Text>
                        <Button variant="primary">GO TO PROJECT</Button>
                    </Card.Body>
                </Card>
                </Row>
                {/* <div className="cards" >
                    <div className="cards__container" >
                        <div >
                            <ul className="cards__items">
                                <CardItem 
                                src="images/img-9.jpg" 
                                text="FULLSTACK PROJECT"
                                label="Rails and React Project"
                                path='/about-me'/>

                                <CardItem 
                                src="images/img-9.jpg" 
                                text="RAILS PROJECT"
                                label="Rails Project"
                                path='/about-me'/>

                                <CardItem 
                                src="images/img-9.jpg" 
                                text="TERMINAL PROJECT"
                                label="Terminal Project"
                                path='/about-me'/>

                                <CardItem 
                                src="images/img-9.jpg" 
                                text="SMALL GAME"
                                label="Small Game"
                                path='/about-me'/>

                            </ul>
                        </div> 
                    </div>
                </div> */}
            </Container>

            </Stack>
        </div>
    )
}

export default Tech;
