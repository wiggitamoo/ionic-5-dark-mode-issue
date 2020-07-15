import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  dark = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initializeDarkMode();
    });
  }

  initializeDarkMode(){
    const prefersColor = window.matchMedia('(prefers-color-scheme: dark)');
    this.dark = prefersColor.matches;
    this.updateDarkMode();

    prefersColor.addEventListener(
        'change',
        mediaQuery => {
          this.dark = mediaQuery.matches;
          this.updateDarkMode();
        }
    );
  }

  updateDarkMode() {
    if(this.dark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }

}
