import { useMemo } from "react";
import { useSearchParams, useParams } from "react-router-dom";

export const useRoute = () => {
  const [searchParams] = useSearchParams();
  const query = useMemo(() => {
    return Object.fromEntries(searchParams.entries());
  }, [searchParams]);
  const params = useParams();
  return {
    query,
    params,
  };
};
