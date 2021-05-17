import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Plot from 'react-plotly.js'
import Statewise from '../statewise/Statewise'
const StateData = () => {
  const [items, setItems] = useState([])
  // const [isloading, setisLoading] = useState(ture)

  useEffect(() => {
    const fetchIems = async () => {
      const result = await axios('https://api.covid19india.org/data.json')
      console.log(result.data.cases_time_series)
      const short = result.data.cases_time_series
      setItems(short)
      console.log(short)
    }
    fetchIems()
  }, [])

  return (
    <>
      <div className='barchat'>
        <Plot
          className='chart'
          data={[
            {
              x: items.map((item) => item.date),
              y: items.map((item) => item.dailyconfirmed),
              type: 'bar',
              // level: 'High Temperature F',

              // mode: 'lines+markers',
              marker: { color: 'silver' },
            },
          ]}
          layout={{
            // width: 820,
            // height: 600,
            title: 'Daly confrimed ',
          }}
        />
        <Plot
          className='chart'
          data={[
            {
              x: items.map((item) => item.date),
              y: items.map((item) => item.dailydeceased),
              type: 'bar',
              trace: 'deat',
              // mode: 'lines+markers',
              marker: { color: 'Darkgrey' },
            },
          ]}
          layout={{
            // width: 820,
            // height: 600,
            title: 'Daly Death',
          }}
        />
      </div>
    </>
  )
}

export default StateData
