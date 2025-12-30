
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

        // Se quiser usar o token que você forneceu diretamente para testes, use:
        // setAuthToken('eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MTA2NTE1MCwicmVzb3VyY2VfdHlwZSI6IkNsaWVudCIsImNvbnN1bHRhbnRfaWQiOjkyOTcsImF1ZCI6ImNvbmNlcHQtYXBpIiwiZXhwIjoxNzY3MTA2MzczfQ.0uqQegZG9VCimTzfIu4AApIHFFKOe0uG73f6B1xv64o');
    }, []);

    return(
        <MainViewContainer>
            <BreadCrumb />
            <TopBar />
            <InvestmentsList />
        </MainViewContainer>
    )
}