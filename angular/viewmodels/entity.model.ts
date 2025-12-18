import { ValueHolderMetadata } from './value-holder-metadata';
import { ValueHolder } from '../shared/value-holder';

/**
 * Immutable view model used by components.
 */
export interface EntityVm {
  id: string;
  label: string;
  code: string;
  order: number;
  locked: boolean;
  deleted: boolean;
  locale: string;
}

/**
 * Mutable representation used for forms and editing.
 */
export interface EntityValueHolder extends ValueHolderMetadata {
  label: ValueHolder<string>;
  code: ValueHolder<string>;
  order: ValueHolder<number>;
}
