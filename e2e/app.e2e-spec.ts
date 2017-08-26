import { StatsViewPage } from './app.po';

describe('stats-view App', () => {
  let page: StatsViewPage;

  beforeEach(() => {
    page = new StatsViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
