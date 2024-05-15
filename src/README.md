# MiniLua: A project for learning general compilation concepts
During these labs, you'll implement small bits and pieces of a real compiler from
the [Lua language](https://www.lua.org/home.html) to the 
[Uxn stack machine](https://wiki.xxiivv.com/site/uxn.html). Both the target architecture
and source language were chosen for their "minimal nature". 
[Lua's complete syntax](https://www.lua.org/manual/5.4/manual.html#9) fits
on a computer screen, and the whole [Uxn opcode specification](https://wiki.xxiivv.com/site/uxntal_opcodes.html) 
consists around 32 different opcodes!

At the same time, both are powerful enough for you to create small visual applications,
meaning you get to play with your compiler (once it's done)!

## Organisation
The MiniLua project is split into three(-and-a-half) labs:
- [Lab 01: Parsing the Lua language](./lab1/index.html)
- [Lab 02: Intermediate representation](./lab2/index.html)
- [Lab 03: Producing a Uxn ROM](./lab3/index.html)
- [Bonus lab: Optimizations on the intermediate representation](./lab4/index.html)
