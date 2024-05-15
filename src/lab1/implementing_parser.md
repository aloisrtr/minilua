# Implementing the grammar in LALRPOP
[LALRPOP](https://github.com/lalrpop/lalrpop) is a parser generator. Such frameworks
take a grammar as input, like [the one we described for Lua](./lab1/lua_syntax.html),
and generates code that can itself parse the grammar into an abstract syntax tree.

This dark magic can be accomplished because parsing is very well formally documented
and extensively studied. Algorithms to parse grammars are classified, and we'll be using
a so-called [LR parser](https://en.wikipedia.org/wiki/LR_parser).

## LALRPOP crash course
Our grammar will be defined in the [lua.lalrpop] file. LALRPOP is actually a fully-fledged
language to describe grammars.

Here's a sample LALRPOP file:
```rust
use std::str::FromStr;

grammar;

pub Term: i32 = {
    <n:Num> => n,
    "(" <t:Term> ")" => t,
};

Num: i32 = <s:r"[0-9]+"> => i32::from_str(s).unwrap();
```
**TODO: more explanation**

## Implementing control-flow
Most of the Lua grammar has been written out for you, how lucky! But we're here
to learn, and learning comes from doing.

Currently, the grammar has a few holes in it, mainly the `Statement` rule is missing
control-flow operations (`while`, `for`, `if`).

Try to implement those using the [Lua syntax](./lab1/lua_syntax.html) as reference.

Once that's done, you can move to pretty printing to test whether your parser is working
or not.

## Turning it all into an AST
As of now, our tree is more of a Concrete Syntax Tree (CST). We still have a lot
of redundant information about statements, funname, etc. This is obviously harder
to work with, we'd want a clean AST, abstracted from the details of the Lua grammar.

Thankfully, LALRPOP allows us to do this through ad-hoc constructs. When the grammar
is parsed, we can apply transformations to the raw data to create our own structures,
enumerations, etc.

