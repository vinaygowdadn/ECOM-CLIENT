import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from './components/ui/sonner'


createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
      <App />
      <Toaster richColors/>
    </BrowserRouter>
 ,
)
