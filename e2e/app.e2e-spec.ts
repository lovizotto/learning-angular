import { LeaningAngularPage } from './app.po';

describe('leaning-angular App', () => {
  let page: LeaningAngularPage;

  beforeEach(() => {
    page = new LeaningAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
