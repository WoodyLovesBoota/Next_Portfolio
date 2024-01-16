import Layout from "@/components/Layout";
import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import "./font.css";
import LoadingIndicator from "@/components/LoadingIndicator";

const App = ({ Component, pageProps }: AppProps) => {
  const client = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <Layout>
          <LoadingIndicator />
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
