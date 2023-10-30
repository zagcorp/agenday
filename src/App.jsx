import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

import './global.css'
import 'rsuite/dist/rsuite-no-reset.min.css';

export function App() {
  return (
    
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}