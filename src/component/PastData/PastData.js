import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
import Loading from '../../Loading'
const PastData = () => {
  const [items, setItems] = useState([])

  const [loding, setLoading] = useState(true)

  useEffect(() => {
    const fetchIems = async () => {
      const result = await axios('https://api.covid19india.org/data.json')

      const short = result.data.cases_time_series

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
      <div className='pastdata'>
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
                <td>
                  <em> {items.dailyconfirmed}</em>
                </td>
                <td>
                  <span>{items.dailydeceased}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default PastData
