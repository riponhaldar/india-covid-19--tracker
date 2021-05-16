import React, { useEffect, useState } from 'react'
import './statewise.css'
const Statewise = () => {
  const [data, setData] = useState([])

  const getCovidData = async () => {
    const res = await fetch('https://api.covid19india.org/data.json')
    const covidata = await res.json()

    const short = covidata.statewise
    // console.log(short)
    short.sort(function (a, b) {
      return b - a
    })
    setData(short)
  }

  useEffect(() => {
    getCovidData()
  }, [])

  return (
    <>
      <div className='container'>
        <h1> INDIA COCID19</h1>
        <table className='table'>
          <tr>
            <th>state </th>
            <th>confirmed</th>
            <th>active</th>
            <th>recovered</th>
            <th>deathe</th>
          </tr>

          <tbody>
            {data.map((curElem, ind) => {
              return (
                <tr>
                  <td>{curElem.state}</td>
                  <td>
                    <span> +{curElem.deltaconfirmed}</span>
                    {curElem.confirmed}
                  </td>
                  <td>{curElem.active}</td>

                  <td>
                    <span className='green'> +{curElem.deltarecovered}</span>
                    {curElem.recovered}
                  </td>

                  <td>
                    <span> +{curElem.deltadeaths}</span>
                    {curElem.deaths}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Statewise