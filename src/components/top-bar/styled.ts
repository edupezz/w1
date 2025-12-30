import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const TopBarContainer = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;

    div {
        display: flex;
        align-items: center;
    }
`

export const LeftButtonsContainer = styled.div`

    display: flex;
    gap: 8px;

    >div:first-child {
        display: flex;
        flex-direction: column;
        background-color: ${COLORS.RIGHT_INVESTMENTS_BUTTON};
        padding: 1.6rem 3.2rem;
        border-radius: 8px;
    }

    div:last-child{
        background-color: ${COLORS.RIGHT_ADD_INVESTMENT_BUTTON};
        color: ${COLORS.WHITE};
        padding: 1.2rem 2.4rem;
        height: 100%;
        border-radius: 8px;

        span:first-child{
            span:first-child{
                margin-right: 1.6rem;
                font-weight: 700;
                font-size: 3rem;
            }
        }
    }
`