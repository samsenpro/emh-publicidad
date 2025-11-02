import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preloader',
  imports: [CommonModule],
  templateUrl: './preloader.html',
  styleUrl: './preloader.css',
})
export class Preloader implements OnInit {
  isLoading = true;

  ngOnInit() {
    // Simular carga de recursos
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.isLoading = false;
      }, 1500); // Espera 1.5 segundos después de cargar
    });
  }
}