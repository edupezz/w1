import { InvestmentCardContainer } from './styled';

export default function InvestmentCard(props: any) {

    console.log(props)

    return(
        <InvestmentCardContainer>
            {props.data.name}
        </InvestmentCardContainer>
    );
}