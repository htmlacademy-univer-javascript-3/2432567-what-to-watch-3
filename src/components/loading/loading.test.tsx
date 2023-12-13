import { render, screen } from '@testing-library/react';
import Loading from './loading';
import { withHistory } from '../../mocks/mock-components';

describe('Component: Spinner', () => {
  it('render correctly', () => {
    const dataTestIdForLoading = 'loading';

    const preparedComponent = withHistory(<Loading />);

    render(preparedComponent);

    expect(screen.getByTestId(dataTestIdForLoading)).toBeInTheDocument();
  });
});
