import { useEffect, useState } from 'react';

const usePromise = <T>(fetcher: () => Promise<T>) => {
  const [state, setState] = useState<T | null>(null);

  useEffect(() => {
    fetcher().then(setState).catch(console.warn);
  }, []);

  return state;
};

export default usePromise;
