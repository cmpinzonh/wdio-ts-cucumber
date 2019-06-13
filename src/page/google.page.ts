export class GooglePage {

  constructor () {
  }

  public async checkTitle(): Promise<string> {
    return await browser.getTitle();
  }
}
