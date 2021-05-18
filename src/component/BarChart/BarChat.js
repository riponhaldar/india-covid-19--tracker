import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Line, Bar } from 'react-chartjs-2'
import './barchat.css'
import Loading from '../../Loading'
// Animation

const BarChat = () => {
  const [chartData, setChartData] = useState({})
  const [chartDeath, setchartDeath] = useState({})
  const [loding, setLoading] = useState(true)
  const chart = () => {
    let empDate = []
    let empConf = []
    let empDath = []
    let empReco = []

    const fetchIems = async () => {
      const result = await axios('https://api.covid19india.org/data.json')

      const chart = result.data.cases_time_series

      // 'ARRAY 1: ' + arr1.slice(1).slice(-5) + '<br/>ARRAY 2: '
      var chek = chart.slice(1).slice(-14)
      console.log(chek)

      for (const data of chek) {
        empDate.push(data.date)
        empConf.push(data.dailyconfirmed)
        empDath.push(data.dailydeceased)
        empReco.push(data.dailyrecovered)
      }
      // for (const date of chart.cases_time_series) {
      //   empSal.push(date.date)
      //   empAge.push(date.dailyconfirmed)
      // }

      setChartData({
        labels: empDate,
        type: 'bar',
        datasets: [
          {
            label: 'last 14Days Confrim',
            data: empConf,
            tension: 0.4,
            backgroundColor: ['red'],
            borderColor: ['red'],
            color: ['#000'],
            borderWidth: 1,
          },
          {
            label: 'last 14Days recover',
            data: empReco,
            tension: 0.6,
            backgroundColor: ['green'],
            borderColor: ['green'],
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
            label: 'last 14Days death',
            data: empDath,
            borderColor: ['red'],
            backgroundColor: ['red'],
            tension: 0.6,
            color: ['#000'],
            borderWidth: 1,
          },
        ],
      })
    }

    fetchIems()
  }

  useEffect(() => {
    chart()
    setLoading(false)
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
      <div className='chart1'>
        <Line
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
      <div className='chart2'>
        <Line
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
    </>
  )
}

export default BarChat
