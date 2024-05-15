# Bonus lab: Optimizations
Now that we've got ourselves a compiler that actually compiles Lua code to
Uxn instructions, it's time for the fun: **optimization**!

This part of the labs is *optional*. Building a compiler that produces working
code is already difficult enough. However, we still recommand trying to implement
*at least one* optimization, for completeness' sake.

Optimizations are (except for special cases like CompCert) the only part of our compiler
that *might* lead to miscompilations if we're not careful. We try to keep semantics
intact, but bugs easily slip in. On the same page, sometimes optimizations *don't
optimize*. There's no guarantee, you may find an edge case where performance just gets
worse! But generally speaking, it works.
