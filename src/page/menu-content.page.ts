export class MenuContentPage {
  private tShirtMenu;

  constructor () {
    this.tShirtMenu = $('#block_top_menu > ul > li:nth-child(3) > a');
  }

  public async goToTShirtMenu(): Promise<void> {
    await this.tShirtMenu.click();
  }
}
