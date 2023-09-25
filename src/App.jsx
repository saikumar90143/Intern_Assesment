
import './App.css'
import Products from './Products'
import { Route,Routes } from 'react-router-dom'
import SingleProducts from './SingleProducts'

function App() {
  
  return (
    <>
     <div className='App'>
         <Routes>
        <Route path='/' element={<Products/>}/> 
          <Route path='/product/:id' element={<SingleProducts/>}/>
         </Routes>
     </div>
    </>
  )
}

export default App
