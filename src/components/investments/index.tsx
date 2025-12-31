import useInvestments from '../../hooks/useInvestments';
import InvestmentCard from '../investment-card';
import { InvestmentsContainer } from './styled';

export default function InvestmentsList() {
  const { data, loading } = useInvestments();

  if (loading) return <div>Carregando investimentos...</div>;

  if (!data || data.length === 0) return <div>Nenhum investimento encontrado.</div>;

  return (
    <InvestmentsContainer>
      {data?.map((investment: any) => {
         console.log(investment);
         return (
           <InvestmentCard data={investment} />
         );
      })}
    </InvestmentsContainer>
  );
}
