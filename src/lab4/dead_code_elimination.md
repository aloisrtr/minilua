# Dead code elimination
This optimization aims at reducing code that is not useful. It is primarily useful
to reduce the size of our resulting program, altough it might also improve performance
due to cache effects.

## Liveness analysis
We define notions of usage and definition for variables. A variable is used in a block
when it is read somewhere, and defined if it is written to.

From those properties, we can define the properties of "live", live-in" and "live-out":
- a variable is "live" on a transition if we can find a path to a block in which it is used without encountering any block defining it.
- a variable is "live-in" in a block if it is live in at least one transition leading to it.
- a variable is "live-out" in a block if it is live in at least one transition from said block.

We can note a few properties on these sets of variables:
- a variable is necessarilly "live-in" in a block if it is used.
- if a variable is "live-in" in a block, then it is "live-out" in all of its predecessors.
- a variable that is "live-out" and not defined in a block is also "live-in" in this block.

> **ASSIGNMENT**: Implement a "liveness analysis" computing the set of live-in and live-out
> variables for your blocks.

## Reaching definition
TODO

## Common subexpression elimination
Finally, some optimization using our long definitions from before!

Look at the following IR:
```
Block 0:
  v1: 1
  v2: 2
  
Block 1:
  v3: v1 + v2 + 3
  if (cond) goto Block 2 else Block 3

Block 2: ... goto Block 4
Block 3: ... goto Block 4

Block 5:
  v4: v1 + v2
```
We compute `v1 + v2` twice! If we generate code from this, we might lose precious
cycles fetching the values, adding, and all that tedious stuff. We'd want to compute
this result once, store it in a variable, and reuse it when needed.
