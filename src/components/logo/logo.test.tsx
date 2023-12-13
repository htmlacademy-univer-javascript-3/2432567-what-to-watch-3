import { render, screen } from '@testing-library/react';
import HeaderLogo from './logo';
import { withHistory } from '../../mocks/mock-components';

describe('Component: HeaderLogo', () => {
  it('render correctly', () => {
    const expectedLogoLetterW = 'W';
    const expectedLogoLetterT = 'T';

    const preparedComponent = withHistory(<HeaderLogo />);

    render(preparedComponent);

    screen.getAllByText(expectedLogoLetterW).forEach((logoLetterW) => {
      expect(logoLetterW).toBeInTheDocument();
    });
    expect(screen.getByText(expectedLogoLetterT)).toBeInTheDocument();
  });
});
