import { PrototypeAngular2Page } from './app.po';

describe('prototype-angular2 App', function() {
  let page: PrototypeAngular2Page;

  beforeEach(() => {
    page = new PrototypeAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!!');
  });
});
