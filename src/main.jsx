import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import ShopContextProvider from './context/ShopContext.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
createRoot(document.getElementById('root')).render(
<BrowserRouter>
<ShopContextProvider>
    
        <App/>
       
  </ShopContextProvider>

</BrowserRouter>
)
