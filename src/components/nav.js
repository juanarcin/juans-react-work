import {useState} from 'react';
import { 
  Link, 
} from "react-router-dom";
import styled from 'styled-components'

const NavItem = styled.li`
  font-family: 'East Sea Dokdo', cursive;
  float:left;
  padding: 5px 0;
  font-weight: normal;
  border-bottom: 2px solid transparent;
  transition: all ease .5s;
  width: 95px;
  display:block;
  z-index: 2;
  position: relative;
  font-size: 30px;



  &.active-tracker{
    position: absolute;
    top: 0;
    left: 20%;
    height: 25px;
    z-index: 1;
    border-bottom: 2px solid #de7406;
  }

  &.active a{
      color: #de7406;
    }
  }

  a{
    text-decoration: none;
    color:#777;
    transition: .5s all ease;
    &:hover{
      color:#de7406;
    }
  }
`;
const NavContainer = styled.div`
  padding: 0;
  margin: 0;
  text-align: center;
  width: 380px;
  height: 35px;
  position: relative;
  float: right;
`;
const Logo = styled.h1`
  font-family: 'East Sea Dokdo', cursive;
  float: left;
  margin: 0 10px;
  font-size: 30px;
  font-weight: normal;

  & span{
    color:#de7406;
  }
`;
const Header = styled.header`
  height: 40px;
`;
function Nav() {

  const [activePage, setActivePage] = useState('home')
  const [activeTracker, setActiveTracker] = useState()

  function updatePage(page){
    if(page === 'home'){setActiveTracker('0%')}
    if(page === 'about'){setActiveTracker('25%')}
    if(page === 'work'){setActiveTracker('50%')}
    if(page === 'contact'){setActiveTracker('75%')}
    setActivePage(page)
  }

  return (
    <Header>
      <Logo>Juans <span>. Work</span></Logo>
      <NavContainer>
          <NavItem className="active-tracker" style={{ left: `${activeTracker}`}}></NavItem>

          <NavItem  onClick={() => updatePage('home')} className={activePage === 'home' ? 'active' : ''} >
            <Link to="/">home</Link>
          </NavItem>

          <NavItem 
            onClick={() => updatePage('about')} className={activePage === 'about' ? 'active' : ''} >
            <Link to="/about">about</Link>
          </NavItem>

          <NavItem onClick={() => updatePage('work')} className={activePage === 'work' ? 'active' : ''} >
            <Link to="/work">work</Link>
          </NavItem>

          <NavItem onClick={() => updatePage('contact')} className={activePage === 'contact' ? 'active' : ''} >
            <Link to="/contact">contact</Link>
          </NavItem>

        </NavContainer>
      </Header>
  );
}

export default Nav;
