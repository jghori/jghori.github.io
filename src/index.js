import React, { Component } from 'react';
import initTilt from './js/tilt';
import initSr from './js/sr';
import './style/main.scss';
import Particles from 'react-particles-js';
 
  $('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});






initSr();
initTilt();
Particles();
