import { Component} from '@angular/core';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-header',
  templateUrl: 'header.page.html',
  styleUrls: ['header.page.scss']

})
export class HeaderPage {
  constructor(private menuCtrls: MenuController) {
  }

  toggleMenu(){
      this.menuCtrls.toggle();
  }
}
