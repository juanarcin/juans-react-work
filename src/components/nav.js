import {useState} from 'react';
import { 
  Link, 
  useLocation 
} from "react-router-dom";
import styled from 'styled-components';

const NavItem = styled.li`
  font-family: "Raleway", sans-serif;;
  float:left;
  padding: 5px 0;
  font-weight: normal;
  border-bottom: 2px solid transparent;
  transition: all ease .5s;
  width: 95px;
  display:block;
  z-index: 2;
  position: relative;
  font-size: 16px;



  &.active-tracker{
    position: absolute;
    top: 0;
    left: 0%;
    height: 25px;
    z-index: 1;
    border-bottom: 2px solid #ce4f00;
  }

  &.active a{
      color: #ce4f00;
    }
  }

  a{
    text-decoration: none;
    color:#777;
    transition: .5s all ease;
    &:hover{
      color:#555;
    }
  }
`;
const NavContainer = styled.div`
  padding: 0;
  margin: 0 auto;
  text-align: center;
  width: 285px;
  height: 35px;
  position: relative;
  
`;

const Header = styled.header`
  height: 40px;
`;
function Nav() {
  let active = 'home';
  let slider;
  let sliderPosition;

  const [activePage, setActivePage] = useState()
  const [activeTracker, setActiveTracker] = useState()

  const location = useLocation();
  const page = location.pathname;


  if(page == '/'){slider = '0%'; active = 'home'}
  if(page == '/about'){slider = '33%';  active = 'about'; }
  if(page == '/work'){slider = '66%';  active = 'work'}


  sliderPosition = {
    left: slider
  }




  

  return (
    <Header>
      <NavContainer>
          {/*<NavItem className="active-tracker" style={{ left: `${active}`}}></NavItem>*/}
          <NavItem className="active-tracker" style={sliderPosition}></NavItem>

          <NavItem  className={active === 'home' ? 'active' : ''} >
            <Link to="/">home</Link>
          </NavItem>

          <NavItem className={active === 'about' ? 'active' : ''} >
            <Link to="/about">about</Link>
          </NavItem>

          <NavItem className={active === 'work' ? 'active' : ''} >
            <Link to="/work">work</Link>
          </NavItem>

        </NavContainer>
      </Header>
  );
}

export default Nav;
