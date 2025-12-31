
import { MainViewContainer } from './styled'
import { useEffect } from 'react';
import BreadCrumb from "../breadcrumb";
import TopBar from "../top-bar";
import InvestmentsList from "../investments";
import { setAuthToken } from '../../api/api';

export default function MainView(){

    useEffect(() => {
        const tokenFromStorage = localStorage.getItem('authToken');
        if (tokenFromStorage) setAuthToken(tokenFromStorage);
    }, []);

    return(
        <MainViewContainer>
            <BreadCrumb />
            <TopBar />
            <InvestmentsList />
        </MainViewContainer>
    )
}