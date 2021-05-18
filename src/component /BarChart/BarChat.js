import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'
import './barchat.css'
const BarChat = () => {
  const [chartData, setChartData] = useState({})
  const [chartDeath, setchartDeath] = useState({})

  const chart = () => {
    let empSal = []
    let empAge = []
    let empDath = []

    const fetchIems = async () => {
      const result = await axios('https://api.covid19india.org/data.json')

      const chart = result.data.cases_time_series

      // 'ARRAY 1: ' + arr1.slice(1).slice(-5) + '<br/>ARRAY 2: '
      var chek = chart.slice(1).slice(-50)
      console.log(chek)

      for (const data of chek) {
        empSal.push(data.date)
        empAge.push(data.dailyconfirmed)
        empDath.push(data.dailydeceased)
      }
      // for (const date of chart.cases_time_series) {
      //   empSal.push(date.date)
      //   empAge.push(date.dailyconfirmed)
      // }
      setChartData({
        labels: empSal,
        type: 'bar',
        datasets: [
          {
            label: 'last 50Days Confrim',
            data: empAge,
            backgroundColor: ['#cad2ff'],
            borderColor: ['#cad2ff'],
            color: ['#000'],
            height: [900],
            borderWidth: 1,
          },
        ],
      })
      setchartDeath({
        labels: empSal,
        type: 'bar',
        datasets: [
          {
            label: 'last 50Days death',
            data: empDath,
            backgroundColor: ['red'],
            borderColor: ['red'],
            color: ['#000'],
            height: [900],
            borderWidth: 1,
          },
        ],
      })
    }

    fetchIems()
  }

  useEffect(() => {
    chart()
  }, [])

  return (
    <>
      <div className='barchat-chart'>
        <Bar
          data={chartData}
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
        <Bar
          data={chartDeath}
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
