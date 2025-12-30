import nossoconceito from '../../assets/nosso-conceito.svg';
import sair from '../../assets/sair.svg';
import { BottomInformationContainer, UnitContainer } from './styles';

export default function BottomInformation() {
    return(
        <BottomInformationContainer>
            <UnitContainer>
                <img src={nossoconceito} alt=" " />
                <span>Nosso Conceito</span>
            </UnitContainer>
            <UnitContainer>
                <img src={sair} alt="Sair" />
                <span>Sair</span>
            </UnitContainer>
        </BottomInformationContainer>
    );
}