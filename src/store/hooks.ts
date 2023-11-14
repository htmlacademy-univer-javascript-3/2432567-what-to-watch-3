import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, State } from '../types';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector = useSelector<State>;

export { useAppDispatch, useAppSelector };
