import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <>

<QueryClientProvider client={queryClient}>
<ToastContainer/>
        <App />
    </QueryClientProvider>
  
    </>

)
