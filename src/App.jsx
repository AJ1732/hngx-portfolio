import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import Layout from './components/Layout'
import Pages from './components/Pages'
// import Error from './components/Pages/Error'

function App() {

  return (
    <div className='min-h-screen bg-white-brown text-dark-brown'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Pages />} />
            {/* <Route path='/*' element={<Error />}/>  */}
          </Route>
          <Route path='/*' element={<Navigate to={`.`} />}/> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
