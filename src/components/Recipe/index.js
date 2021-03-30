// YARN
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// icons
import Informations from './Informations';
import Instructions from './Instructions';
import Ingredients from './Ingredients';
import Image from './Image';
import ImageMobile from './ImageMobile';
import InformationsMobile from './InformationsMobile';

// SCSS
import './styles.scss';

// component
const Recipe = ({ recipe }) => {
  console.log(recipe);

  return (
    <div className="recipe">
      <div className="recipe__desktop">
        <div className="recipe__block recipe__block--left">
          <Informations
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            tags={recipe.tags}
            preparationTime={recipe.preparation_time}
            bakingTime={recipe.baking_time}
            difficulty={recipe.difficulty_id}
            nutriScore={recipe.nutri_score}
            seasons={recipe.seasons}
          />
          <Instructions steps={recipe.steps} />
        </div>

        <div className="recipe__block recipe__block--right">
          <Image id={recipe.id} picture={recipe.picture_url} />
          <Ingredients ingredients={recipe.ingredients} />
        </div>
      </div>

      <div className="recipe__mobile">
        <ImageMobile
          id={recipe.id}
          picture={recipe.picture_url}
          title={recipe.title}
          tags={recipe.tags}
          seasons={recipe.seasons}
        />
        <div className="recipe__mobile__content">
          <InformationsMobile
            id={recipe.id}
            preparationTime={recipe.preparation_time}
            bakingTime={recipe.baking_time}
            difficulty={recipe.difficulty_id}
            nutriScore={recipe.nutri_score}
          />
          <Ingredients ingredients={recipe.ingredients} />
          <Instructions steps={recipe.steps} />
        </div>
      </div>
    </div>
  );
};

// PropTypes
Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    picture_url: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    difficulty_id: PropTypes.number,
    preparation_time: PropTypes.number,
    baking_time: PropTypes.number,
    nutri_score: PropTypes.string,
    date_creation: PropTypes.string,
    date_update: PropTypes.string,
    seasons: PropTypes.array,
    tags: PropTypes.arrayOf(PropTypes.number),
    ingredients: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      quantity: PropTypes.number,
      unit: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      icon: PropTypes.string,
    })),
    steps: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  recipe: state.recipe,
});

export default connect(mapStateToProps, null)(Recipe);
