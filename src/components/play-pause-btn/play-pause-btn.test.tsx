import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import PlayPauseBtn from './play-pause-btn';

describe('Component: PauseButton', () => {
  it('should render correct', () => {
    const onClick = vi.fn;

    render(<PlayPauseBtn onClick={onClick} isPlaying />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
