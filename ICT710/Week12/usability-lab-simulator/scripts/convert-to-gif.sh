#!/bin/bash

set -euo pipefail

export OUTPUT_GIF="images/usability-lab-simulator.gif"
bash "$(dirname "$0")/../../../tools/recording/convert-to-gif.sh"
