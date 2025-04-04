#!/bin/sh

# Start JSON Server in the background (it watches db.json for changes)
json-server --watch db.json --port 3001 &

# Start Next.js (production server)
npm run start
