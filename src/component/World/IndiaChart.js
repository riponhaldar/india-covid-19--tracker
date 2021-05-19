import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'

import Loading from '../../Loading'
// Animation

const BarChat = () => {
  const [chartData, setChartData] = useState({})
  const [chartDeath, setchartDeath] = useState({})
  const [chartReco, setchartReco] = useState({})
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
      var chek = chart.slice(1).slice(-7)
      // console.log(chek)

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

      setchartReco({
        labels: empDate,
        type: 'bar',
        datasets: [
          {
            label: 'last 7Days Recover',
            data: empReco,
            tension: 0.6,
            backgroundColor: [' rgb(0, 255, 34)'],
            borderColor: [' rgb(0, 255, 34)'],
            color: ['#000'],
            borderWidth: 1,
          },
          {
            label: 'last 7Days Confrim',
            data: empConf,
            tension: 0.4,
            backgroundColor: ['rgb(0, 89, 255)'],
            borderColor: ['rgb(0, 89, 255)'],
            color: ['#000'],
            borderWidth: 1,
          },
          {
            label: 'last 7Days Death',
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
      <div className='chart-container'>
        <div className='chart1'>
          <h3>India chart</h3>
          <Line
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
        {/* <div className='chart2'>
          <Line
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
        </div> */}

        {/* <div className='chart3'>
          <Line
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
        </div> */}
      </div>
    </>
  )
}

export default BarChat
