import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './views/HomePage'
import Services from './views/Services'
import Work from './views/Work'
import About from './views/About'
import Blog from './views/Blog'
import Contact from './views/Contact'
import ProjectView from './views/projects/ProjectView'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={ <HomePage/> } />
            <Route path='/services' element={ <Services /> } />
            <Route path='/work' element={ <Work /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/blog' element={ <Blog /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path="/projectview/:id" element={<ProjectView />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}


export default App