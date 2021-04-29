import { useState } from "react";
import styled from 'styled-components';
import { FaInfoCircle, FaLinkedin, FaEnvelope, FaTimesCircle, FaGithub } from "react-icons/fa";


const Info = styled.footer`
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: #fff;
  border: 1px solid #e2cfa8;
  border-radius: 10px;
  padding-left: 5px;
  padding-right: 28px;
    & span{
      font-size: 14px;
      color: #777;
    }

  & .info{
    color: #e47d3d;
    transition: all ease .5s;
    vertical-align: top;
    position: absolute;
    right: 0;
    top: 0px;
    font-size: 20px;
      &.on {
        opacity: 1;
      }
      &.off{
        opacity: 0;
      }
      &:hover{
        color:#ce4f00;
        cursor: pointer;
      }
    }
    & .contact-icon{
      color: #ce4f00;
      position: relative;
      top: 2px;
      margin-right: 10px;
    }
  }
`;
const Contact = styled.div`
  position: absolute;
  top: 100px;
  right: -5px;
  background: #fff;
  padding: 10px 15px;
  border: 1px solid #e2cfa8;
  border-radius: 10px;
  line-height: 24px;
  white-space: nowrap;
  opacity: 0;
  transition: all ease .3s;
  &.on{
    top: -100px;
    opacity: 1;
  }

`;
function Footer() {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <Info>
      <span>contact</span>
      <FaInfoCircle   className={isActive ? "info off" : "info on"} onClick={handleToggle} /> 
      <FaTimesCircle  className={isActive ? "info on" : "info off"} onClick={handleToggle}/>
      <Contact className={isActive ? "on" : "off"}>
        <FaEnvelope className="contact-icon" /> JuanArcin@gmail.com<br />
        <a href="https://www.linkedin.com/in/juanarciniega" target="_blank"><FaLinkedin  className="contact-icon" /> linkedin.com/in/juanarciniega</a><br />
        <a href="https://github.com/juanarcin" target="_blank"><FaGithub  className="contact-icon" /> github.com/juanarcin</a>
      </Contact>
    </Info>
  );
}

export default Footer;
