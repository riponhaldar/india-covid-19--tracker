import React from 'react'
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <p>We stand with everyone fighting on the frontlines</p>
        <ul>
          <a href='https://github.com/riponhaldar'>
            <li>
              <AiFillGithub />
            </li>
          </a>
          <a href='https://twitter.com/RipHaldar'>
            <li>
              <AiOutlineTwitter />
            </li>
          </a>
          <a href='https://www.linkedin.com/in/riponhaldar'>
            <li>
              <AiFillLinkedin />
            </li>
          </a>
        </ul>
      </div>
    </>
  )
}

export default Footer
