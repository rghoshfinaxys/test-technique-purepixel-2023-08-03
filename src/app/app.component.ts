import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  word = "magie"
  title = 'wordle-angular';
  guessCounter = 1
  guesses:Array<Array<string>> = []
  ngOnInit(){
    
  }

  
}
