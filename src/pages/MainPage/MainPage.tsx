
import { MainPageContainer } from "./styled";

import SideMenu from "../../components/side-menu";
import MainView from "../../components/main-view";

export default function MainPage() {

    return(
        <MainPageContainer>
            <SideMenu />
            <MainView />
        </MainPageContainer>
    )
};
