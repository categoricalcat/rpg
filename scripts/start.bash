#!/bin/bash

set -Eaeuo pipefail

docker compose build

docker compose up -d

docker compose logs -f
