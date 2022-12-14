import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AlumnosService } from './alumnos.service';
import { Alumnos } from '../Model/Alumnos';
import { of } from 'rxjs';

describe('AlumnosService', () => {
  let service: AlumnosService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({     
      imports:  [
      HttpClientTestingModule
    ]
  });
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  service = new AlumnosService (httpClientSpy as any);
  });

  it('se crea', () => {
    expect(service).toBeTruthy();
  });

  it('Debe retornar arreglo de alumnos mokapi', (done: DoneFn) => {
    const mockDatos =   [
        {
         nombre: "Karelle",
         apellido: "Jast",
         email: "Garrick_Muller28@yahoo.com",
         fechaNacimiento: "2021-09-27T13:13:20.771Z",
         nota: 4,
         estado: false,
         idAlumno: "3"
        },
        {
         nombre: "Domenic",
         apellido: "Goldner",
         email: "Abby.Wintheiser11@gmail.com",
        fechaNacimiento: "2021-10-15T16:51:58.150Z",
         nota: 5,
         estado: false,
         idAlumno: "4"
        },
        {
         nombre: "Asa",
         apellido: "Bernier",
         email: "Diego_Wiza@hotmail.com",
         fechaNacimiento: "2022-07-03T16:48:51.827Z",
         nota: 7,
         estado: true,
         idAlumno: "5"
        },
        {
         nombre: "Korbin",
         apellido: "Prosacco",
         email: "Brendan_Watsica49@yahoo.com",
        fechaNacimiento: "2022-02-23T14:09:22.284Z",
         nota: 7,
         estado: true,
         idAlumno: "6"
        },
        {
         nombre: "Julian",
         apellido: "Reichel",
        email: "Marietta.Sauer@yahoo.com",
         fechaNacimiento: "2022-06-11T11:39:07.314Z",
         nota: 2,
         estado: false,
         idAlumno: "7"
        },
        {
         nombre: "Joan",
         apellido: "Yundt",
         email: "Taryn.McGlynn@gmail.com",
         fechaNacimiento: "2021-10-09T16:39:23.140Z",
         nota: 8,
         estado: true,
         idAlumno: "8"
        },
      ];

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.obtenerAlumnos().subscribe((Alumnos) => {
      expect(Alumnos).toEqual(mockDatos);
      done();
    })
  });

});
