import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'components/Theme/ChakraTheme';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <ChakraProvider theme={theme}>
        <NextNprogress
            color="#d90d9f"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
            options={{ showSpinner: false }}
          />
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
