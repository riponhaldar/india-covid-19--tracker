import React, { useEffect, useState } from 'react'
import Loading from '../../Loading'
import './statewise.css'
const Statewise = () => {
  const [data, setData] = useState([])
  const [loding, setLoading] = useState(true)
  useEffect(() => {
    const getCovidData = async () => {
      const res = await fetch('https://api.covid19india.org/data.json')
      const covidata = await res.json()

      const short = covidata.statewise
      // console.log(short)
      // short.sort(function (a, b) {
      //   return b - a
      // })
      short.reverse()
      short.pop()
      setData(short)
      setLoading(false)
    }
    getCovidData()
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
      <table className='table'>
        <tr>
          <th>state </th>
          <th>confirmed</th>
          <th>active</th>
          <th>recovered</th>
          <th>deaths</th>
        </tr>

        <tbody>
          {data.map((curElem, ind) => {
            return (
              <tr>
                <td data-label='state'>{curElem.state}</td>
                <td data-label='confirmed'>
                  <span> +{curElem.deltaconfirmed}</span>
                  {curElem.confirmed}
                </td>
                <td data-label='active'>{curElem.active}</td>

                <td data-label='recovered'>
                  <span className='green'> +{curElem.deltarecovered}</span>
                  {curElem.recovered}
                </td>

                <td data-label='deaths'>
                  <span> +{curElem.deltadeaths}</span>
                  {curElem.deaths}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Statewise
