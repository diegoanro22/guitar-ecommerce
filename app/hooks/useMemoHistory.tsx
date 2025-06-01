import { useMemo } from 'react';
import { useNavigationHistory } from '@/app/contexts/HistoryContext';

import { guitars } from '@/app/data/guitars';

export const useRecommendations = () => {
  const { getHistory } = useNavigationHistory();
  const history = getHistory();

  const recommendations = useMemo(() => {
    return guitars.filter((product) => history.includes(product.id));
  }, [history]);

  return recommendations;
};
