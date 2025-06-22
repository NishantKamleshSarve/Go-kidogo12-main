const express = require("express");
const cors = require("cors");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Proxy for /userhome
app.post("/api/userhome", async (req, res) => {
  try {
    const response = await fetch("https://testapp.gokidogo.com/webapi/api.php/userhome", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error in /userhome:", error);
    res.status(500).json({ error: error.message });
  }
});

// Proxy for /restaurentdetail
app.post("/api/restaurentdetail", async (req, res) => {
  try {
    const response = await fetch("https://testapp.gokidogo.com/webapi/api.php/restaurentdetail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error in /restaurentdetail:", error);
    res.status(500).json({ error: error.message });
  }
});

// Serve frontend static files
app.use(express.static(path.join(__dirname, "dist")));

// Fallback route for React Router
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

// Start the server LAST
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
