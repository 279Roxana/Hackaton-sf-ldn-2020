import React, { Component } from "react";

import seethefuture from '../../../src/seefuture (1).gif';
import studentpic from '../../../src/students.jpg';
import "./index.css";
import SignIn from '../register/SignIn';

const LandingPage = () => {
  return (
    <main className="main">
    
      <div className='firstIntro'>
        <section className='introSection'>
          <p className='introHeader'>See the future</p>
          <p className ="introtext">Envision the day-to-day requirements of your future career</p>
        </section>
     <img className='badBusinessPeopleWithBulb' src={seethefuture}/>
     </div>
      <div className='superRedSeparator'></div>
  
      <section className="info">
      <img className ='studentpic'src={studentpic} alt='CYFstudentsworkingonacomputer'/>
      <section className="ourStudent">
 
     

          <h2>Our Students</h2>
          <p>
          Many of the students on the CodeYourFuture course are unfamiliar
            with the world of software development within the UK and many have
            never held a technical job role before. See the Future is a way for
            students and graduates of the CodeYourFuture course to be matched
            with a range of opportunities provided by local businesses. This
            could be anything from a few hours of shadowing a professional
            developer or a tour of their office, all the way through to a
            student’s first technical job role.
            CodeYourFuture provides an 8-month, full stack, web development
            bootcamp for asylum seekers, refugees and people from other
            disadvantaged backgrounds. Our students come from a huge range of
            backgrounds and varying levels of experience, but join together and
            form a community around a common interest in tech and coding. Many
            of our graduates have gone on to work in a range of roles such as
            both front and back end developer roles, at companies including the
            Financial Times, the BBC and Ticketmaster.
          </p>
        </section>
        </section>
        <div className ='signinwrapper'>
      <SignIn/>
      </div>
  
    </main>
  );
};


export default LandingPage;
