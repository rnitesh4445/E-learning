import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CookiesProvider } from 'react-cookie';
import Index from './component/Route';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CookiesProvider>
        <Index/>
    </CookiesProvider>
  </StrictMode>
);
