/**
 * This file contains example mapping functions between
 * API DTOs, internal value holders and UI view models.
 *
 * The implementation is intentionally simplified and
 * does not represent a production-ready mapping.
 */

import { EntityDto } from '../models/dto/entity.dto';
import { EntityVm } from '../models/view/entity.vm';
import { EntityValueHolder } from '../models/value-holder/entity.value-holder';
import { IdValue } from '../models/shared/id-value.model';

/**
 * Maps an API DTO to a UI-specific ViewModel.
 *
 * Purpose:
 * - decouple UI from backend contracts
 * - allow UI-specific naming and formatting
 */
export function mapDtoToViewModel(dto: EntityDto): EntityVm {
  return {
    id: dto.id!,
    label: dto.displayName,
    code: dto.code,
    isLocked: dto.locked,
    isDeleted: dto.deleted,
    sortOrder: dto.order,
    locale: dto.locale
  };
}

/**
 * Maps an internal value-holder structure back to a DTO.
 *
 * This pattern is useful when form controls or validation
 * logic require mutable wrapper objects.
 */
export function mapValueHolderToDto(
  holder: EntityValueHolder
): EntityDto {
  return {
    id: holder.id.value,
    displayName: holder.label.value,
    code: holder.code.value,
    order: holder.sortOrder.value,
    locked: holder.isLocked.value,
    deleted: holder.isDeleted.value,
    locale: holder.locale.value
  };
}

/**
 * Example of a simplified DTO → ValueHolder conversion.
 *
 * In real applications this would usually involve
 * explicit construction instead of casting.
 *
 * Casting is used here intentionally to demonstrate
 * the concept without adding boilerplate.
 */
export function mapDtoToValueHolder(
  dto: EntityDto
): EntityValueHolder {
  return dto as unknown as EntityValueHolder;
}

/**
 * Maps a list of entities into a generic id/value structure.
 *
 * Typical use cases:
 * - dropdown options
 * - lists
 */
export function mapToIdValue(
  items: EntityValueHolder[]
): IdValue[] {
  return items.map(item => ({
    id: item.id.value,
    value: item.code.value
  }));
}
