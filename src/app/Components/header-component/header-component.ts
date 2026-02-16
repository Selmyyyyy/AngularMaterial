import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatIconButton, RouterLink],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {

  paletteId = 0;
  isDarkMode = false;


  switchMode() {
    // if (this.isDarkMode === true) {
    //   this.isDarkMode = false;
    // } else {
    //   this.isDarkMode = true;
    // }

    this.isDarkMode = !this.isDarkMode;
    // è la stessa cosa della parte commentata sopra 
    document.body.classList.toggle('dark-body');
    //toggle Serve a scambiare uno stato tra due opzioni(in questo caso dark e light)



  }

  switchPalette() {

    this.paletteId++;
    if (this.paletteId > 2) {
      this.paletteId = 0;
    }
    if (this.paletteId === 1) {
      document.body.classList.add('charteuse-theme');
    } else if (this.paletteId === 2) {
      document.body.classList.remove('charteuse-theme');
      document.body.classList.add('orange-theme');

    } else {
      document.body.classList.remove('charteuse-theme');
      document.body.classList.remove('charteuse-theme');

    }

  }
}
