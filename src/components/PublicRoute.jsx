import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useProfile } from '../context/profile.context';
import { Container, Loader } from 'rsuite';

export function PublicRoute({ children, ...routeProps }) {
  const { profile, isLoading } = useProfile();

  if (isLoading && !profile) {
    return (
      <Container>
        <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
    );
  }

  if (profile && !isLoading) {
    return <Redirect to="/signin" />;
  }

  return <Route {...routeProps}>{children}</Route>;
}
