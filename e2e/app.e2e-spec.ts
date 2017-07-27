import { FreelancerPage } from './app.po';

describe('freelancer App', () => {
  let page: FreelancerPage;

  beforeEach(() => {
    page = new FreelancerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
