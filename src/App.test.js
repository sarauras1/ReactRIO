import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from './App';

test('full app rendering/navigating', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  // check if Home component is rendered by default
  expect(screen.getByText(/home component content/i)).toBeInTheDocument();
  // navigate to /shop route
  history.push('/shop/*');
  // check if Shop component is rendered
  expect(screen.getByText(/shop component content/i)).toBeInTheDocument();

  // navigate to /auth route
  history.push('/auth');
  // check if SignIn component is rendered
  expect(screen.getByText(/auth component content/i)).toBeInTheDocument();
   // navigate to /checkout route
   history.push('/checkout');
   // check if SignIn component is rendered
   expect(screen.getByText(/checkout component content/i)).toBeInTheDocument();
});
