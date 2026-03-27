#!/bin/bash

set -euo pipefail

export OUTPUT_GIF="images/design-system-studio.gif"
bash "$(dirname "$0")/../../../tools/recording/convert-to-gif.sh"
