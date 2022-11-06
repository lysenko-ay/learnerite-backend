#### This folder should have next structure:

- Folder with `chapter-id` name
  - Tests named `task-id.m` as file

#### Each test must follow next rules:

- It should call at least once `__test__` function. Syntax: `__test__(key, value, ..., masterFn, userFn)`, where
  - `key`, `value` are values that are passed to `master` and `user` functions (see below). Test can have multiple key, value pairs separated by commas (`__test__` function is the function with variable arguments count).
  - `masterFn` - function to get expected value for passed variables.
  - `userFn` - function to get user value for passed variables.
- It should define `__master__` function. This function is called by `__test__` function to get expected result.
- It should define `__user__` function. This function is called by `__test__` function to get user result.

#### Examples:

- `./variables-and-conditions/square-root-of-value.m`
- `./arrays-and-cycles/squares-in-rectangle.m`
