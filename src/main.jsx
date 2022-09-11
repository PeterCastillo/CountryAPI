import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Seccion from './components/Secction/Seccion';
import CountryDetails from './routes/CountryDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route index element={<Seccion/>}/>
                <Route path='country/:id' element={<CountryDetails/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)