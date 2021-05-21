import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import DarkMode from '../Darkmode/DarkMode'
const Navbar = () => {
  return (
    <>
      <Logo>
        <h1>
          <em>COVID</em>-19 <span>LIVE </span>
        </h1>
        <div>
          <DarkMode />
        </div>
      </Logo>

      <Nav>
        <NavMenu>
          <NavItem>
            <NavLinks className='nav_link' to='/' data-text='Home'>
              India
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks className='nav_link' to='World'>
              World
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks className='nav_link' to='About' data-text='About'>
              About
            </NavLinks>
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar

export const Logo = styled.div`
  display: flex;
  margin: auto;
  position: relative;
  justify-content: center;
  h1 {
    text-align: center;
    font-size: 2%.5rem;
    /* color: blue; */
    color: #f13c3cc5;
    /* margin-top: 2rem; */
    padding-top: 2rem;
    padding-bottom: 0rem;
    em {
      /* color: rgb(90, 90, 90); */
      color: rgb(139, 140, 209);
    }
    span {
      color: rgb(194, 195, 219);
    }
  }
  div {
    position: absolute;
    right: 5%;
    top: 2rem;
  }
  @media screen and (max-width: 960px) {
    h1 {
      font-size: 1.5rem;
    }
    div {
      position: absolute;
      right: 5%;
      top: 1.5rem;
    }
  }
`
export const Nav = styled.nav`
  text-align: center;
  justify-content: center;
`
export const NavMenu = styled.ul`
  display: flex;
  padding: 20px;
  align-items: center;
  list-style: none;
  justify-content: center;
  text-align: center;
`
export const NavItem = styled.li`
  list-style: none;
  text-decoration: none;
  position: relative;
  padding-right: 4px;
  border-top: 1px solid blue;
  border-bottom: 1px solid blue;
`

export const NavLinks = styled(Link)`
  color: silver;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  margin-right: 10px;
  font-size: 1.3rem;
  color: rgb(139, 140, 209);

  @media screen and (max-width: 960px) {
    padding-right: 1rem;
    font-size: 1.2rem;
    padding: 0.6rem;
    margin-right: 5px;
  }
`
