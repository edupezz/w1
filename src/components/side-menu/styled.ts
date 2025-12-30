import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const SideMenuContainer = styled.section`
    min-height: 100vh;
    background-color: ${COLORS.SIDE_PANEL_PRIMARY};
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: ${COLORS.WHITE};
    padding-left: 24px;
    padding-right: 24px;
`