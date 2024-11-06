import { Injectable } from '@angular/core';
import { IVacanca } from '../model/interfaces';

@Injectable({
  providedIn: 'root'
})
export class VacancesService {

  public vacances: IVacanca[] = [];

  constructor() { }

  addVacanca(vacanca: IVacanca): boolean {
    this.vacances.push(vacanca);
    localStorage.setItem('vacances', JSON.stringify(this.vacances));
    return true;
  }

  getVacancaById(id: string) {
    return null;
  }

  getVacances() {
    if (localStorage.getItem('vacances') == undefined) {
      return this.vacances;
    } else {
      this.vacances = JSON.parse(localStorage.getItem('vacances')!);
      return this.vacances;
    }
    
  }

  removeVacanca(id: string) {
    return null
  }
}
