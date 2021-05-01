import {useState} from 'react';
import { FaHeart } from "react-icons/fa";
import {motion} from 'framer-motion';
import styled from 'styled-components';
import VideoBackground from '../components/background.js';



const Intro = styled.div`
	position: relative;
	z-index: 15;
    text-align: center;
  	font-family: "Raleway", sans-serif;;
`
const Hello = styled.h4`
	font-family: "Poller One", cursive;
    font-size: 90px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 0;
    margin-top:75px;
    transition: all ease 2s;
    position: relative;
    left: -500px;
    &.fadeIn{
    	color: #ce4f00;
    	left: 0;
    }
`
const Name = styled.p`
	font-family: "Raleway", sans-serif;
    font-size: 10vw;
    margin: 0;
    
    @media screen and (min-width: 600px){
        font-size: 60px;
    }


`
const Love = styled.p`
	font-family: "Covered By Your Grace", cursive;
    font-size: 24px;
    margin: 0;
    position: relative;
    top: -25px;
    opacity: 0;
    transition: 2s;
    &.fadeIn{
    	color: #000;
    	top:20px;
    	opacity: 1;
    }
    & span{
    	color: #ce4f00;
	    display: inline-block;
	    position: relative;
	    top: 3px;
    }
`
function IntroText() {
	const [fadeIn, startFadeIn] = useState(false)
	const [fadeInLove, startFadeInLove] = useState(false)

	setTimeout(function () {
	    startFadeIn(true)
	}, 200);

	setTimeout(function () {
	    startFadeInLove(true)
	}, 3500);

  return (
	<Intro>
		<Hello className={fadeIn  ? 'fadeIn' : ''}>Hello</Hello>
		<Name>I'm Juan Arciniega.</Name>
		<Love className={fadeInLove  ? 'fadeIn' : ''}>I build websites with love <span><FaHeart /></span></Love>
	</Intro>
  );
}

export default IntroText;
