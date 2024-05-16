# Lab 02: Intermediate representation
Intermediate representations (IR) are the crux of any compiler. This is the representation
of the code that you'll work on for your optimizations, checks, and other stuff.

> Intermediate representations are often *common* to multiple languages. This is how
> frameworks like LLVM can be used so widely: you just need a frontend that transforms
> your code into LLVM's intermediate representation and you get all the niceties
> and plateform support that the LLVM backend implements.

> It can even happen that compilers have multiple IR, each with their own speciality.
> CompCert, a formally proven compiler, has about 9 of them! But this is an extreme example.

## Classes of intermediate representations
### Syntactical representations
Actually, the AST you created during the previous lab *is* an intermediate representation!
Just... not a really practical one. It is a so-called **syntactical** representation, 
meaning it represents the syntax of your program in a computer-friendly way.

Another example of syntactical representation is a Direct Acyclic Graph (DAG), which
acts just like an AST, but can reuse common subexpressions.

Such representations are usually great for pretty-printing, language servers, 
autocomplete tools and whatnot.

### Graphical representations
On the other hand, you have **graphical** representations. These include things like
Control-Flow Graphs (CFG), which encodes paths that might be traversed in a program
during its execution, or Dependency Graphs (DG), which represents the flow of information.

A CFG would represent a while loop as a cycle, and a DG may be more useful to encode
the order in which operations should take place to optimize that. These representations
are more useful for optimization.

### Linear representations
Finally, **linear** representations tend to stick to machine code more faithfully.
They are mainly used as the final part of the compilation pipeline, when one needs
to convert high-level representations to actual executable instructions.

Exemples of linear representations include the three-address code, in which each instruction
has at most three operands, or abstract stack machines, which emulate a... high level
stack machine.

## What do we pick?
We'll use a total of three intermediate representations:
- the **AST**, which we already implemented
- a **Control Flow Graph** with **Static Single Assignment** (SSA) form, which we'll implement in this lab
- a **Dependancy Graph** with an **Abstract Stack Machine**, but we'll wait until we work on generating Uxn code for this one
