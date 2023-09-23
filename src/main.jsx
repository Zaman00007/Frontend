import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navigation from './components/Navigation'
import HeroSection from './components/Hero';
// import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <Navigation/>
      <HeroSection/>
    </div>
  </React.StrictMode>,
)
