#!/bin/bash

set -euo pipefail

export OUTPUT_GIF="images/cognitive-social-ux.gif"
bash "$(dirname "$0")/../../../tools/recording/convert-to-gif.sh"
