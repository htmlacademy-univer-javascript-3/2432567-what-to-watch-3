import { describe, expect } from 'vitest';
import { music } from 'faker';
import { render, screen } from '@testing-library/react';
import { withStore } from '../../mocks/mock-components.tsx';
import userEvent from '@testing-library/user-event';
import GenreLink from './genre-link.tsx';
import { makeFakeStore } from '../../mocks/mock.ts';

describe('Component: GenreItem', () => {
  const mockGenre = music.genre();
  const mockOtherGenre = music.genre();
  const mockOnClick = vi.fn();

  it('should render correct', () => {
    const { withStoreComponent } = withStore(
      <GenreLink genre={mockGenre} activeGenre={mockOtherGenre} onClick={mockOnClick} />,
      makeFakeStore()
    );
    render(withStoreComponent);

    expect(screen.getByText(mockGenre)).toBeInTheDocument();
  });

  it('should set active genre on click', async () => {
    const { withStoreComponent } = withStore(
      <GenreLink genre={mockGenre} onClick={mockOnClick} activeGenre={mockGenre} />,
      makeFakeStore()
    );

    render(withStoreComponent);
    await userEvent.click(screen.getByRole('listitem'));

    expect(mockOnClick).toHaveBeenCalledWith(mockGenre);
    expect(mockOnClick).toBeCalledTimes(1);
    expect(screen.getByText(mockGenre)).toBeInTheDocument();
    expect(screen.getByRole('listitem')).toHaveClass('catalog__genres-item--active');
  });
});
