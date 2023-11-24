import store from './store';

type AppDispatch = typeof store.dispatch;
type State = ReturnType<typeof store.getState>;
type Genre = string;
type Token = string;

export type { AppDispatch, State, Genre, Token };
