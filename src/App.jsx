import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import AuthPage from './pages/auth';
import Navbar from './components/navbar';
import Dashboard from './pages/dashboard';
import CreateNew from './pages/create-new';
import { createContext, useState } from 'react';
import { useSelector } from 'react-redux';

export const userContext = createContext();

const App = () => {

  const defaultName = useSelector(state => state.user.name) || ''
  const defaultEmail = useSelector(state => state.user.email) || ''

  const [userDetails, setUserDetails] = useState({
    'name': 'John Doe',
    'email': 'john@gmail.com',
    'phone': '+91 9876543210',
    'address': '123 Main Street, New Delhi',
    'jobTitle': 'Full Stack Web Developer',
    'links': {
      'github': '#',
      'linkedIn': '#',
      'x': '#',
    },
    'education': [
    ],
    'experience': [
    ],
    'skillset': {
        'languages': '',
        'libraries': '',
        'tools': '',
        'databases': ''
      },
    'projects': [
      {
        'title': '',
        'technologyUsed': '',
        'link': '',
        'description': ``
      }
    ]
  })

  return (
    <userContext.Provider value={{ userDetails: userDetails, setUserDetails: setUserDetails }}>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<AuthPage />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='create/new' element={<CreateNew />} />
          </Route>
        </Routes>
      </Router>
    </userContext.Provider>
  )
}

export default App
