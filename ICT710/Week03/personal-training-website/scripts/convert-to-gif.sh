#!/bin/bash

set -euo pipefail

export OUTPUT_GIF="images/personal-training-website.gif"
bash "$(dirname "$0")/../../../tools/recording/convert-to-gif.sh"
