import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../Components/Header.css'
import img from "../Assets/Images/Screenshot (118).png";
import vv from '../Assets/Videos/Res_video.mp4';
import loco from "../Assets/Images/logo_responsive_default.png"
import royal from "../Assets/Images/toppng.com-golden-line-png-1100x192.png"
import gallery1 from "../Assets/Images/gallery.jpg"
import gallery2 from "../Assets/Images/img3.jpg"
import royalside from "../Assets/Images/pnge.png"
import rightside from "../Assets/Images/pnegg2.png"
import gallery3 from "../Assets/Images/Hotel.jpg"
import { Container } from 'react-bootstrap';
import dineImg from "../Assets/Images/food.jpg"
import topImg from "../Assets/Images/top1.png"
import botImg from "../Assets/Images/top2.png"
import videoIcon from "../Assets/Images/pngfind.com-white-png-icons-5577850 (1).png"
import newLine from "../Assets/Images/new.png"
import "./csss.scss";
import cardRoyal from "../Assets/Images/cardroyal.png"
import card1 from "../Assets/Images/cardTable.jpg"
import HotelCards from './HotelCards';
import Carousel from 'react-bootstrap/Carousel';
import { GrInstagram } from 'react-icons/gr';
import {FaSquareFacebook } from 'react-icons/fa6';
import {AiFillLinkedin} from 'react-icons/ai'
import {RiWhatsappFill} from 'react-icons/ri'

import {FaTwitterSquare} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'







