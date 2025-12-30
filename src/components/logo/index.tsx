import logo from '../../assets/logo.svg';
import { LogoContainer } from './styled';

export default function Logo() {

    return(
        <LogoContainer>
            <img src={logo} alt="W1 Consultoria" />
        </LogoContainer>
    );
}