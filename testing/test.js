const test = require("tape");

test("Tape is working", t => {
  t.pass();
  t.end();
});

app.get("/api/customer", (req, res) => {
  const customers = [
    { id: 1, firstName: "Suha" },
    { id: 2, firstName: "Bubs" },
    { id: 3, firstName: "Den" },
    { id: 4, firstName: "Matt" }
  ];
  res.json(customers);
});
