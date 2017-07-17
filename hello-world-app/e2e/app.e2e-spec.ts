import { HelloWorldAppPage } from './app.po';

describe('hello-world-app App', () => {
  let page: HelloWorldAppPage;

  beforeEach(() => {
    page = new HelloWorldAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
