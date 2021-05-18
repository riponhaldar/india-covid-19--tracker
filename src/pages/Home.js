import React from 'react'
import Statewise from '../component/statewise/Statewise'
import Tryjs from '../component/totalData'
import BarChart from '../component/BarChart/BarChat'
const Home = () => {
  return (
    <>
      <div className='container'>
        <div className='Name'>
          <h1> COVID-19 INDIA</h1>
        </div>

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

export default Home
