# Building the CFG
Alright, we have an AST ready for us to use, but it has made its time. Now, if we
want to properly translate our program into something executable by a Uxn stack machine,
we'll need to go lower.

To represent the semantics of our language, we'll use a CFG, which has been introduced
in the [previous page](./lab2/index.html).

A CFG is based on small units called "blocks".
**Careful!** The blocks we're talking about are *not* the same as the ones in the
Lua language. These are small units of one or more instructions that are executed
sequentially. More precisely, *there are no control-flow changes between instructions
in a block*. Let's illustrate this with an example.

Say we have the following Lua program:
```lua
a = true
b = 0
while a do
  b = b + 1
  if b == 3 then
    a = false
  end
end
```
`a = true` and `b = 0` are always executed one after the other. But then, we have
a *control-flow operation*. The `while` loop will repeat itself over and over until
`a` is `false`. So the first two instructions would be in the same block, but not
the check that `a` is `true`, or the body of the loop.

## Instructions?
I said our blocks will contain **instructions**. But what do we define as an instruction,
actually?

Well, we mean an intermediate representation of what our program will do!
We'll have simple, atomic instruction. Those can be things like "goto", "compare two
variables", "add two variables", etc.

Those instructions are already defined for you. You shouldn't add to those, they are
designed to be exactly what you need, for now and later.

## Yet another visitor
To turn our AST into a corresponding CFG, we'll use our good old friend the `Visitor`
trait, which you have defined in [Lab 01](./lab1/pretty_printer.md). Here, we'll do
more than just printing things to the console.

Most of said visitor is already implemented, notably for simple, tedious constructs like
constants or function calls.

> **ASSIGNMENT**: Complete the visitor that transforms an AST into a corresponding CFG,
> by implementing the visitor functions for blocks, control-flow statements (if, for, while, etc),
> and variable assignation.
