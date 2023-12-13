import { describe, expect } from 'vitest';
import { MemoryHistory, createMemoryHistory } from 'history';
import { withHistory, withStore } from '../../mocks/mock-components.tsx';
import { render, screen } from '@testing-library/react';
import { makeFakeStore } from '../../mocks/mock.ts';
import { AppRoute, NameSpace } from '../../const.ts';
import App from './App.tsx';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;
  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render the "MainPage" when user navigate to "/"', () => {
    const store = makeFakeStore();

    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, store);
    mockHistory.push(AppRoute.Main);

    render(withStoreComponent);

    expect(screen.getAllByTestId('movie').length).toBe(8);
    store[NameSpace.Film].genres.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  it('should render the "MyList" when user navigate to "/mylist"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    mockHistory.push(AppRoute.MyList);

    render(withStoreComponent);

    expect(screen.getByText('Catalog')).toBeInTheDocument();
    expect(screen.getAllByTestId('movie')).not.toHaveLength(0);
  });

  it('should render the "SignIn" when user navigate to "/login"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(AppRoute.SignIn);

    render(withStoreComponent);

    expect(screen.getAllByText('Sign in').length).toBe(2);
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('should render the "Player" when user navigate to "/player"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(`${AppRoute.Player}/test`);

    render(withStoreComponent);

    expect(screen.getByText('Exit')).toBeInTheDocument();
  });

  it('should render the "Movie" when user navigate to "/films"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(`${AppRoute.Film}/test}`);

    render(withStoreComponent);

    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText('My list')).toBeInTheDocument();
  });

  it('should render the "NotFound" when user navigate to unknown route', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push('/unknownPage');

    render(withStoreComponent);

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
    expect(screen.getByText('Главная страница')).toBeInTheDocument();
  });
});
