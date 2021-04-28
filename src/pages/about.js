import {useState} from 'react';
import {motion} from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";

import styled from 'styled-components';

const Text = styled.div`
	flex-basis: 60%;
	line-height: 26px;

	@media screen and (min-width: 800px){
		padding-right: 15px
	}
`
const Skills = styled.div`


	& ul{
		padding: 0;
		margin: 0;
		font-size: 14px;
		& li{
			display:inline-block; 
			margin: 15px;
			margin-top: 0;
		}
	}

	@media screen and (min-width: 800px){

		flex-basis: 20%;
		& h4{
			text-align: left;
		}
		& ul{
			text-align: left;
			padding-left: 0px;
		
			& li{
				display:list-item;
			}
		}
	}
`

function About() {
  return (
	<motion.div exit={{opacity: 0}} animate={{opacity:1}} initial={{opacity:0}}>
		<div className="container">

			<Text>
				<h3>Hi There!</h3>
				<p>My Name is Juan and I'm a Creative Front End Developer with 10 years of professional experience.</p>
				<p>In my past roles I've worked closely with both design and tech teams allowing me to experience the best of both worlds.</p>
				<p>I've helped small startups grow and large agencies continue rocking! This has allowed me to work with teams with as little as 3 and as many as 15+ engineers.</p>
				<p>The projects I've participated in have included, Wordpress Sites (custom themes and maintenance), Single Page Applications, Landing Pages, Multi Step Forms, Ecommerce Sites, Responsive Emails, and tons of websites! </p>
				<p>To learn more about me feel free to visit my <a href="https://www.linkedin.com/in/juanarciniega" target="blank"><FaLinkedin /> LinkedIn Profile</a>.</p>
			</Text>

			<Skills>
				<h4>Languages</h4>
				<ul>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>Javascript</li>
				</ul>		
				<h4>Frameworks/Libraries</h4>
				<ul>
					<li>AngularJs</li>
					<li>ReactJs</li>
					<li>Redux</li>
					<li>Sass</li>
					<li>Less</li>
					<li>Bootstrap</li>
					<li>Foundation</li>
					<li>jQuery</li>
					<li>MVC</li>
				</ul>
				<h4>Technologies</h4>
				<ul>
					<li>API</li>
					<li>SPA</li>
					<li>FlexBox</li>
					<li>Responsive Design</li>
				</ul>
			</Skills>

			<Skills>
				<h4>Custom Themes</h4>
				<ul>
					<li>WordPress</li>
					<li>Shopify</li>
				</ul>
				<h4>Tools</h4>
				<ul>
					<li>NPM</li>
					<li>WebPack</li>
				</ul>
				<h4>Design</h4>
				<ul>
					<li>Photoshop</li>
					<li>Fireworks</li>
					<li>Gimp</li>
				</ul>
				<h4>Version Control</h4>
				<ul>
					<li>GitHub</li>
					<li>Mercurial</li>
				</ul>
				<h4>Ecommerce</h4>
				<ul>
					<li>Stripe</li>
					<li>Paypal</li>
					<li>Woo-Commerce</li>
					<li>Shopify</li>
				</ul>
			</Skills>
		</div>
   </motion.div>
  );
}

export default About;
