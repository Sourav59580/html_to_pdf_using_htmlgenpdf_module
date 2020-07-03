const toPdf = require("html-gen-pdf");
 
toPdf("./index.html", "./just_example.pdf", {
  format: "A4",
  landscape: true
});