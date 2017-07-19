import { Ng4uiComponentPage } from './app.po';

describe('ng4ui-component App', () => {
  let page: Ng4uiComponentPage;

  beforeEach(() => {
    page = new Ng4uiComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
