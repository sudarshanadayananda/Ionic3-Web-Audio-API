import { Component, OnInit } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AudioProvider } from '../../providers/audio/audio';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  unreadMessagesCount: number = 0;
  track: string = 'assets/sounds/beep.mp3';

  constructor(private audio: AudioProvider) {}

  ngOnInit() {
    let timer = () => {

      if (this.unreadMessagesCount < 25) {

        this.unreadMessagesCount++;
        this.playSound();
        setTimeout(timer, 1000);
      }

    }
    timer();
  }

  playSound() {
    this.audio.loadSound(this.track)
  }
}
