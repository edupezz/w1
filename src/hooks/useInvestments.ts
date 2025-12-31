import { useEffect, useState } from 'react';
import { getInvestments } from '../api/investments';
import { INVESTMENTS_MOCK } from '../utils/mocks/investmentsMock';

export default function useInvestments() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    getInvestments({ signal: controller.signal as any })
      .then((response) => {
        const investments = response?.investments ?? response ?? [];

        if (Array.isArray(investments)) { 
            setData(investments)
        }
        else setData([]);
      })
      .catch((err: any) => {
        if (err?.name === 'CanceledError' || err?.name === 'AbortError') return;
        setError(err);
        setData(INVESTMENTS_MOCK.investments);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { data, loading, error };
}
