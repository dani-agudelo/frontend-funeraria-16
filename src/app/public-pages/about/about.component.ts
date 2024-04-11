import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public list: string[] = [
    'El cumplimiento de los requisitos y expectativas de los clientes y otras partes interesadas que intervienen en la prestación del servicio.',

    'La innovación permanente de planes de previsión exequial ofrecidos en el mercado, cumplimiento con los requisitos y expectativas de los clientes.',
    'El desarrollo y fortalecimiento de las competencias organizacionales e individuales de los colaboradores y la participación activa en la mejora del Sistema de Gestión.',
    'La asignación de los recursos necesarios para la implementación, mantenimiento y sostenibilidad del sistema de gestión.',
    'Gestionar el capital humano idóneo necesario, para el óptimo funcionamiento de la compañía.',
    'Promover la calidad de vida laboral, proporcionado condiciones de trabajo seguras y saludables para prevenir incidentes, accidentes y enfermedades laborales.',
    'La identificación de peligros, evaluación y valoración de riesgos que puedan afectar la integridad de los colaboradores, contratistas, infraestructura, continuidad de los servicios y otras partes interesadas incluido el entorno.',
    'La protección y prevención de enfermedades laborales y accidentes de trabajo en el desarrollo de las actividades por parte de colaboradores y contratistas.',
    'La prevención de la contaminación y el uso adecuado de los recursos naturales, manteniendo el equilibrio de los ecosistemas donde la organización desarrolla sus actividades.',
    'La administración del parque automotor para la prestación de servicios y desplazamientos de los actores viales, garantizando la conservación de la integridad física de todas las partes interesadas y con la operación segura de los vehículos.',
    'Promoviendo la participación y consulta de los trabajadores y demás partes interesadas para la implementación del sistema de gestión.',
  ];

  ngOnInit(): void {
  }
}
