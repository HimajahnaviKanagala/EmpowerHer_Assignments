import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "src", "db.json");

export default function uniqueEmail(req, res, next) {
  const data = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  const users = data.users || [];

  const exists = users.some(
    (user) => user.email === req.body.email
  );

  if (exists) {
    return res.status(409).json({
      error: "Email already exists"
    });
  }

  next();
}
