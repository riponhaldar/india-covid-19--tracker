import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Line, Bar } from 'react-chartjs-2'
import './barchat.css'
import Loading from '../../Loading'
// Animation

const BarChat = () => {
  const [chartData, setChartData] = useState({})
  const [chartDeath, setchartDeath] = useState({})
  const [chartReco, setchartReco] = useState({})
  const [loding, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const chart = async () => {
      let empDate = []
      let empConf = []
      let empDath = []
      let empReco = []
      await fetch('https://api.covid19india.org/data.json')
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch the data')
          }
          return res.json()
        })
        .then((data) => {
          const chart = data.cases_time_series
          var chek = chart.slice(1).slice(-100)

          for (const data of chek) {
            empDate.push(data.date)
            empConf.push(data.dailyconfirmed)
            empDath.push(data.dailydeceased)
            empReco.push(data.dailyrecovered)
          }
          setChartData({
            labels: empDate,
            type: 'bar',
            datasets: [
              {
                label: 'last 100Days Confrim',
                data: empConf,
                tension: 0.4,
                backgroundColor: ['rgb(0, 89, 255)'],
                borderColor: ['rgb(0, 89, 255)'],
                color: ['#000'],
                borderWidth: 1,
              },
            ],
          })
          setchartReco({
            labels: empDate,
            type: 'bar',
            datasets: [
              {
                label: 'last 100Days Recover',
                data: empReco,
                tension: 0.6,
                backgroundColor: [' rgb(0, 255, 34)'],
                borderColor: [' rgb(0, 255, 34)'],
                color: ['#000'],
                borderWidth: 1,
              },
            ],
          })
          setchartDeath({
            labels: empDate,
            type: 'bar',
            datasets: [
              {
                label: 'last 100Days Death',
                data: empDath,
                borderColor: ['red'],
                backgroundColor: ['red'],
                tension: 0.6,
                color: ['#000'],
                borderWidth: 1,
              },
            ],
          })

          setLoading(false)
        })
        .catch((err) => {
          setError(err.message)
        })
      setLoading(false)
    }

    chart()
  }, [])

  if (loding) {
    return (
      <main>
        {error && <div>{error}......</div>}
        <Loading />
      </main>
    )
  }

  return (
    <>
      <div className='chart-container'>
        <div className='chart'>
          <Bar
            data={chartData}
            // width={400}
            // height={200}
            options={{
              responsive: true,
              title: { text: 'daliy confrimd SCALE', display: true },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                      beginAtZero: true,
                    },
                    gridLines: {
                      display: false,
                    },
                  },
                ],
                xAxes: [
                  {
                    gridLines: {
                      display: false,
                    },
                  },
                ],
              },
            }}
          />
        </div>

        <div className='chart'>
          <Bar
            data={chartDeath}
            // width={400}
            // height={200}
            options={{
              responsive: true,
              title: { text: 'daliy confrimd SCALE', display: true },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                      beginAtZero: true,
                    },
                    gridLines: {
                      display: false,
                    },
                  },
                ],
                xAxes: [
                  {
                    gridLines: {
                      display: false,
                    },
                  },
                ],
              },
            }}
          />
        </div>

        <div className='chart'>
          <Bar
            data={chartReco}
            // width={400}
            // height={200}
            options={{
              responsive: true,
              title: { text: 'daliy confrimd SCALE', display: true },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                      beginAtZero: true,
                    },
                    gridLines: {
                      display: false,
                    },
                  },
                ],
                xAxes: [
                  {
                    gridLines: {
                      display: false,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    </>
  )
}

export default BarChat
