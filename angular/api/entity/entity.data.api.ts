import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { EntityData } from './entity.data';
import { EntityDto } from '../models/dto/entity.dto';
import { EntityValueHolder } from '../models/value-holder/entity.value-holder';
import { EntityVm } from '../models/view/entity.vm';

import {
  mapDtoToValueHolder,
  mapDtoToViewModel
} from '../mappers/entity.converter';

/**
 * API-based implementation of the EntityData interface.
 *
 * This class acts as an anti-corruption layer between
 * generated API clients and the application.
 */
@Injectable({ providedIn: 'root' })
export class EntityDataApi implements EntityData {

  constructor(
    private readonly apiService: any // generated API client (simplified)
  ) {}

  loadAll(): Observable<EntityValueHolder[]> {
    return this.apiService.getAll().pipe(
      map((dtos: EntityDto[]) =>
        dtos.map(mapDtoToValueHolder)
      )
    );
  }

  loadOne(): Observable<EntityVm> {
    return this.apiService.getOne().pipe(
      map(mapDtoToViewModel)
    );
  }

  create(): Observable<EntityValueHolder> {
    return this.apiService.create().pipe(
      map(mapDtoToValueHolder)
    );
  }

  update(): Observable<EntityValueHolder> {
    return this.apiService.update().pipe(
      map(mapDtoToValueHolder)
    );
  }

  delete(): Observable<boolean> {
    return this.apiService.delete().pipe(
      map(() => true)
    );
  }

  toggleLock(): Observable<boolean> {
    return this.apiService.toggleLock().pipe(
      map(() => true)
    );
  }
}
