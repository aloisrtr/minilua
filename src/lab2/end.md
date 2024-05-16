# End of Lab 02
Let's review what we've done so far:
- our AST has been transformed into a CFG, making it easier for us to reason about our program's flow.
- our CFG contains blocks filled with a so-called SSA form. This makes every other algorithm we'll implement in the future easier to deal with!
- we have derived information about liveness and reachability from our CFG.

The last point will be especially relevant [if we try to optimize our generated code](./lab4/index.html).
Notably, reachability helps with common subexpression elimination, and liveness with
dead-code elimination.

But before we talk about that, let's generate some Uxn code, shall we?
