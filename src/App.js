import BarChat from './component /BarChart/BarChat'
import Footer from './component /Footer'
import Statewise from './component /statewise/Statewise'
import StateData from './component /statewise2/StateData'
import Tryjs from './component /totalData'

function App() {
  return (
    <>
      <div className='bg-img'></div>
      <h1> COVID19INDIA</h1>
      <Tryjs />

      <div className='row'>
        <Statewise />
        <StateData />
      </div>
      <Footer />
    </>
  )
}

export default App
