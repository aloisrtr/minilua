# Lab 01: Parsing Lua
The first step towards compiling any source code is to actually read it.

Text is an inneficient format to compile from, so we'll first transform it into
some data structure that is easier to use: an **Abstract Syntax Tree** or **AST** for short.

We could write our own parser by hand, but this book is focused on compiling, not parsing.
Language hackers instead often use **parser generators** to do the heavy lifting for
them. It saves time, energy, and reduces hair loss.

> When writing a real, production grade compiler, you'd probably want to opt into
> writing your parser by hand. It is more efficient, easier to maintain in the long
> run, and more powerful in the sense that you can parse *virtually* anything.

Here, we'll use [LALRPOP](https://github.com/lalrpop/lalrpop), a Rust parser generator
which is pretty easy to use, albeit still under development. There are many alternative, such 
as [ANTLR](https://www.antlr.org/), [GNU Bison](https://www.gnu.org/software/bison/), 
[Yacc](https://silcnitc.github.io/yacc.html), or even [pest](https://pest.rs/) if 
you want to stay in the safe Rust world.

Next up will be a little reminder of the abstract syntax of Lua, then we'll get into
the nitty gritty details of implementing our parser. To check that everything went
right, you'll have to play around with the generated AST by writing a pretty printer.
