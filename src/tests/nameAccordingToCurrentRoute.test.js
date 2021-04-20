import { expect } from 'chai';

import nameAccordingToCurrentRoute from '../utils/nameAccordingToCurrentRoute';

// Chapter
describe('nameAccordingToCurrentRoute', () => {
  // sub chapter for structure
  describe('structure', () => {
    it('should be a function', () => {
      expect(nameAccordingToCurrentRoute).to.be.a('function');
    });

    it('should return a string', () => {
      expect(nameAccordingToCurrentRoute()).to.be.a('string');
    });
  });

  // sub chapter for execution
  describe('execution', () => {
    // if currentRoute param is not an existing route
    // ---> erreur dans NameAccordingToRoute
    it('should handle invalid route param', () => {
      expect(nameAccordingToCurrentRoute('random')).to.be.equal('erreur dans NameAccordingToRoute');
    });

    // si currentRoute = /admin/ajout-recette ---> Ajouter une recette
    it('should return "Ajouter une recette" when current Route = "/admin/ajout-recette"', () => {
      expect(nameAccordingToCurrentRoute('/admin/ajout-recette')).to.be.equal('Ajouter une recette');
    });

    // si currentRoute = /admin/gestion-labels ---> Gérer les labels
    it('should return "Gérer les labels" when current Route = "/admin/gestion-labels"', () => {
      expect(nameAccordingToCurrentRoute('/admin/gestion-labels')).to.be.equal('Gérer les labels');
    });

    // si currentRoute = /admin/gestion-utilisateurs ---> Gérer les utilisateurs
    it('should return "Gérer les utilisateurs" when current Route = "/admin/gestion-utilisateurs"', () => {
      expect(nameAccordingToCurrentRoute('/admin/gestion-utilisateurs')).to.be.equal('Gérer les utilisateurs');
    });

    // si currentRoute = /admin/modification-recette/${id} ---> Modifier une recette
    it('should return "Modifier une recette" when current Route = `/admin/modification-recette/${id}`', () => {
      expect(nameAccordingToCurrentRoute(`/admin/modification-recette/${2}`, 2)).to.be.equal('Modifier une recette');
    });
  });
});