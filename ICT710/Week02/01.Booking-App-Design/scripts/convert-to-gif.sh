#!/bin/bash

set -euo pipefail

export OUTPUT_GIF="images/booking-app-design.gif"
bash "$(dirname "$0")/../../../tools/recording/convert-to-gif.sh"
