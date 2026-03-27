#!/bin/bash

set -euo pipefail

export OUTPUT_GIF="images/booking-app.gif"
bash "$(dirname "$0")/../../../tools/recording/convert-to-gif.sh"
