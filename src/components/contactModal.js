import {useState} from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";


const Modal = styled.div`
	position: fixed;
	background: rgba(0, 0, 0, 0.8);
	top:-1000px;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 25;
	transition: all ease .5s;
	opacity: 0;
	& .content{
		position: relative;
		background:rgba(255, 255, 255, 1);
		max-width: 800px;
		text-align: center;
		margin: 0 auto;
		padding: 20px;
		border-radius: 20px;
		font-size: 24px;
		line-height: 60px;
		text-align: left;
		font-weight: bold;
		margin-top: 100px;
		& .close{
			float: right;
			color:#ce4f00;
			font-size: 34px;
			cursor: pointer;
		}
	}
	&.open{
		top: 0;
		opacity: 1;
	}
`;


function ContactModal(props) {


  const [modalActive, modalToggle] = useState(false)

  function openModal(){
  	modalToggle(true)
  }

  function closeModal(){
  	modalToggle(false)
  }

  return (
  	<div className="a">
  		<span onClick={() => openModal()}>Contact</span>
	    <Modal className={modalActive ? 'open' : 'closed'}>
	    	<div className="content">
	    		<AiFillCloseCircle className="close" onClick={() => closeModal()} />
	    		<FaEnvelope className="contact-icon" /> JuanArcin@gmail.com<br />
	        <a href="https://www.linkedin.com/in/juanarciniega" rel="noreferrer" target="_blank"><FaLinkedin  className="contact-icon" /> linkedin.com/in/juanarciniega</a><br />
	        <a href="https://github.com/juanarcin" rel="noreferrer" target="_blank"><FaGithub  className="contact-icon" /> github.com/juanarcin</a>
	       </div>
	    </Modal>
    </div>
  );
}

export default ContactModal;
