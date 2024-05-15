# What we've done so far
In this first lab, we hopefully:
- have a working parser for the Lua language which constructs a usable AST.
- defined a `Visitor` trait which we'll implement for a bunch of different treatments of said AST.
- created a first `Visitor` who's job is to pretty print our AST back to readable code.

For now, these might seem like baby steps. Where are the optimizations? When are
we going to generate executable code??? All comes in due time, and we'll start
tackling this in the next lab.

For now, make sure that your implementation is well tested and fully funtional up
to this point. You've just laid the groundwork for your compiler, and it needs to
be rock solid!
