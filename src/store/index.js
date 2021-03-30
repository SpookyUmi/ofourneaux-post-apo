import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// rootReducer = result of combineReducers
import rootReducer from '../reducers';

// middlewares
import authMiddleware from '../middlewares/auth';
import adminActionsOnTagMiddleware from '../middlewares/adminActionsOnTag';
import userMiddleware from '../middlewares/user';
import profileMiddleware from '../middlewares/profile';
import signUpMiddleware from '../middlewares/signUp';
import searchMiddleware from '../middlewares/search';
import recipeMiddleware from '../middlewares/recipe';
import shoppingListMiddleware from '../middlewares/shoppingList';
import appMiddleware from '../middlewares/app';
import connectionPersistence from '../middlewares/connectionPersistence';
import favoritesMiddleware from '../middlewares/favorites';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      authMiddleware,
      adminActionsOnTagMiddleware,
      userMiddleware,
      profileMiddleware,
      signUpMiddleware,
      searchMiddleware,
      recipeMiddleware,
      shoppingListMiddleware,
      appMiddleware,
      connectionPersistence,
      favoritesMiddleware,
    ),
  ),
);

export default store;
