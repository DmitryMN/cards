import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

const rootReducer = combineReducers({ });