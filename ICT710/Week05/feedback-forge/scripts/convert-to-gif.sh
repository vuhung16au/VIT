#!/bin/bash

set -euo pipefail

export OUTPUT_GIF="images/feedback-forge.gif"
bash "$(dirname "$0")/../../../tools/recording/convert-to-gif.sh"
