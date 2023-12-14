import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import TabReviews from './tab-reviews';
import { withHistory, withStore } from '../../../mocks/mock-components';
import { NameSpace } from '../../../const';
import { makeFakeFilm, makeFakeStore } from '../../../mocks/mock';
import { initialStateProps } from '../../../store/reviews/reviews.props';


describe('Component: TabReviews', () => {
  it('should render correct', () => {
    const store = makeFakeStore();
    const { film } = makeFakeFilm();

    const withHistoryComponent = withHistory(<TabReviews film={film} />);
    const { withStoreComponent, mockStore } = withStore(withHistoryComponent, store);
    const filmsSlice = mockStore.getState()[NameSpace.Review] as initialStateProps;
    render(withStoreComponent);

    expect(screen.getAllByTestId('review')).toHaveLength(filmsSlice.reviews.length);
  });
});
