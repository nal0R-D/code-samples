# OpenAPI Integration

The backend API client is generated using OpenAPI.

Generated code is treated as volatile
and never used directly in components or stores.

## Integration Strategy

Component → Facade → Store → API Service → OpenAPI Client

## API Service Responsibilities
- wrap generated OpenAPI calls
- map DTOs to ViewModels / ValueHolders
- handle request parameters
- isolate backend contracts

## Anti-Corruption Layer

API Services act as an anti-corruption layer:
- backend changes do not propagate into the UI
- DTO changes only affect a single layer
- frontend remains stable during backend evolution

## Benefits
- clean frontend contracts
- easier refactoring
- safer backend upgrades
