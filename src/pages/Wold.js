import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Loading from '../Loading'

const Wold = () => {
  const [worldChart, setWorldChart] = useState({})
  const [country, setCountry] = useState([])
  const [loading, setLoading] = useState({})
  useEffect(() => {
    const getCovidData = async () => {
      const res = await fetch('https://api.covid19api.com/summary')
      const covidata = await res.json()
      console.log(covidata)
      var golobal = covidata.Global

      var country = covidata.Countries

      setWorldChart(golobal)
      setLoading(false)
      setCountry(country)
    }
    getCovidData()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <>
      <div className='container'>
        <Name>
          <h1>
            COVID-19 <span>WORLD </span>
          </h1>
        </Name>

        <Header>
          <Header_row>
            <Covid_case>
              <p>
                Coronavirus <br /> Cases :
              </p>

              <span> {worldChart.TotalConfirmed}</span>
            </Covid_case>
            <Covid_case>
              <p>Deaths:</p>
              <h4> {worldChart.TotalDeaths}</h4>
            </Covid_case>
            <Covid_case>
              <p>Recovered:</p>
              <span> {worldChart.TotalRecovered} </span>
            </Covid_case>
          </Header_row>
        </Header>
        <World_container>
          <Table_container>
            <Table>
              <tr>
                <th>Country </th>
                <th>Total Cases</th>
                <th>Total Deaths</th>
                <th>Total Recovered</th>
              </tr>

              <tbody>
                {country.map((coun, ind) => {
                  return (
                    <tr>
                      <td>{coun.Country}</td>
                      <td>{coun.TotalConfirmed}</td>
                      <td>{coun.TotalDeaths}</td>
                      <td>{coun.TotalRecovered}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Table_container>
          <Chart_contaner></Chart_contaner>
        </World_container>
      </div>
    </>
  )
}

export default Wold

export const World_container = styled.div`
  /* margin-top: 4rem;
  display: flex;
  width: 100%; */
  @media screen and (max-width: 960px) {
    /* flex-wrap: wrap;
    width: 100%;
    flex-direction: column-reverse; */
  }
`

export const Chart_contaner = styled.div`
  /* width: 100%;
  h3 {
    text-align: center;
    color: #fff;
    padding-bottom: 10px;
  } */
`
export const Name = styled.div`
  h1 {
    text-align: center;
    font-size: 1.9rem;
    color: rgb(90, 90, 90);
    /* margin-top: 2rem; */
    padding-top: 2rem;

    span {
      color: blue;
    }
  }
  @media screen and (max-width: 960px) {
    h1 {
      text-align: center;
      font-size: 1.5rem;
      color: rgb(90, 90, 90);
      /* margin-top: 2rem; */
      padding-top: 2rem;
    }
  }
`
export const Header = styled.div`
  margin-top: 2rem;
  justify-content: center;
`
export const Header_row = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 960px) {
    width: 100%;
    flex-wrap: wrap;
  }
`
export const Covid_case = styled.div`
  padding: 40px 50px;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px;
  position: relative;
  box-shadow: 3px 10px 15px 1px rgba(0, 0, 0, 0.3);
  /* background-color: #fff; */
  margin-right: 1rem;
  p {
    color: rgb(160, 160, 160);
    font-size: 1.4rem;
    padding-bottom: 30px;
    text-align: center;
    font-weight: 600;
    justify-content: center;
  }
  span {
    color: rgb(0, 89, 255);
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-weight: 600;
    padding-top: 10px;
  }
  h4 {
    color: #f13c3cc5;
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-weight: 600;
    padding-top: 10px;
    text-align: center;
  }
  @media screen and (max-width: 960px) {
    padding: 10px 50px;
    cursor: pointer;
    margin-bottom: 0px;
    position: relative;
    box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0);
    /* background-color: #fff; */
    margin-right: 1rem;
    text-align: center;
    p {
      font-size: 1.2rem;
      padding-bottom: 5px;
    }
  }
`
export const Table_container = styled.div`
  margin: auto;
  margin-top: 2rem;
  display: flex;
  width: 100%;
  padding: 0px;
  justify-content: center;
  /* color: rgb(90, 90, 90); */
  color: rgb(139, 140, 209);
`
export const Table = styled.table`
  th {
    position: sticky;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 5px 5px 5px 5px;
    text-align: left;
    background-color: #000;
    color: rgb(194, 195, 219);
  }
  td,
  th {
    border-bottom: 1px solid rgb(88, 88, 88);
    padding: 8px;
    border-radius: 5px 5px 5px 5px;
    font-weight: 600;

    font-size: 1.4rem;
  }
  @media screen and (max-width: 960px) {
    th {
      padding-top: 12px;
    }
    td,
    th {
      border-bottom: 1px solid rgb(88, 88, 88);
      padding: 2px;

      font-weight: 600;

      font-size: 0.9rem;
    }
  }
`
