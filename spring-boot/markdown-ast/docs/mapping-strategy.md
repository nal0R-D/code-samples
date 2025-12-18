# Markdown Mapping Architecture

This module converts markdown into a custom AST
and back again.

## Why a Custom AST?

- avoid tight coupling to CommonMark
- enable domain-specific extensions
- keep markdown rendering replaceable

## Architecture

Markdown
  ↓
CommonMark AST
  ↓
Mapping Strategies
  ↓
Custom AST

## Design Patterns Used

- Strategy Pattern for node mapping
- Factory Pattern for strategy selection
- Anti-Corruption Layer around CommonMark

## Extensibility

Adding a new markdown element requires:
- a new AST node
- a new MappingStrategy
- no changes to existing code
