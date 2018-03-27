import { NgPokedexPage } from './app.po';

xdescribe('ng-pokedex App', function() {
  let page: NgPokedexPage;

  beforeEach(() => {
    page = new NgPokedexPage();
  });

  it('should display heading saying NG-Pokédex', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('NG-PoCOLINkédex');
  });
});
