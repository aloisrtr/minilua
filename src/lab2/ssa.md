# The SSA form
The Static Single-Assignment form (SSA for short) is a simplified form for instructions
that forces each variable to be assigned to exactly once. It mostly eases up
our work when it will come to optimizing the produced assembly.

We'll use a simple algorithm, courtesy of Braun et al. in "Simple and Efficient 
Construction of Static Single Assignment Form". This algorithm spans over
multiple parts of our CFG construction, notably when evaluating variables or linking
blocks together.
> Note that this does not produce a minimal SSA form. More complex techniques, such as
> dominance frontiers, produce said minimal form, but are more difficult to implement.
> We'll settle for this algorithm in those labs!

## Local value numbering
The most obvious part of SSA is to say: "hey, just change all variables in this
block and replace them with a unique one". And yeah, that works... for variables that
exist within a single block!

Here's the algorithm for writing to variables:
```rust
// self is our symbol table
fn write_variable(&mut self, identifier: &str, block: &mut Block, value: IRValue) {
  self[variable][block] = value
}
```
When evaluating a variable, we then do:
```rust
fn read_variable(&mut self, identifier: &str, block: &mut Block) -> IRValue {
  if self[variable].contains(block) {
    return self[variable][block]
  } else {
    // TODO: We'll look into that later
  }
}
```
Let's try with an example:
```
a <- 42
b <- a
c <- a + b
a <- c + 23
c <- a + c
```
would turn into:
```
v1 <- 42
// v2 <- v1 is useless, we don't care about renaming a unique variable
v2 <- v1 + v1 // a and b are the same
v3 <- 23 // constants are also given unique variables
v4 <- v2 + v2
v5 <- v4 + v2
```
And there you go! A valid SSA form! What do you mean, there are multiple blocks?

## Global value numbering
Say we now have a program that's a little more complicated:
```
// Block 1
a <- true
b <- 0
if a then
  // Block 2
  b <- 1
else 
  // Block 3
  b <- 2
  a <- false
end
// Block 4
```
Eeeeh... what would the value assigned to `b` be in `Block 4`?

Introducing: `phi` instructions!

### Phi instructions
`phi` instructions allow you to "choose" a value between multiple possibilities.
Here's what the previous example would look like in SSA form:
```
Block 1:
v1 <- true
v2 <- 0
if (v1) goto Block 2 else goto Block 3

Block 2:
v3 <- 1

Block 3:
v4 <- 2
v5 <- false

Block 4:
v6 <- phi(v1, v5) // a can be either true or false
v7 <- phi(v3, v4) // b can be either 1 or 2
```

We can finally complete our previous example!

```rust
fn read_variable(&mut self, identifier: &str, block: &mut Block) -> IRValue {
  if self[variable].contains(block) {
    return self[variable][block]
  } else {
    // Global variable numbering
    if !block.sealed() {
      // We have an incomplete CFG! We need to first complete the predecessors of this
      // block before we can evaluate this variable
      let phi = Phi::empty();
      // TODO
      return phi
    } else if block.predecessors().length() == 1 {
      // If there's only one predecessor, we just read the value that the variable had then
      return self.read_variable(identifier, block.predecessors()[0])
    } else {
      let mut phi = Phi::empty();
      self.write_variable(identifier, block, phi);
      for predecessor in block.predecessors() {
        phi.add(self.read_variable(identifier, predecessor))
      }
      // OPTIMIZATION: We can remove trivial phi operations here if they only
      // reference themselves and another variable
    }
  }
}
```

## Linking blocks together
We now have a small problem: since we're building up our SSA form *while* building
our CFG, some blocks may not know all of their predecessors when reading a variable!

To avoid this causing problems, we implement the idea of *sealed* and *filled* blocks.

Filled blocks are blocks on which no incomplete (empty) phi instructions remain.
**Only filled blocks can have successors!**

We can seal a block when all of its successors were found. When sealing a block, we
can resolve all of the empty phis inside it: after all, we know all of our predecessors
now!
