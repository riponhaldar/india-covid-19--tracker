import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'

import Loading from '../../Loading'
import BarChat from '../BarChart/BarChat'
// import Statewise from '../statewise/Statewise'
const StateData = () => {
  const [items, setItems] = useState([])

  const [loding, setLoading] = useState(true)

  useEffect(() => {
    const fetchIems = async () => {
      const result = await axios('https://api.covid19india.org/data.json')

      const short = result.data.cases_time_series
      // short.sort(function (a, b) {
      //   return b - a
      // })
      // short.reverse()
      var lastItem = short.length - 1
      var theLastOne = short[lastItem]

      setItems(theLastOne)
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
        <div className='table-hide'>
          <table className='table-light'>
            <tr>
              <th>date</th>
              <th> daily confirmed</th>
              <th>daily death</th>
            </tr>
            <tbody>
              <tr>
                <td> {items.date}</td>
                <td> {items.dailyconfirmed}</td>
                <td> {items.dailydeceased}</td>
              </tr>
              {/* {items.map((item, ind) => {
                return (
                  <tr>
                    <td>{item.date}</td>
                    <td>{item.dailyconfirmed}</td>
                    <td>{item.dailydeceased}</td>
                  </tr>
                )
              })} */}
            </tbody>
          </table>
        </div>
        <div className='barchat'>
          {' '}
          <BarChat />
        </div>
      </div>
    </>
  )
}

export default StateData
