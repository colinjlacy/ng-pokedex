import { PokemonPage } from './pokemon.po';
import { browser, by, element } from 'protractor';
import { ISize, ILocation } from 'selenium-webdriver';
import { Guide, Step } from '../../tractorPull/dist';

const specs:Step[] = [

  new Step('Navigate to Home Page', 'When you navigate to the home page, you should see a list of Pokemon.', null, function () {
    let page:PokemonPage = new PokemonPage();
    page.navigateTo();
  }),

  new Step('Open Pokemon Details', 'Clicking on a Pokemon will open that particular Pokemon\'s detailed listing.', '.modal__inner', function () {
    let page:PokemonPage = new PokemonPage();
    page.navigateTo();
    page.getFirstPokemonCardElement().click();
  }),

  new Step('Navigate between Pokemon Details', 'By clicking the arrow on the left of a Pokemon detail listing, you can navigate to the next Pokemon\'s details.', '.modal__inner', function () {
    let page:PokemonPage = new PokemonPage();
    page.navigateTo();
    page.getFirstPokemonCardElement().click();
    page.selectNextKey();
  }),

  new Step('Navigate between Pokemon Details', 'By clicking the arrow on the right of a Pokemon detail listing, you can navigate to the previous Pokemon\'s details.', '.modal__inner', function () {
    let page:PokemonPage = new PokemonPage();
    page.selectPrevKey();
    page.selectPrevKey();
  })

];


new Guide('Using the Pokemon Viewer', 'This guide takes you through the steps of viewing the various Pokemon.', ...specs);

