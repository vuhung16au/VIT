#!/bin/bash

set -euo pipefail

export OUTPUT_GIF="images/interface-playground.gif"
bash "$(dirname "$0")/../../../tools/recording/convert-to-gif.sh"
