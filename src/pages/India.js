import React from 'react'
import Statewise from '../component/statewise/Statewise'
import Tryjs from '../component/totalData'
import styled from 'styled-components'
import BarChart from '../component/BarChart/BarChat'
const India = () => {
  return (
    <>
      <div className='container'>
        <Name>
          <h1>
            COVID-19 <span>INDIA </span>
          </h1>
        </Name>

        <Tryjs />
        <div className='row'>
          <div className='left '>
            <Statewise />
          </div>
          <div className='right'>
            <BarChart />
          </div>
        </div>
      </div>
    </>
  )
}

export default India
export const Name = styled.div`
  h1 {
    text-align: center;
    font-size: 1.9rem;
    color: rgb(90, 90, 90);
    /* margin-top: 2rem; */
    padding-top: 2rem;
    span {
      color: blue;
    }
  }
  @media screen and (max-width: 960px) {
    h1 {
      text-align: center;
      font-size: 1.5rem;
      color: rgb(90, 90, 90);
      /* margin-top: 2rem; */
      padding-top: 2rem;
    }
  }
`
