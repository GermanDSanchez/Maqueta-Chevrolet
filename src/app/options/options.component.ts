import { Component } from '@angular/core';
import { Contact } from './options.model';
import { List } from './options.model';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
})
export class OptionsComponent {

  public contacts: Contact[] = [
  {
    text: 'CHATEA CON NOSOTROS',
    icon: './assets/images/icono-whatsapp.svg'
  },
  {
    text: 'SOLICITAR COTIZACIÓN',
    icon: './assets/images/icon-solicitar-cotizacion.svg'
  },
  {
    text: 'SERVICIO PERSONALIZADO',
    icon: './assets/images/icon-servicio-personalizado.svg'
  },
  {
    text: 'PLAN CHEVROLET',
    icon: './assets/images/icon-plan-chevrolet.svg'
  }
]

public lists: List[] = [
  {
    image: './assets/images/logo1.webp',
    title: 'Solicitá una cotización',
    text: 'Para que conozcas todo lo que Chevrolet tiene para vos.',
  },
  {
    image: './assets/images/tecnologia.webp',
    title: 'Tecnología OnStar',
    text: 'Con estos servicios exclusivos, vas a poder aprovechar más la seguridad y la practicidad, dentro y fuera de tu Chevrolet.',
  },
  {
    image: './assets/images/logo2.webp',
    title: 'Ventas Corporativas',
    text: 'Conocé las mejores ofertas para tu negocio.',
  },
  {
    image: './assets/images/llave.jpg',
    title: '¡Agendá tu servicio!',
    text: 'El Servicio Personalizado Chevrolet tiene todo para que tu auto esté siempre como nuevo.',
  },
  {
    image: './assets/images/airbag.webp',
    title: 'Campaña seguridad Takata',
    text: 'Si manejás un Classic o Celta, solicitá hoy el reemplazo gratuito y necesario del airbag del conductor.',
  },
  {
    image: './assets/images/plan.webp',
    title: 'Plan Chevrolet',
    text: 'Accedé a tu Chevrolet con los mejores beneficios, financiado y en hasta 120 cuotas.',
  }
]

}
