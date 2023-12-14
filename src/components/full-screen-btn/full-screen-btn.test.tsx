import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FullScreenBtn from './full-screen-btn';

describe('Component: FullScreenButton', () => {
  it('should render correct', () => {
    const onClick = vi.fn;

    render(<FullScreenBtn onClick={onClick} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Full screen')).toBeInTheDocument();
  });
});
