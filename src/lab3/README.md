# Lab 03: Producing a Uxn ROM
Phew, this was tedious, but we now have a complete intermediate representation
of our Lua program that is way lower level then when we began. I think we're ready
to create some Uxn code from that, aren't we?

Most of this lab is inspired heavily by Mark Shannon's Master's thesis, "A C Compiler
for Stack Machines". Obviously, we won't implement an entire thesis during this lab,
but the main ideas will stay.

## What do we need?
We'll be using an **abstract stack machine** (ASM for short) using the *stack-region 
framework* presented in Mark Shannon's thesis. This will allow us to reason about 
how we would access our values within a real Uxn machine.


