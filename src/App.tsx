import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ProductsInCartProvider } from './contexts/CartContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProductsInCartProvider>
          <GlobalStyle />
          <Router />
        </ProductsInCartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
