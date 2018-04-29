import { De.GoPhipPage } from './app.po';

describe('de.go-phip App', () => {
  let page: De.GoPhipPage;

  beforeEach(() => {
    page = new De.GoPhipPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
