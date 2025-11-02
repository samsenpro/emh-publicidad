import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Nosotros } from './pages/nosotros/nosotros';
import { Contactanos } from './pages/contactanos/contactanos';
import { Servicios } from './pages/servicios/servicios';
import { Productos } from './pages/productos/productos';
import { Blog } from './pages/blog/blog';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'nosotros', component: Nosotros },
  { path: 'contactanos', component: Contactanos },
  { path: 'servicios', component: Servicios },
  { path: 'productos', component: Productos },
  { path: 'blog', component: Blog },
  { path: '**', redirectTo: '' }
];