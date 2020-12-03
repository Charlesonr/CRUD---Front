import { CrudUiPage } from './app.po';

describe('crud-ui App', function() {
  let page: CrudUiPage;

  beforeEach(() => {
    page = new CrudUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
