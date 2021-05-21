import React, { useEffect, useState } from 'react'
import Loading from '../../Loading'
import './statewise.css'

const Statewise = () => {
  const [data, setData] = useState([])
  const [loding, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getCovidData = async () => {
      await fetch('https://api.covid19india.org/data.json')
        .then((res) => {
          // console.log(res)
          if (!res.ok) {
            throw Error('could not fetch the data')
          }
          return res.json()
        })
        .then((data) => {
          // console.log(data)
          const short = data.statewise
          short.reverse()
          short.pop()
          // console.log(short)
          setData(short)
          setLoading(false)
          setError(null)
        })
        .catch((err) => {
          setError(err.message)
        })
    }
    getCovidData()
  }, [])

  if (loding) {
    return (
      <main>
        {error && <p>{error}......</p>}
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
                <td data-label='State'>{curElem.state}</td>
                <td data-label='Confirmed'>
                  <span> +{curElem.deltaconfirmed}</span>
                  {curElem.confirmed}
                </td>
                <td data-label='Active'>{curElem.active}</td>

                <td data-label='Recovered'>
                  <span className='green'> +{curElem.deltarecovered}</span>
                  {curElem.recovered}
                </td>

                <td data-label='Deaths'>
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
