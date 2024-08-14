import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider } from './components/LanguageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,  
)
