import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import UserBlock from './user-block.tsx';
import { withHistory, withStore } from '../../../mocks/mock-components.tsx';
import { makeFakeUser } from '../../../mocks/mock.ts';
import { AuthorizationStatus, NameSpace } from '../../../const.ts';

describe('Component: UserBlock', () => {
  it('should render Sign in when user not authorized', () => {
    const withHistoryComponent = withHistory(<UserBlock />);

    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.User]: { authorizationStatus: AuthorizationStatus.NoAuth, user: null, error: false },
    });

    render(withStoreComponent);

    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  it('should render Sign out when user authorized', () => {
    const withHistoryComponent = withHistory(<UserBlock />);

    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.User]: { authorizationStatus: AuthorizationStatus.Auth, user: makeFakeUser(), error: false },
    });

    render(withStoreComponent);

    expect(screen.getByText('Sign out')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
