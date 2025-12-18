# Architecture Overview

The Angular samples follow a layered, unidirectional architecture.

Each layer has a clearly defined responsibility
and communicates only with the layer directly below it.

Component
↓
Facade
↓
Store (State Management)
↓
API Service (OpenAPI Client Wrapper)
↓
Backend

## Layer Responsibilities

### Component
- purely presentational
- subscribes to Observables only
- contains no business or persistence logic
- emits user intents (create, update, delete)

### Facade
- acts as the public API for a feature
- orchestrates store updates and side effects
- hides implementation details from components

### Store
- owns application state
- encapsulates state via `BehaviorSubject`
- exposes state as readonly Observables
- performs in-memory transformations (filtering, selection)

### API Service
- wraps generated OpenAPI clients
- performs DTO ↔ ViewModel mapping
- isolates backend contracts

## Design Goals

- predictable state transitions
- unidirectional data flow
- low coupling between UI and backend
- testable and replaceable layers
