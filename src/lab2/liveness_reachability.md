# Liveness and reachability computations
Now that we have a functional IR, it's time to do some calculations with it!

The most common informations we'd want to grab from the IR are the notions of
**liveness** and **reachability**. These are called **dataflow equations**.
Let's first present what these are.

## Liveness
Liveness defines wether "this variable is needed in the future".

In order to reason about this, we need to define a few properties of variables within
a block:
- a variable is **used** in a block if its value is read.
- a variable is **defined** in a block if a value is written to it.
- variables can be **live** between two blocks if there is a path to a block where its used without any blocks where it is defined in between.
- a variable is called **live-in** in a block if is live in at least one transition to said block.
- a variable is called **live-out** in a block if it is live in at least one transition from this block.

To ease things up, we'll often be talking about sets of variables verifying a property.
For example, the \\( used(b) \\) set is the set of variables that are used in block \\( b \\).

Computing liveness information is a matter of saturating the \\( live_in \\) and \\( live_out \\)
sets for each block: we define set operations that make each of them grow, and
stop when our sets are not changing anymore.

Our set operations will be as follows:
\\[ live_{out}(b) = \bigcup_{s \in succ(b)} live_{in}(s) \\]
\\[ live_{in}(b) = used(b) \cup (live_{out}(b) - defined(b)) \\]

> You can either go up or down your graph when saturating the set.
> Going up (from the leaves to the root) is faster, as the main computation comes
> from updating the \\( out \\) set from successors: if liveness for successors
> is already fully computed, this is way easier to do!

## Reachability
Reachability answers the question of "does assigning to variable \\( x \\) impact
the value of \\( y \\) in the future?"

We generate three more sets describing our variables in a block \\( b \\):
- \\( gen(b) \\) is the set of definitions **generated** in our block.
- \\( kill(b) \\) is the set of blocks that **overwrite** our block. For example, if we define `y = a + b`, then `c = y` and `y = a`, the redefinition of `y` kills our previous definition of `c`, and thus block 3 *kills* block 2.
- \\( reach_{in}(b) \\) is the set of variables that are "reach-in", i.e. it is reachable in at least one predecessor
- \\( reach_{out}(b) \\) is the set of variables that are "reach-out", i.e. it is reachable by at least one successor

In the same way we defined our liveness equations, here are the reachability equations:
\\[ reach_{in}(b) = \bigcup_{p \in pred(b)} reach_{out}(p) \\]
\\[ reach_{out}(b) = gen(b) \cup (reach_{in}(b) - kill(b)) \\]

The notion of reachability allows us to compute **available expressions**. Available
expressions are those that are in \\( reach_{in}(b) - kill(b) \\).

## Work list algorithm
Saturating sets in a naive way is *tedious*. Instead, we'd want to update sets only
*when needed*. That's where the work list algorithm steps in!

The idea goes as follows:
+ create a set of blocks to recompute. At first, this set is filled with all blocks of our CFG.
+ pick a block from the list, and compute its dataflow equation sets.
+ if the sets change from before, add all of its successors/predecessors (depending on if you are going up or down the graph) to the set of blocks to recompute.
+ repeat steps 2 and 3 until the set is empty 

> **ASSIGNMENT**: perform liveness and reachability analysis on your CFG using the work list
> algorithm.

