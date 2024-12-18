import React from "react";
import { Card } from "react-bootstrap";
import card1 from "../Assets/Images/cardTable.jpg"

export default function HotelCards() {

    return (

        <div>
            <Card style={{ width: '25rem' }} className="text-center">
                <Card.Img className="img-fluid" variant="top" src={card1} />
                <Card.Body >
                    <Card.Title className='cardTitle'>Royal Suite</Card.Title>
                    <Card.Text>Echoing the rich and elegantstyle of versailles, our Royal Suiteimpresses is very turn, with stunning Frenchreproduction and tall windowsoverlooking lake Geneva
                    </Card.Text>
                    <button class="cardBtn">See More</button>
                </Card.Body>
            </Card>
        </div>


    )
}