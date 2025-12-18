# DTO vs ViewModel Mapping

The application explicitly separates
backend DTOs from frontend ViewModels.

## Backend DTOs
- generated from OpenAPI
- represent backend contracts
- may change independently from UI needs

## ViewModels
- optimized for UI rendering
- contain only UI-relevant data
- may combine or rename backend fields

## ValueHolder Models
- used for editable entities
- encapsulate:
  - value
  - validation state
  - readonly / disabled state

## Why Mapping Is Required

Mapping prevents:
- backend naming leaking into templates
- UI breaking due to backend changes
- complex form logic inside components

Mapping enables:
- stable UI contracts
- simpler components
- isolated refactoring
