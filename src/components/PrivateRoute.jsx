import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export function PrivateRoute({ children, ...routeProps }) {
  const profile = false;
  if (!profile) {
    return <Redirect to="/signin" />;
  }
  return <Route {...routeProps}>{children}</Route>;
}
