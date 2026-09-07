#!/bin/bash
cd "$(dirname "$0")"
URL="http://localhost:8000/"
(sleep 1; open "$URL") &
python3 -m http.server 8000
