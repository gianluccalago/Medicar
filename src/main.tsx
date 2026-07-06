import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
// Fallback: Montserrat (grotesca geométrica próxima da Galano Grotesque Alt).
// Quando os arquivos licenciados da Galano forem colocados em public/fonts/,
// os @font-face em index.css assumem automaticamente (ver public/fonts/README).
import '@fontsource-variable/montserrat/index.css'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
