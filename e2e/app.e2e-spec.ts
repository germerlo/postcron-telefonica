import { Postcron4uPage } from './app.po';

describe('postcron4u App', () => {
  let page: Postcron4uPage;

  beforeEach(() => {
    page = new Postcron4uPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