function Header() {




    return (
        <div>



            <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
                <div class="container-fluid" style={{ marginBottom: "-3px" }}>
                    <div class="navbar-brand d-flex" href="#">
                        <a href='#'> <img src={loco} alt="Image" class="locoNav"></img></a>
                        <p class="name">16 HANDLES</p>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item active">
                                <a class="nav-link mr-2" href="#">Home </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Menus</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Offer</a>
                            </li>
                            <li class="nav-item">
                                <button class="btnTable">Book Table</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>




            <div class="videoDiv">
                <video autoPlay loop muted id="myVideo">
                    <source src={vv} type="video/mp4"></source>
                </video>
                <div class="centered">
                    <img src={loco} alt='Loco' class="loco" ></img>
                    <p class="locoName">World's Best Dining and Dineout Restaurent Here!</p>
                    <h6 class="locoCont">"If you can get nothing better out of the world, get a good dinner out of it, at least"</h6>
                    <button class="locoBtn  draw-border"><img class="vidIcon" src={videoIcon}></img>MAKE A RESERVATION</button>
                </div>
            </div>





            <div class="container experience"  >
                <h2>THE 16 HANDLES EXPERIENCES</h2>
                <h6>[BE SWEPT MOST POPULAR FOOD SANTUARY AMSTERDAM HAS TO OFFER]</h6>
                <img class="img-fluid" src={royal} width={520}></img>
            </div>


            <div class="container firstCondent">
                <div class="row">
                    <div class="col-md-6 firstPara" style={{ textAlign: "justify", borderBottom: "1px solid #FDDC5C ", padding: "0px" }}>Hotel <bold style={{ color: "#FDDC5C" }}>16 HANDLES</bold> – an extraordinary and sensational suite boutique hotel located in the beating heart of Amsterdam’s city centre: The Dam Square, overlooking the eminent monument and the Royal Palace. Not a single detail has gone unnoticed by the visionary two-time winner of the Hotelier of the Year Award Eric Toren. Toren has always envisioned opening an out of the ordinary dream hotel, to give guests the experience of a lifetime.By creating a crème de la crème team consisting of Executive Chef Tim Golsteijn, the world’s best wine taster and sommelier Lendl Mijnhijmer, renowned architects, designers, the finest staff in hospitality and more, Hotel TwentySeven and its sixteen exquisite suites will ignite all of your senses. Hotel TwentySeven offers a large range of personalised services. Literally anything is possible for our guests.Ranging from the slightly smaller scaled "bijou" Junior Suites, to the iconic splendor of the 219 square meters Signature Suite. World-class carpets from Nepal, exquisite handmade Italian curtains.</div>
                    <div class="col-md-6">
                        <img className="img-fluid" src={gallery1}></img>
                    </div>
                </div>
            </div>


            <div class="container secondCondent">
                <div class="row">
                    <div class="col-md-6">
                        <img id="secondCondentImg" src={gallery2}></img>
                    </div>
                    <div class="col-md-6" style={{ textAlign: "justify" }}>
                        <h2 style={{ marginBottom: "14px" }} >  <img class="royalImg" src={royalside}></img>
                            BAR HANDLES</h2>
                        <div style={{ marginLeft: "7px", borderBottom: "1px solid #FDDC5C", }}> The <bold style={{ color: "#FDDC5C" }}>16 HANDLES BAR</bold>  provide stools or chairs that are placed at tables or counters for their patrons. Bars that offer entertainment or live music are often referred to as "music bars", "live venues", or "nightclubs". Types of bars range from inexpensive dive bars to elegant places of entertainment, often accompanying restaurants for dining. to give guests the experience of a lifetime.By creating a crème de la crème team consisting of Executive Chef Tim Golsteijn, the world’s best wine taster and sommelier Lendl Mijnhijmer, renowned architects, designers, the finest staff in hospitality and more, Hotel TwentySeven and its sixteen exquisite suites will ignite all of your senses. Ranging from the slightly smaller scaled "bijou" Junior Suites Here also providing energy Drings with alchocol.so,customer is satisfied more than and sometimes think a Bar. It's also providing the some extra liqouir it is really satisfied to a mind as well as Body Refreshment in a matter.</div>
                    </div>
                </div>
            </div>



            <div class="container thirdCondent">
                <div class="row">
                    <div class="col-md-6" style={{ textAlign: "justify" }}>
                        <h2 style={{ marginBottom: "14px" }} >
                            HOTEL HANDLES <img class="royalImg" src={rightside}></img></h2>
                        <div style={{ marginLeft: "7px", borderBottom: "1px solid #FDDC5C", }}> The <bold style={{ color: "#FDDC5C" }}>16 HANDLES HOTELS</bold>  provide stools or chairs that are placed at tables or counters for their patrons. Bars that offer entertainment or live music are often referred to as "music bars", "live venues", or "nightclubs". Types of bars range from inexpensive dive bars to elegant places of entertainment, often accompanying restaurants for dining. to give guests the experience of a lifetime.By creating a crème de la crème team consisting of Executive Chef Tim Golsteijn, the world’s best wine taster and sommelier Lendl Mijnhijmer, renowned architects, designers, the finest staff in hospitality and more, Hotel TwentySeven and its sixteen exquisite suites will ignite all of your senses. Ranging from the slightly smaller scaled "bijou" Junior Suites Here also providing energy Drings with alchocol.so,customer is satisfied more than and sometimes think a Bar. It's also providing the some extra liqouir it is really satisfied to a Hotels.</div>
                    </div>
                    <div class="col-md-6">
                        <img id="thirdCondentImg" src={gallery3}></img>
                    </div>
                </div>
            </div>


            <Container fluid style={{ marginBottom: "60px" }}>
                <div className="row">
                    <div class='col-md-8'>
                        <img src={dineImg} class="dineImg"></img>
                    </div>
                    <div class='col-md-4 dineCont '>
                        <img src={topImg} class="topRoyal"></img>
                        <h2>Join Us For <br /><b>DINNER</b></h2>
                        <h6>To book your table in our restaurant or one of our event areas, please use the button below</h6>
                        <button class="btnBook ">Book Now</button>
                        <img src={botImg} class="botImg"></img>
                    </div>
                </div>
            </Container>
            <Container fluid style={{ marginBottom: "80px" }}>
                <h2 class='cardHead'>16 HANDLES HIGHLIGHTS</h2>

                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <div>
                            <Row>
                                <Col >
                                    <Card style={{ width: '25rem' }} className="text-center">
                                        <Card.Img className="img-fluid" variant="top" src={card1} />
                                        <Card.Body >
                                            <Card.Title className='cardTitle'>Royal Suite</Card.Title>
                                            <Card.Text>Echoing the rich and elegantstyle of versailles, our Royal Suiteimpresses is very turn, with stunning Frenchreproduction and tall windowsoverlooking lake Geneva
                                            </Card.Text>
                                            <button class="cardBtn">See More</button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col >
                                    <Card style={{ width: '25rem' }} className="text-center">
                                        <Card.Img className="img-fluid" variant="top" src={card1} />
                                        <Card.Body >
                                            <Card.Title className='cardTitle'>Royal Suite</Card.Title>
                                            <Card.Text>Echoing the rich and elegantstyle of versailles, our Royal Suiteimpresses is very turn, with stunning Frenchreproduction and tall windowsoverlooking lake Geneva
                                            </Card.Text>
                                            <button class="cardBtn">See More</button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col >
                                    <Card style={{ width: '25rem' }} className="text-center">
                                        <Card.Img className="img-fluid" variant="top" src={card1} />
                                        <Card.Body >
                                            <Card.Title className='cardTitle'>Royal Suite</Card.Title>
                                            <Card.Text>Echoing the rich and elegantstyle of versailles, our Royal Suiteimpresses is very turn, with stunning Frenchreproduction and tall windowsoverlooking lake Geneva
                                            </Card.Text>
                                            <button class="cardBtn">See More</button>
                                        </Card.Body>
                                    </Card>

                                </Col>



                            </Row>

                        </div>

                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <Row>
                                <Col >
                                    <Card style={{ width: '25rem' }} className="text-center">
                                        <Card.Img className="img-fluid" variant="top" src={card1} />
                                        <Card.Body >
                                            <Card.Title className='cardTitle'>Royal Suite</Card.Title>
                                            <Card.Text>Echoing the rich and elegantstyle of versailles, our Royal Suiteimpresses is very turn, with stunning Frenchreproduction and tall windowsoverlooking lake Geneva
                                            </Card.Text>
                                            <button class="cardBtn">See More</button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col >
                                    <Card style={{ width: '25rem' }} className="text-center">
                                        <Card.Img className="img-fluid" variant="top" src={card1} />
                                        <Card.Body >
                                            <Card.Title className='cardTitle'>Royal Suite</Card.Title>
                                            <Card.Text>Echoing the rich and elegantstyle of versailles, our Royal Suiteimpresses is very turn, with stunning Frenchreproduction and tall windowsoverlooking lake Geneva
                                            </Card.Text>
                                            <button class="cardBtn">See More</button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col >
                                    <Card style={{ width: '25rem' }} className="text-center">
                                        <Card.Img className="img-fluid" variant="top" src={card1} />
                                        <Card.Body >
                                            <Card.Title className='cardTitle'>Royal Suite</Card.Title>
                                            <Card.Text>Echoing the rich and elegantstyle of versailles, our Royal Suiteimpresses is very turn, with stunning Frenchreproduction and tall windowsoverlooking lake Geneva
                                            </Card.Text>
                                            <button class="cardBtn">See More</button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>

                    </Carousel.Item> <Carousel.Item>
                        <div>
                            <Row>
                                <Col >
                                    <Card style={{ width: '25rem' }} className="text-center">
                                        <Card.Img className="img-fluid" variant="top" src={card1} />
                                        <Card.Body >
                                            <Card.Title className='cardTitle'>Royal Suite</Card.Title>
                                            <Card.Text>Echoing the rich and elegantstyle of versailles, our Royal Suiteimpresses is very turn, with stunning Frenchreproduction and tall windowsoverlooking lake Geneva
                                            </Card.Text>
                                            <button class="cardBtn">See More</button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col >
                                    <Card style={{ width: '25rem' }} className="text-center">
                                        <Card.Img className="img-fluid" variant="top" src={card1} />
                                        <Card.Body >
                                            <Card.Title className='cardTitle'>Royal Suite</Card.Title>
                                            <Card.Text>Echoing the rich and elegantstyle of versailles, our Royal Suiteimpresses is very turn, with stunning Frenchreproduction and tall windowsoverlooking lake Geneva
                                            </Card.Text>
                                            <button class="cardBtn">See More</button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col >
                                    <Card style={{ width: '25rem' }} className="text-center">
                                        <Card.Img className="img-fluid" variant="top" src={card1} />
                                        <Card.Body >
                                            <Card.Title className='cardTitle'>Royal Suite</Card.Title>
                                            <Card.Text>Echoing the rich and elegantstyle of versailles, our Royal Suiteimpresses is very turn, with stunning Frenchreproduction and tall windowsoverlooking lake Geneva
                                            </Card.Text>
                                            <button class="cardBtn">See More</button>
                                        </Card.Body>
                                    </Card>

                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container className="loyal mb-3">
                <h4>For Your Loyalty</h4>
                <p> <img src={newLine} width={250}></img> </p>
                <h2>"Guests who book directly on the 16 HANDLES website are rewarded with a variety of benefits."</h2>
            </Container>

            <Container className='text-center mt-5' id="Footer">
                <div>
                    <h4>Follow us</h4>
                    <div className='mt-4'>
                        <GrInstagram color='white' size={"30px"}      className='me-5'/>
                        <FaSquareFacebook color='white' size={"30px"} className='me-5'/>
                        <AiFillLinkedin color='white' size={"30px"}   className='me-5'/>
                        <RiWhatsappFill  color='white' size={"30px"}  className='me-5'/>
                        <FaTwitterSquare  color='white' size={"30px"} />
                    </div>
                </div>
            </Container>
            <div>
            
                       <Row className='Footer_Text mt-5 ms-2' >
                        <Col lg={9}> <p>Sixteen Handles. Steven's Lane. Washington, USA - 995601 </p>

                        </Col>
                        <Col lg={3} className='text-en' >

                        <p> 16handles@yahoo.com <MdEmail color='white' size={"20px"}/> </p>
                        </Col>
                        </Row> 
                    
            </div>






        </div >
    )
}
export default Header
