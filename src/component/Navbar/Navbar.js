import React from 'react'
import './navbar.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <Logo>
        <h1>
          <em>COVID</em>-19 <span>LIVE </span>
        </h1>
        <p>API</p>
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
  text-align: center;
  font-size: 1.9rem;
  color: blue;
  /* margin-top: 2rem; */
  padding-top: 2rem;
  em {
    color: rgb(90, 90, 90);
  }
  span {
    color: red;
  }
  @media screen and (max-width: 960px) {
    font-size: 1.1rem;
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
  color: rgb(90, 90, 90);

  @media screen and (max-width: 960px) {
    padding-right: 1rem;
    font-size: 1.2rem;
    padding: 0.6rem;
    margin-right: 5px;
  }
`
