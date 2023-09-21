import { QueryClient } from '@tanstack/react-query';
import {DEFAULT_STALE_TIME} from "^configs/common.ts";

const baseQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: DEFAULT_STALE_TIME,
      useErrorBoundary: true,
    },
  },
});

export default baseQueryClient;
