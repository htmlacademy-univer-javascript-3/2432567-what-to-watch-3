import { describe } from 'vitest';
import NotFoundPage from './not-found-page.tsx';
import { withHistory } from '../../mocks/mock-components.tsx';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { AppRoute } from '../../const.ts';

describe('Page: NotFound', () => {
  it('should render correct', () => {
    const withHistoryComponent = withHistory(<NotFoundPage />, createMemoryHistory());

    render(withHistoryComponent);

    expect(screen.getByText('Страница не найдена')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную страницу')).toBeInTheDocument();
  });

  it('should navigate to main page when clicks a button', async () => {
    const mockHistory = createMemoryHistory();
    const withHistoryComponent = withHistory(<NotFoundPage />, mockHistory);

    render(withHistoryComponent);
    await userEvent.click(screen.getByTestId('link-main-page'));

    expect(mockHistory.location.pathname).toBe(AppRoute.Main);
  });
});
