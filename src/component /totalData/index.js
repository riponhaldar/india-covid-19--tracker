import React, { useEffect, useState } from 'react'
import './totalData.css'
const Tryjs = () => {
  const [data, setData] = useState([])

  const getCovidData = async () => {
    const res = await fetch('https://api.covid19india.org/data.json')
    // const res = await fetch(
    //   'https://api.covid19india.org/v4/min/timeseries.min.json'
    // )
    const covidata = await res.json()
    const slice = covidata.statewise[0]
    // console.log(slice)

    setData(slice)
  }

  useEffect(() => {
    getCovidData()
  }, [])
  
  return (
    <>
      <div className='container'>
        <div className='flex'>
          <div>
            <h3>active</h3>
            <h4>{data.active}</h4>
          </div>
          <div>
            <h3>confirmed</h3>
            <em>+{data.deltaconfirmed}</em>
            <h4>{data.confirmed}</h4>
          </div>
          <div>
            <h3>recovered</h3>
            <span>+{data.deltarecovered}</span>
            <h4>{data.recovered}</h4>
          </div>
          <div>
            <h3>deaths</h3>
            <em>+{data.deltadeaths} </em>
            <h4>{data.deaths}</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tryjs
