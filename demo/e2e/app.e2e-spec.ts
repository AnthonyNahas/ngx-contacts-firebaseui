import { NgxContactsFirebaseuiDemoPage } from './app.po';

describe('ngx-contacts-firebaseui-demo App', () => {
  let page: NgxContactsFirebaseuiDemoPage;

  beforeEach(() => {
    page = new NgxContactsFirebaseuiDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
