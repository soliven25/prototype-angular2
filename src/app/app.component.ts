import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title :'app works!!',
    isFilled: true
  }

  tweet = {
    totalLikes: 10,
    iLike: false
  }
}
