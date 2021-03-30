// YARN
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// Components
import Header from '../Header';
import Generator from '../Generator';
import About from '../About';
import Contact from '../Contact';
import ShoppingList from '../ShoppingList';
import HomePresentation from '../App/HomePresentation';
import Inscription from '../Inscription';
import Connection from '../Connection';
import Profile from '../Profile';
import Recipe from '../Recipe';
import Recipes from '../Recipes';
import Favorites from '../Favorites';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Admin from '../Admin';
import SearchFail from '../Errors/SearchFail';
import CheckError from '../Errors/CheckError';

// SCSS
import './styles.scss';
import '../../styles/index.scss';

const App = ({ recipes, checkIfUserIsLogged }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    checkIfUserIsLogged();
  }, []);

  return (
    <div className="app">
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <NavBar setIsOpen={setIsOpen} isOpen={isOpen} />
      <Route exact path="/">
        <HomePresentation />
        <Generator />
      </Route>
      <Route exact path="/a-propos">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/profil/liste-de-courses">
        <ShoppingList setIsOpen={setIsOpen} />
      </Route>
      <Route exact path="/profil/recettes-favorites">
        <Favorites setIsOpen={setIsOpen} />
      </Route>
      <Route exact path="/inscription">
        <Inscription />
      </Route>
      <Route exact path="/connexion">
        <Connection />
      </Route>
      <Route exact path="/profil">
        <Profile />
      </Route>
      <Route exact path="/recettes">
        <Recipes recipes={recipes} setIsOpen={setIsOpen} />
      </Route>
      <Route exact path="/recettes/:slug">
        <Recipe recipes={recipes} />
      </Route>
      <Route
        exact
        path={[
          '/admin/ajout-recette',
          '/admin/modification-recette/:id',
          '/admin/gestion-labels',
          '/admin/gestion-utilisateurs',
          '/admin/ajout-ingredient',
        ]}
      >
        <Admin />
      </Route>
      <Route
        exact
        path="/try-again"
      >
        <SearchFail />
      </Route>
      <Route
        exact
        path="/404"
      >
        <CheckError />
      </Route>
      <Footer className="footer" />
    </div>
  );
};

App.propTypes = {
  recipes: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  checkIfUserIsLogged: (event) => {
    const userToken = localStorage.getItem('token');
    const userId = localStorage.getItem('id');
    if (userToken && userId) {
      dispatch({
        type: 'CHECK_LOGGED_USER',
        payload: {
          id: userId,
          token: userToken,
        },
      });
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
