import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';

export function Router() {
    return(
        <Routes>
            <Route index element={<MainPage />}/>
        </Routes>
    )
}