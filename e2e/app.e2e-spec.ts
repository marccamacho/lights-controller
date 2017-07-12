import { LightsControllerPage } from './app.po';

describe('lights-controller App', () => {
  let page: LightsControllerPage;

  beforeEach(() => {
    page = new LightsControllerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
