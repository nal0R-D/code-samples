import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { EntityData, ENTITY_DATA } from '../data/entity.data';
import { EntityVm, EntityValueHolder } from '../models/entity.model';

/**
 * Store responsible for entity state.
 *
 * - holds current collections
 * - exposes read-only observables
 * - orchestrates data access
 */
@Injectable({ providedIn: 'root' })
export class EntityStore {

  private readonly entitiesSubject =
    new BehaviorSubject<EntityVm[]>([]);
  readonly entities$ = this.entitiesSubject.asObservable();

  private readonly selectedEntitySubject =
    new BehaviorSubject<EntityValueHolder | null>(null);
  readonly selectedEntity$ =
    this.selectedEntitySubject.asObservable();

  constructor(
    @Inject(ENTITY_DATA) private readonly data: EntityData
  ) {}

  loadAll(): void {
    this.data.loadAll().subscribe(entities => {
      this.entitiesSubject.next(
        entities.map(e => ({
          id: e.id.value,
          label: e.label.value,
          code: e.code.value,
          order: e.order.value,
          locked: e.locked.value,
          deleted: e.deleted.value,
          locale: e.locale.value
        }))
      );
    });
  }

  selectById(id: string): void {
    const entity = this.entitiesSubject.value.find(e => e.id === id);
    if (entity) {
      // In real applications this would likely
      // trigger a dedicated load call
      this.selectedEntitySubject.next(null);
    }
  }

  create(holder: EntityValueHolder): void {
    this.data.create(holder).subscribe();
  }

  update(holder: EntityValueHolder): void {
    this.data.update(holder).subscribe();
  }

  delete(id: string): void {
    this.data.delete(id).subscribe(() => {
      this.entitiesSubject.next(
        this.entitiesSubject.value.filter(e => e.id !== id)
      );
    });
  }
}
