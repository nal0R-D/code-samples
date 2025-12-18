import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { EntityVm } from '../models/view/entity.vm';
import { EntityValueHolder } from '../models/value-holder/entity.value-holder';

/**
 * Defines the data access contract for an entity.
 *
 * This interface abstracts the data source (API, mock, etc.)
 * from the rest of the application.
 */
export interface EntityData {
  loadAll(params?: unknown): Observable<EntityValueHolder[]>;
  loadOne(params?: unknown): Observable<EntityVm>;
  create(params?: unknown): Observable<EntityValueHolder>;
  update(params?: unknown): Observable<EntityValueHolder>;
  delete(params?: unknown): Observable<boolean>;
  toggleLock(params?: unknown): Observable<boolean>;
}

/**
 * Injection token used to switch between
 * API and mock implementations.
 */
export const ENTITY_DATA = new InjectionToken<EntityData>(
  'ENTITY_DATA'
);
