import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public facebookOff:string = './assets/images/social-icons_facebook_off.svg';
  public twitterOff:string = './assets/images/social-icons_twitter_off.svg';
  public instagramOff:string = './assets/images/ig-logo.svg';
  public youtubeOff:string = './assets/images/social-icons_youtube_off.svg';
  public whatsappOff:string = './assets/images/social-icon_whatsapp_off.svg';

  hoverIcon(iconName:string):void {
    switch (iconName) {
      case this.facebookOff:
        this.facebookOff = './assets/images/social-icons_facebook_on.svg';
        break;
      case this.twitterOff:
        this.twitterOff = './assets/images/social-icons_twitter_on.svg';
        break;
      case this.instagramOff:
        this.instagramOff = './assets/images/ig-logo-hover.svg';
        break;
      case this.youtubeOff:
        this.youtubeOff = './assets/images/social-icons_youtube_on.svg';
        break;
      case this.whatsappOff:
        this.whatsappOff = './assets/images/social-icon_whatsapp_on.svg';
        break;
    }
  }

  resetIcon():void {
    this.facebookOff = './assets/images/social-icons_facebook_off.svg'
    this.twitterOff = './assets/images/social-icons_twitter_off.svg'
    this.instagramOff = './assets/images/ig-logo.svg'
    this.youtubeOff = './assets/images/social-icons_youtube_off.svg'
    this.whatsappOff = './assets/images/social-icon_whatsapp_off.svg'
  }
}
