// use "rfce" to import and build default function
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import BusinessCard from './pages/BusinessCard';
import CardItem from './pages/CardItem';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* Uncomment for video background */}
      {/* <video src='./videos/video-1.mp4' autoPlay loop muted /> */}
      {/* <p>Experience in Developing Machine Learning </p> */}
      <BusinessCard
        src='images/img-personal.png'
        text='Explore the hidden waterfall deep inside the Amazon Jungle'
        label='Adventure'
        path='/services'
      />
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

