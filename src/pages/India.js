import React from 'react'
import Statewise from '../component/statewise/Statewise'
import styled from 'styled-components'
import BarChart from '../component/BarChart/BarChat'
import TotalData from '../component/totalData/TotalData'
const India = () => {
  return (
    <>
      <div className='container'>
        <Name>
          <h1>
            COVID-19 <span>INDIA </span>
          </h1>
        </Name>

        <TotalData />
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
