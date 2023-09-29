import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { UserContextProvider } from './constants/UserContext'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import LandingPage from './pages/Landingpage/LandingPage'
import SearchResults from './pages/Searchingpage/SeachResults'
import Booking from './pages/booking/Booking'
import Login from './component/login/Login'
import Signup from './component/register/Signup'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <UserContextProvider>
          <BrowserRouter>
            <div className='contrainer'>
              <Navbar />
              <Routes >
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/results/:searchTerm' element={<SearchResults />} />
                <Route path='/reservation' element={<Booking />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
{/*                 <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/update-profile' element={<UpdateProfile />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/profile/:username' element={<Profile />} />
                <Route path='/post/:postId' element={<Post />} />
                <Route path='/404' element={<NotFound />} />
                <Route path='*' element={<Navigate to='/404' />} /> */}
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
         </UserContextProvider>
      </div>
    </>
  )
}

export default App
