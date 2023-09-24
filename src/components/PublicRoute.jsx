import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export function PublicRoute({ children, ...routeProps }) {
  const profile = false;
  if (profile) {
    return <Redirect to="/" />;
  }
  return <Route {...routeProps}>{children}</Route>;
}
