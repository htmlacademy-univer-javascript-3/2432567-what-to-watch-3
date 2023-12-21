import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withStore } from '../../mocks/mock-components.tsx';
import { NameSpace } from '../../const.ts';
import GenresList from './genre-list.tsx';
import { makeFakeStore } from '../../mocks/mock.ts';
import { initialStateProps } from '../../store/films/films.props.ts';

describe('Component: GenreItem', () => {
  it('should render correct', () => {
    const { withStoreComponent, mockStore } = withStore(<GenresList />, makeFakeStore());
    const filmsSlice = mockStore.getState()[NameSpace.Film] as initialStateProps;

    render(withStoreComponent);

    expect(screen.getAllByRole('listitem')).toHaveLength(filmsSlice.genres.length);
  });
});
