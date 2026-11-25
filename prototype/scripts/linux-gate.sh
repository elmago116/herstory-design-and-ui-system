#!/usr/bin/env bash
# linux-gate.sh — run the pixel gate inside a Linux container so the text stack
# matches Subframe's export renderer (FreeType). §11 option 1.
#
# Requires Docker (not present on this Mac as of 2026-11-17; run elsewhere or
# after installing docker/colima).
#
#   scripts/linux-gate.sh [--only UI-17,UI-27] [--out dir]
set -euo pipefail
cd "$(dirname "$0")/.."

ARGS=()
if [[ "$1" == "--only" ]]; then
  ARGS+=(-- --only "$2"); shift 2
fi

docker build -f Dockerfile.linux-gate -t herstory-linux-gate .
docker run --rm -v "$PWD":/app herstory-linux-gate \
  sh -c "npm run build && node scripts/shoot.mjs --all ${ARGS[*]:-} && node scripts/diff.mjs --all ${ARGS[*]:-} && node scripts/gen-yaml.mjs"
echo "[linux-gate] done — shots, diffs and uis.yaml refreshed from the Linux renderer."
