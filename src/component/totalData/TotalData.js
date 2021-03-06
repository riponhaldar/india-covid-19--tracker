import React, { useEffect, useState } from 'react'
import './totalData.css'
const TotalData = () => {
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
      <div className='flex'>
        <div className='card'>
          <h3>ActiveCase</h3>
          <p>{data.active}</p>
        </div>
        <div className='card card-img'>
          {/* <div className='card-img'> </div> */}
          <h3>Confirmed</h3>
          <em>+{data.deltaconfirmed}</em>
          <p>{data.confirmed}</p>
        </div>

        <div className='card'>
          <h3>Recovered</h3>
          <span>+{data.deltarecovered}</span>
          <p>{data.recovered}</p>
        </div>
        <div className='card'>
          <h3>TotalDeath</h3>
          <em>+{data.deltadeaths} </em>
          <p>{data.deaths}</p>
        </div>
      </div>
    </>
  )
}

export default TotalData
