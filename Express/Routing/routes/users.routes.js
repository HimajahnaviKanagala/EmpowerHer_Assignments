import express from "express";
import fs from "fs";
const router = express.Router();

function readData() {
  return JSON.parse(fs.readFileSync("./db.json", "utf-8"));
}

function writeData(data) {
  fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
}

router.post("/add-user", (req, res) => {
  const data = readData();
  const newUser = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email,
  };
  data.users.push(newUser);
  writeData(data);
  res.status(201).json(newUser);
});
router.get("/", (req, res) => {
  const data = readData();
  res.json(data.users);
});
router.get("/:userId", (req, res) => {
  const data = readData();
  const user = data.users.find(
    (u) => String(u.id) === String(req.params.userId)
  );
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});
router.put("/update/:userId", (req, res) => {
  const data = readData();
  const user = data.users.find(
    (u) => String(u.id) === String(req.params.userId)
  );
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  writeData(data);
  res.json(user);
});
router.delete("/delete/:userId", (req, res) => {
  const data = readData();
  const newUsers = data.users.filter(
    (u) => String(u.id) !== String(req.params.userId)
  );
  if (newUsers.length === data.users.length) {
    return res.status(404).json({ message: "User not found" });
  }
  data.users = newUsers;
  writeData(data);
  res.json({ message: "User deleted successfully" });
});

export default router;
