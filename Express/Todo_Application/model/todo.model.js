import fs from 'fs';
export function readData() {
  return JSON.parse(fs.readFileSync("db.json", "utf-8"));
}
export function writeData(data) {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
}