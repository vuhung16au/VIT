#!/bin/bash

OUTPUT_GIF="images/patient-journey.gif"
PALETTE="/tmp/palette.png"

# Find the actual video file (Playwright adds timestamp)
ACTUAL_VIDEO=$(ls -t images/*.webm 2>/dev/null | head -1)

if [ -z "$ACTUAL_VIDEO" ]; then
  echo "❌ No video file found in images/"
  exit 1
fi

echo "📹 Converting $ACTUAL_VIDEO to GIF..."

# Generate palette for better quality
ffmpeg -i "$ACTUAL_VIDEO" -vf "fps=10,scale=960:-1:flags=lanczos,palettegen" -y "$PALETTE" 2>/dev/null

# Convert to GIF using palette
ffmpeg -i "$ACTUAL_VIDEO" -i "$PALETTE" -filter_complex \
  "fps=10,scale=960:-1:flags=lanczos[x];[x][1:v]paletteuse" \
  -y "$OUTPUT_GIF" 2>/dev/null

# Clean up
rm "$PALETTE" 2>/dev/null
rm "$ACTUAL_VIDEO" 2>/dev/null

echo "✅ GIF created: $OUTPUT_GIF"
ls -lh "$OUTPUT_GIF"
