
import { SideMenuContainer } from './styled';
import Navigation from '../navigation';
import Logo from '../logo';
import BottomInformation from '../bottom-information';

export default function SideMenu(){

    return(
        <SideMenuContainer>
            <Logo />
            <Navigation />
            <BottomInformation />
        </SideMenuContainer>
    )
}