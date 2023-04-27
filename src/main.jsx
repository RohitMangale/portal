import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import ContactUs from './routes/ContactUs'
import Drone from './routes/Drone'
import Industry from './routes/Industry'
import Mentors from './routes/Mentors'
import Students from './routes/Students'
import Form from './routes/Form'
import FAQS from './routes/FAQS'
import CurriculumPage from './routes/CurriculumPage'
import Rules from './routes/Rules'
import Store from './routes/Store'
import ProductCart from './routes/ProductCart'

import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import Startup from './routes/Startup'
import Investor from './routes/Investor'
import Founder from './routes/Founder'
import StartProfile from './routes/StartProfile'



ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<App/>} />
     <Route path='/students' element={<Students/>} />
     <Route path='/industry' element={<Industry/>} />
     <Route path='/mentors' element={<Mentors/>} />
     <Route path='/drone' element={<Drone/>} />
     <Route path='/faqs' element={<FAQS/>} />
     <Route path='/startup' element={<Startup/>} />
     <Route path='/startuppro' element={<StartProfile/>} />
     <Route path='/store' element={<Store/>} />
     <Route path='/investor' element={<Investor/>} />
     <Route path='/founder' element={<Founder/>} />
     <Route path='/productcart' element={<ProductCart/>} />
     <Route path='/form' element={<Form/>} />
     <Route path='/contactus' element={<ContactUs/>} />
     <Route path='/curriculumpage' element={<CurriculumPage/>} />
     <Route path='/rules' element={<Rules/>} />
    </Routes>
   </BrowserRouter>

)
