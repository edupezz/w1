import useinvestmentestments from '../../hooks/useInvestments';
import InvestmentCard from '../investment-card';

export default function investmentestmentsList() {
  const { data, loading, error } = useinvestmentestments();

  if (loading) return <div>Carregando investmentestimentos...</div>;
  if (error) return <div>Erro ao carregar: {error.message}</div>;
  if (!data || data.length === 0) return <div>Nenhum investmentestimento encontrado.</div>;

  return (
    <div>
      {data?.map((investment: any) => (
        <InvestmentCard key={investment.id ?? investment.symbol ?? JSON.stringify(investment)}>
          <strong>{investment.name ?? investment.title ?? investment.symbol}</strong>
          <span> — {investment.value ?? investment.amount ?? '-'}</span>
        </InvestmentCard>
      ))}
    </div>
  );
}
