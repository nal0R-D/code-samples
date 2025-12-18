import { ValueHolder } from '../shared/value-holder';

/**
 * Common metadata shared by editable entities.
 *
 * ValueHolders are used to wrap primitive values
 * together with UI-related state (e.g. validation,
 * dirty flags, disabled state).
 */
export interface ValueHolderMetadata {
  id: ValueHolder<string>;
  locked: ValueHolder<boolean>;
  deleted: ValueHolder<boolean>;
  locale: ValueHolder<string>;
}
