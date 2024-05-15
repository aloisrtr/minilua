Object.assign(window.search, {"doc_urls":["index.html#minilua-a-project-for-learning-general-compilation-concepts","index.html#organisation","lua101.html#lua-101","uxn101.html#uxn-101","lab1/index.html#lab-01-parsing-lua","lab2/index.html#lab-02-intermediate-representation","lab3/index.html#lab-03-producing-a-uxn-rom","lab4/index.html#bonus-lab-optimizations"],"index":{"documentStore":{"docInfo":{"0":{"body":52,"breadcrumbs":7,"title":6},"1":{"body":25,"breadcrumbs":2,"title":1},"2":{"body":0,"breadcrumbs":5,"title":2},"3":{"body":0,"breadcrumbs":5,"title":2},"4":{"body":0,"breadcrumbs":8,"title":4},"5":{"body":0,"breadcrumbs":8,"title":4},"6":{"body":0,"breadcrumbs":10,"title":5},"7":{"body":0,"breadcrumbs":6,"title":3}},"docs":{"0":{"body":"During these labs, you'll implement small bits and pieces of a real compiler from the Lua language to the Uxn stack machine . Both the target architecture and source language were chosen for their \"minimal nature\". Lua's complete syntax fits on a computer screen, and the whole Uxn opcode specification consists around 32 different opcodes! At the same time, both are powerful enough for you to create small visual applications, meaning you get to play with your compiler (once it's done)!","breadcrumbs":"Introduction » MiniLua: A project for learning general compilation concepts","id":"0","title":"MiniLua: A project for learning general compilation concepts"},"1":{"body":"The MiniLua project is split into three(-and-a-half) labs: Lab 01: Parsing the Lua language Lab 02: Intermediate representation Lab 03: Producing a Uxn ROM Bonus lab: Optimizations on the intermediate representation","breadcrumbs":"Introduction » Organisation","id":"1","title":"Organisation"},"2":{"body":"","breadcrumbs":"Introduction » Lua 101 » Lua 101","id":"2","title":"Lua 101"},"3":{"body":"","breadcrumbs":"Introduction » Uxn 101 » Uxn 101","id":"3","title":"Uxn 101"},"4":{"body":"","breadcrumbs":"Lab 01: Parsing Lua » Lab 01: Parsing Lua","id":"4","title":"Lab 01: Parsing Lua"},"5":{"body":"","breadcrumbs":"Lab 02: Intermediate representation » Lab 02: Intermediate representation","id":"5","title":"Lab 02: Intermediate representation"},"6":{"body":"","breadcrumbs":"Lab 03: Producing a Uxn ROM » Lab 03: Producing a Uxn ROM","id":"6","title":"Lab 03: Producing a Uxn ROM"},"7":{"body":"","breadcrumbs":"Bonus lab: Optimizations » Bonus lab: Optimizations","id":"7","title":"Bonus lab: Optimizations"}},"length":8,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"1":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.0}}},"2":{"df":2,"docs":{"1":{"tf":1.0},"5":{"tf":1.0}}},"3":{"df":2,"docs":{"1":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"1":{"0":{"1":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"2":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":2,"docs":{"1":{"tf":1.0},"7":{"tf":1.0}}}},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"n":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"h":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"5":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"t":{"'":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"a":{"b":{"df":6,"docs":{"0":{"tf":1.0},"1":{"tf":2.23606797749979},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"a":{"'":{"df":1,"docs":{"0":{"tf":1.0}}},"df":4,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{}}},"m":{"a":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"a":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{}}},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"n":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"p":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":2,"docs":{"1":{"tf":1.0},"7":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":2,"docs":{"1":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"5":{"tf":1.0}}}}}}}}}},"o":{"df":0,"docs":{},"m":{"df":2,"docs":{"1":{"tf":1.0},"6":{"tf":1.0}}}}},"s":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"t":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"x":{"df":0,"docs":{},"n":{"df":4,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0},"3":{"tf":1.0},"6":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"w":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"'":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"breadcrumbs":{"root":{"0":{"1":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.7320508075688772}}},"2":{"df":2,"docs":{"1":{"tf":1.0},"5":{"tf":1.7320508075688772}}},"3":{"df":2,"docs":{"1":{"tf":1.0},"6":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"1":{"0":{"1":{"df":2,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"2":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":2,"docs":{"1":{"tf":1.0},"7":{"tf":1.7320508075688772}}}},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":2.0}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"n":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"h":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"5":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":4,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"t":{"'":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"a":{"b":{"df":6,"docs":{"0":{"tf":1.0},"1":{"tf":2.23606797749979},"4":{"tf":1.7320508075688772},"5":{"tf":1.7320508075688772},"6":{"tf":1.7320508075688772},"7":{"tf":1.7320508075688772}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"u":{"a":{"'":{"df":1,"docs":{"0":{"tf":1.0}}},"df":4,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.7320508075688772},"4":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"m":{"a":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"a":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}},"df":0,"docs":{}}},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"n":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"p":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":2,"docs":{"1":{"tf":1.0},"7":{"tf":1.7320508075688772}}}}}},"r":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":2,"docs":{"1":{"tf":1.0},"6":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"5":{"tf":1.7320508075688772}}}}}}}}}},"o":{"df":0,"docs":{},"m":{"df":2,"docs":{"1":{"tf":1.0},"6":{"tf":1.7320508075688772}}}}},"s":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"t":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"x":{"df":0,"docs":{},"n":{"df":4,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0},"3":{"tf":1.7320508075688772},"6":{"tf":1.7320508075688772}}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"w":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"'":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"title":{"root":{"0":{"1":{"df":1,"docs":{"4":{"tf":1.0}}},"2":{"df":1,"docs":{"5":{"tf":1.0}}},"3":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"1":{"0":{"1":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"n":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}},"l":{"a":{"b":{"df":4,"docs":{"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"a":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"x":{"df":0,"docs":{},"n":{"df":2,"docs":{"3":{"tf":1.0},"6":{"tf":1.0}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});