import React from 'react'
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import Home from './pages/Home'
import Productdetail from './pages/Productdetail'
import Manyproduct from './pages/Manyproduct'
import Storelocator from './pages/Storelocator'
import Search from './pages/Search'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
       <Route path='/ProductDetails' element={<Productdetail/>}></Route>
       <Route path='/Manyproduct' element={<Manyproduct/>}></Route>
       <Route path='/StoreLocator' element={<Storelocator/>}></Route>
       <Route path='/Search' element={<Search/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App