import { describe, expect } from 'vitest';
import AddReviewPage from './add-review-page.tsx';
import { withHistory, withStore } from '../../mocks/mock-components.tsx';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { makeFakeStore } from '../../mocks/mock.ts';

describe('Page: AddReview', () => {
  it('should render correct', () => {
    const withHistoryComponent = withHistory(<AddReviewPage />);

    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText('Add review')).toBeInTheDocument();
    expect(screen.getByText('Post')).toBeInTheDocument();
  });

  it('should display entered text', async () => {
    const mockText = 'review';

    const withHistoryComponent = withHistory(<AddReviewPage />);

    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);

    await userEvent.type(screen.getByRole('textbox'), mockText);

    expect(screen.getByDisplayValue(mockText)).toBeInTheDocument();
  });
});
