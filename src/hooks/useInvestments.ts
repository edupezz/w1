import { useEffect, useState } from 'react';
import { getInvestments } from '../api/investments';

export default function useInvestments() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    getInvestments({ signal: controller.signal as any })
      .then((data) => setData(data.investments))
      .catch((err: any) => {
        if (err?.name === 'CanceledError' || err?.name === 'AbortError') return;
        setError(err);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { data, loading, error };
}
