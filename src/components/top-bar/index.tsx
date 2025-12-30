import { TopBarContainer, LeftButtonsContainer } from "./styled";

import left_arrow from '../../assets/left_arrow.svg';

export default function TopBar(){

    return(
        <TopBarContainer>
            <div>
                <img src={left_arrow} alt="" /><span>Investimentos</span>
            </div>
            <LeftButtonsContainer>
                <div>
                    <span>Investimentos(5)</span>
                    <span>R$25.000,00</span>
                </div>
                <div>
                    <span>
                        <span>+</span>
                        <span>Adicionar Investimento</span>
                    </span>
                </div>
            </LeftButtonsContainer>
        </TopBarContainer>
    );
}