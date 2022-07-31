import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import { theme } from './styles/theme';
import { client } from './lib/apollo';
import './styles/global.css';
import { SidebarProvider } from './contexts/SidebarContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
