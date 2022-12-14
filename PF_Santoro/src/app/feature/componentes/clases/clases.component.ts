import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable, Subscription } from 'rxjs';
import { ClasesService } from '../../servicios/clases.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  clases: any = [];
  clasesSuscripcion: Subscription;
  clasesObservable$!: Observable<any>;

  constructor(
    private ClasesService: ClasesService,
    private snackBar: MatSnackBar
  ) {

    this.ClasesService.obtenerPromiseClases().then((clases) => {
    }).catch((error) => {
     (error);
    });

    this.ClasesService.obtenerObservableClases().subscribe((clases) => {
      this.clases = clases;
    });

    this.clasesSuscripcion = this.ClasesService.obtenerObservableClases().subscribe((clases) => {
      this.clases = clases;
    });
    this.clasesObservable$ = this.ClasesService.obtenerObservableClases();
  }


  ngOnInit(): void {
    this.ClasesService.obtenerObservableClases().pipe(map((clases: any[]) =>
      clases.filter(clases =>
        clases.id === 1))).subscribe((clases) => {
        });
  }

  obtenerPromiseClases() {
    return this.ClasesService.clases;
  }

  ngOnDestroy(): void {
    this.clasesSuscripcion.unsubscribe();
  }

  AgregarClase() {
    let clase = {
      id: 6, ClaseNum: 6,tema: 'examen', fecha: 'xxxxx'
    }
    this.ClasesService.AgregarClase(clase);
    this.snackBar.open(`La clase nº ${clase.ClaseNum} fue agregada exitosamente`, 'Ok', {duration: 3000});


  }
}
