import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
import Plot from 'react-plotly.js'
import Loading from '../../Loading'
// import Statewise from '../statewise/Statewise'
const StateData = () => {
  const [items, setItems] = useState([])
  const [tested, setTested] = useState([])
  const [loding, setLoading] = useState(true)
  // const [chart, setChart] = useState([])
  // const [isloading, setisLoading] = useState(ture)

  useEffect(() => {
    const fetchIems = async () => {
      const result = await axios('https://api.covid19india.org/data.json')
      console.log(result.data)
      const short = result.data.cases_time_series
      // short.sort(function (a, b) {
      //   return b - a
      // })
      short.reverse()
      setItems(short)
    }
    fetchIems()
  }, [])
  // chart start
  // useEffect(() => {
  //   const fetchIems = async () => {
  //     const result = await axios('https://api.covid19india.org/data.json')
  //     console.log(result.data)
  //     const chart = result.data.cases_time_series
  //     // short.sort(function (a, b) {
  //     //   return b - a
  //     // })

  //     setChart(chart)
  //     console.log(chart)
  //   }
  //   fetchIems()
  // }, [])

  // tested start
  useEffect(() => {
    const fetchIems = async () => {
      const result = await axios('https://api.covid19india.org/data.json')
      console.log(result.data)
      const tested = result.data.tested
      // short.sort(function (a, b) {
      //   return b - a
      // })
      tested.reverse()
      tested.splice(1, 432)
      setTested(tested)
      setLoading(false)
    }
    fetchIems()
  }, [])

  if (loding) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <>
      <div className='right'>
        <div className='tested-container'>
          {tested.map((test, ind) => {
            return (
              <div className='tested'>
                <p>India</p>
                <p>
                  <em>Tested</em>
                  <br />
                  <span>{test.totalsamplestested}</span>
                  <br />
                  <span>{test.testedasof}</span>
                </p>
              </div>
            )
          })}
        </div>
        <div className='table-hide'>
          <table className='table-light'>
            <tr>
              <th>date</th>
              <th> daily confirmed</th>
              <th>daily death</th>
            </tr>
            <tbody>
              {items.map((item, ind) => {
                return (
                  <tr>
                    <td>{item.date}</td>
                    <td>{item.dailyconfirmed}</td>
                    <td>{item.dailydeceased}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className='barchat'>
          {/* <Plot
            className='chart'
            data={[
              {
                x: chart.map((chart) => chart.date),
                y: chart.map((chart) => chart.totalconfirmed),
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
                x: chart.map((chart) => chart.date),
                y: chart.map((chart) => chart.totaldeceased),
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
          /> */}
        </div>
      </div>
    </>
  )
}

export default StateData
