import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/img/bachkhoa-car1.jpg";
import ItemsList from '../layouts/ItemList';


export function Homepage() {
    return (
        <div >
            <Carousel showStatus = {false} stopOnHover = {true} showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay ={true}>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img1} />
                </div>
            </Carousel>
            <div className='font-bold p-10 font-size'>
                Tin đăng mới
            </div>
            <ItemsList/>
        </div>

    );
}