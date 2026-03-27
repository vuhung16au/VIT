#!/bin/bash

set -euo pipefail

export OUTPUT_GIF="images/doctor-app.gif"
bash "$(dirname "$0")/../../../tools/recording/convert-to-gif.sh"
