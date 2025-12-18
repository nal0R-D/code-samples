import { environment } from '../config/environment';

import { ENTITY_DATA } from './entity/entity.data';
import { EntityDataApi } from './entity/entity.data.api';
import { EntityDataMock } from './entity/entity.data.mock';

/**
 * Central facade provider configuration.
 *
 * Allows switching implementations
 * based on environment (api vs mock).
 */
export const FACADE_PROVIDERS = [
  {
    provide: ENTITY_DATA,
    useClass: environment.production
      ? EntityDataApi
      : EntityDataMock,
  },
];
