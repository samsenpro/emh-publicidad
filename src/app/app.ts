import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Preloader } from './shared/preloader/preloader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Preloader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}