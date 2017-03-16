import { MysandboxPage } from './app.po';

describe('mysandbox App', () => {
  let page: MysandboxPage;

  beforeEach(() => {
    page = new MysandboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
