import React from "react";
import { unmountComponentAtNode } from "react-dom";
import EspeceListe from "../components/EspeceListe";
import {shallow} from 'enzyme';

 let container = null;
 beforeEach(() => {
   // met en place un élément DOM comme cible de rendu
   container = document.createElement("div");
   document.body.appendChild(container);
 });

 afterEach(() => {
   // nettoie en sortie de test
   unmountComponentAtNode(container);
   container.remove();
   container = null;
});

 it('Le tableau d\' espèces sélectionnées doit etre vide', () => {
     const expectedState = []
     const liste = shallow(<EspeceListe></EspeceListe>);

     expect(liste.state('selected')).to.deep.equal(expectedState);

   });