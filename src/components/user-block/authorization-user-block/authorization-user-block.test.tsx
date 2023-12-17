import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../../mocks/mock-components';
import AuthorizationUserBlock from './authorization-user-block';
import { makeFakeStore } from '../../../mocks/mock';

describe('Component: AuthorizationUserBlock', () => {
  it('render correctly', () => {
    const dataTestId = 'authorization-block';

    const withHistoryComponent = withHistory(<AuthorizationUserBlock />);

    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText('Sign out')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
  });
});
