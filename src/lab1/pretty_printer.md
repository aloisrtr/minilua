# Pretty printing our AST
Now that we have our AST all nice and cozy: *how* do we use it?

Well, ASTs are... trees. If you've ever worked with a tree before, you'll probably
know some algorithm to traverse them like DFS, BFS, etc.

But remember that our data is heterogenous when it comes to typing. We can visit
expressions that might or might not have integers in them, or other expressions, or
anything really.

Here comes our champion: **the visitor pattern**.
A visitor is a type that encapsulates an algorithm over heterogeneous data. Exactly
what we'd need!

## The Visitor trait
The `Visitor` trait allows a type to implement tree-traversal however it wants.
Here's what it would look like on a simple AST:
```rust
pub trait Visitor {
  fn visit_identifier(&mut self, id: &Identifier);
  fn visit_expression(&mut self, expr: &Expression);
  // you get the idea
}
```

On the other side of the coin, our AST types will have to implement a method to
*accept* the visitor into their home. It would look something like this:
```rust
pub enum Expression {
  // variants for our AST expression
}
impl Expression {
  pub fn accept<V: Visitor>(&self, visitor: &mut V) {
    match self {
      Expression::Add(lhs, rhs) => {
        visitor.visit_expression(lhs);
        visitor.visit_expression(rhs);
      },
      // a bunch of repetition here
    }
  }
}
```

That's it. That's all there is to visitors, and yet we'll use them all over our code.

> **ASSIGNMENT**: Define the `Visitor` trait for your AST.

## A pretty printer visitor
To showcase what we can do with visitors and how to use them, let's start simple
with a pretty printer of our AST.

Pretty printers are dead simple: visit a part of your AST, and print it nicely to
the console.

Let's say we have a simple language to express addition, subtraction, multiplication
and division of integers. Our AST would look something like this:
```rust
pub enum Operation {
  Add(Box<Operation>, Box<Operation>),
  Sub(Box<Operation>, Box<Operation>),
  Mul(Box<Operation>, Box<Operation>),
  Div(Box<Operation>, Box<Operation>),
  Number(i32)
}
```
And our visitor something like:
```rust
pub trait OperationVisitor {
  fn visit_operation(&mut self, operation: &Operation);
}
```
We'd want to implement our pretty printer as follows:
```rust
pub struct OperationPrettyPrinter;
impl OperationVisitor for OperationPrettyPrinter {
  fn visit_operation(&mut self, operation: &Operation) {
    match operation {
      Operation::Add(lhs, rhs) => {
        this.visit_operation(lhs);
        print!(" + ");
        this.visit_operation(rhs);
      },
      // Similiar for other operations
      // Operation::Sub(lhs, rhs) => ...
      Operation::Number(n) => {
        print!("{n}")
      }
    }
  }
}
```
If we run this visitor on an example AST:
```rust
let ast = Operation::Add(
  Operation::Sub(Operation::Number(3), Operation::Number(2)),
  Operation::Mul(Operation::Number(2), Operation::Number(0))
);
OperationPrettyPrinter.visit_operation(ast);
// Prints "3 - 2 + 2 * 0" to the console
```
> **ASSIGNMENT**: Now that you have an example of how visitors work, try to implement
> a visitor to pretty print your Lua AST back to its original form. Or event prettier!
