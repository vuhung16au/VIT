#!/bin/bash

set -euo pipefail

OUTPUT_GIF="${OUTPUT_GIF:-images/demo.gif}"
FPS="${FPS:-10}"
SCALE="${SCALE:-960}"
PALETTE="${PALETTE:-/tmp/ict710-recording-palette.png}"

ACTUAL_VIDEO=$(ls -t images/*.webm 2>/dev/null | head -1 || true)

if [ -z "${ACTUAL_VIDEO}" ]; then
  echo "No .webm recording found in images/"
  exit 1
fi

echo "Converting ${ACTUAL_VIDEO} to ${OUTPUT_GIF}"

ffmpeg -i "${ACTUAL_VIDEO}" -vf "fps=${FPS},scale=${SCALE}:-1:flags=lanczos,palettegen" -y "${PALETTE}" >/dev/null 2>&1
ffmpeg -i "${ACTUAL_VIDEO}" -i "${PALETTE}" -filter_complex \
  "fps=${FPS},scale=${SCALE}:-1:flags=lanczos[x];[x][1:v]paletteuse" \
  -y "${OUTPUT_GIF}" >/dev/null 2>&1

rm -f "${PALETTE}"
rm -f "${ACTUAL_VIDEO}"

echo "GIF created at ${OUTPUT_GIF}"
ls -lh "${OUTPUT_GIF}"
