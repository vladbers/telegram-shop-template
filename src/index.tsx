import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/* Theme */
import { ThemeProvider } from 'styled-components';
import { theme } from 'commons/style/theme';
import GlobalStyle from 'commons/style/global-style';

/* Context Providers */
import { ProductsProvider } from 'contexts/products-context';
import { CartProvider } from 'contexts/cart-context';

import App from 'components/App';

const root = document.getElementById('root')!;
const container = createRoot(root);

container.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </ThemeProvider>
  </StrictMode>
);
