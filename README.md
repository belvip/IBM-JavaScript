# Summary

## Variable Scope Overview

- **Global Scope**: Variables declared outside any block or function have a global scope and are accessible throughout the entire script.
- **Block Scope**: Variables declared within curly braces `{}` have block scope, accessible only within that block.
- **Function Scope**: Variables declared within a function have function scope, limited to that function's block.

## Variable Declaration and Initialization

- Used `var`, `let`, and `const` to declare and initialize variables in different scopes: global, block, and function.
- Demonstrated the behavior of these variables in respective scopes by attempting to access them outside their defined scope.

## Output and Scope Analysis

- **Global variables** were accessible everywhere in the script.
- **Block-scoped variables** (inside `{}`) had limited accessibility, resulting in **ReferenceErrors** when accessed outside their blocks.
- **Function-scoped variables** (inside a function) also led to **ReferenceErrors** when accessed outside the function.
