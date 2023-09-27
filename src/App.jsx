import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
                <Route path='/' element={(LandingPAge)}/>
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
