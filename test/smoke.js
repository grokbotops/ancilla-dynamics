#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const files = ["index.html", path.join("privacy", "index.html")];
const company = "Ancilla Dynamics, LLC";
const email = "grokbotops@gmail.com";
// Rough street patterns: number + street-ish word
const streetRe = /\b\d{1,5}\s+[A-Za-z0-9.'-]+\s+(Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Lane|Ln|Drive|Dr|Court|Ct|Way)\b/i;

let failed = 0;
for (const rel of files) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) {
    console.error("MISSING:", rel);
    failed++;
    continue;
  }
  const text = fs.readFileSync(full, "utf8");
  if (!text.includes(company)) {
    console.error("MISSING company name in", rel);
    failed++;
  }
  if (!text.includes(email)) {
    console.error("MISSING email in", rel);
    failed++;
  }
  if (streetRe.test(text)) {
    console.error("STREET-LIKE ADDRESS PATTERN in", rel);
    failed++;
  }
}

if (failed) {
  console.error(`FAIL (${failed})`);
  process.exit(1);
}
console.log("OK: index + privacy present; company + email found; no street patterns");
