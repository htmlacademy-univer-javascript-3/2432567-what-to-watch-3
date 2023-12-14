import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { State } from '../types';
import createAxios from '../services/api';

type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAxios>, Action>;
export type { AppThunkDispatch };
