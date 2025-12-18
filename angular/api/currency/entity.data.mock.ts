import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { EntityData } from './entity.data';
import { EntityValueHolder } from '../models/value-holder/entity.value-holder';
import { EntityVm } from '../models/view/entity.vm';

/**
 * Mock implementation of EntityData.
 *
 * Used for local development, demos and testing.
 */
@Injectable({ providedIn: 'root' })
export class EntityDataMock implements EntityData {

  loadAll(): Observable<EntityValueHolder[]> {
    return of([]);
  }

  loadOne(): Observable<EntityVm> {
    return of({} as EntityVm);
  }

  create(): Observable<EntityValueHolder> {
    return of({} as EntityValueHolder);
  }

  update(): Observable<EntityValueHolder> {
    return of({} as EntityValueHolder);
  }

  delete(): Observable<boolean> {
    return of(true);
  }

  toggleLock(): Observable<boolean> {
    return of(true);
  }
}
