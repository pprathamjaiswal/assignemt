const express = require('express');
const app = express();
const port = 8000;
const cors = require("cors")

app.use(express.json());
app.use(cors());

app.use("/students", require("./routes/student.router"))
app.use("/subjects", require("./routes/subject.router"))

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
