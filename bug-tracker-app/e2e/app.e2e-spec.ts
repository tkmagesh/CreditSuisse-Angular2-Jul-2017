import { BugTrackerAppPage } from './app.po';

describe('bug-tracker-app App', () => {
  let page: BugTrackerAppPage;

  beforeEach(() => {
    page = new BugTrackerAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
