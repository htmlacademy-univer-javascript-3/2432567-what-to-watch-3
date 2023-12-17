import { render, screen } from '@testing-library/react';
import UnauthorizationUserBlock from './unauthorization-user-block';
import { withHistory } from '../../../mocks/mock-components';

describe('Component: UnauthorizationUserBlock', () => {
  it('render correctly', () => {
    const dataTestId = 'unauthorization-block';

    const preparedComponent = withHistory(<UnauthorizationUserBlock />);

    render(preparedComponent);

    expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
  });
});
