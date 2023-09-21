import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "^configs/queryClient.ts";
import ModalProvider from "^components/ModalProvider";
import './index.css'

import './custom.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ModalProvider>
            <App />
        </ModalProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
