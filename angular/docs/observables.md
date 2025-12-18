# Observable Strategy

The application follows a strict observable-only policy
for component interaction.

## Principles
- components never access mutable state
- all state is exposed as readonly Observables
- side effects are handled outside components

## Store Implementation

Stores use `BehaviorSubject` internally
and expose `Observable` interfaces externally.

### Why BehaviorSubject?
- initial state is required
- latest value is synchronously accessible
- simple and sufficient for local feature state

### Why readonly Observables?
- prevents accidental state mutation
- enforces unidirectional data flow
- improves reasoning and testability

## When BehaviorSubject Is NOT Used
- for event streams (use `Subject`)
- for HTTP calls (use cold Observables)
- for complex global state (NgRx would be considered)
