# Lua's syntax
A stated in [Lua 101](./lua101.html), Lua is a pretty straightforward scripting
language. The only feature that might be complex to implement are tables, but we
explicitely leave them out of this book.

Given this, here is the full Lua syntax we'll be working on:
```
chunk ::= block

block ::= {stat} [retstat]

stat ::=  ‘;’ | 
	 varlist ‘=’ explist | 
	 functioncall | 
	 label | 
	 break | 
	 goto Name | 
	 do block end | 
	 while exp do block end | 
	 repeat block until exp | 
	 if exp then block {elseif exp then block} [else block] end | 
	 for Name ‘=’ exp ‘,’ exp [‘,’ exp] do block end | 
	 for namelist in explist do block end | 
	 function funcname funcbody | 
	 local function Name funcbody | 
	 local attnamelist [‘=’ explist] 

attnamelist ::=  Name attrib {‘,’ Name attrib}

attrib ::= [‘<’ Name ‘>’]

retstat ::= return [explist] [‘;’]

label ::= ‘::’ Name ‘::’

funcname ::= Name {‘.’ Name} [‘:’ Name]

varlist ::= var {‘,’ var}

var ::=  Name | prefixexp ‘[’ exp ‘]’ | prefixexp ‘.’ Name 

namelist ::= Name {‘,’ Name}

explist ::= exp {‘,’ exp}

exp ::=  nil | false | true | Numeral | LiteralString | ‘...’ | functiondef | 
	 prefixexp | exp binop exp | unop exp 

prefixexp ::= var | functioncall | ‘(’ exp ‘)’

functioncall ::=  prefixexp args | prefixexp ‘:’ Name args 

args ::=  ‘(’ [explist] ‘)’ | LiteralString 

functiondef ::= function funcbody

funcbody ::= ‘(’ [parlist] ‘)’ block end

parlist ::= namelist [‘,’ ‘...’] | ‘...’

binop ::=  ‘+’ | ‘-’ | ‘*’ | ‘/’ | ‘//’ | ‘^’ | ‘%’ | 
	 ‘&’ | ‘~’ | ‘|’ | ‘>>’ | ‘<<’ | ‘..’ | 
	 ‘<’ | ‘<=’ | ‘>’ | ‘>=’ | ‘==’ | ‘~=’ | 
	 and | or

unop ::= ‘-’ | not | ‘#’ | ‘~’
```

It is expressed in extended BNF. `{A}` means 0 or more times `A`, `[A]` means an
optional `A`.
Terminals are capitalized, like `Numeral`, `Name`, etc. These will already be implemented
in our grammar, you can look at how they are presented by should not worry about them too much.
- `Name` represents an identifier, composed of letters, digits and underscores. `identi_fier` is valid, `9%identifier` is not.
- `Numeral` represents a number value, like `10` or `0.30E`.
- `LiteralString` represents... a string!

The basic unit of the Lua grammar is the `chunk`. It represents the AST from a `.lua`
file.

# Example
We'll try to parse the typical "hello world" using our grammar, here's the sample code:
```lua
print("Hello, world!")
```
We start from the `chunk`, which itself is a `block`. Our `block` contains a list of
0 or more statements. Here, our statement looks like `print("Hello, world!")`.
The little `A | B` means our statement is either `A` or `B`.

So we try `varlist '=' explist`... Doesn't look like our example, we have no `=` in
sight! Next up is `functioncall`, now this sounds more like it.

We keep going down our little grammar, matching things as they go, and we end up with this tree:
TODO: show the tree

This is our AST in all its glory!

Now all that's left to do is to automate this, because this would be tedious otherwise.
Let's jump into implementing a parser for Lua in LALRPOP.
