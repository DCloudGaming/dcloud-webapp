#!/usr/bin/env bash
CURRENT_DIR="$(cd "$(dirname "$0")" && pwd -P)"
USER="root"
SERVER_IP="159.223.91.60"
rsync -chav --progress "$CURRENT_DIR"/package.json "$USER"@"$SERVER_IP":/home/repos/dcloud-webapp/
rsync -chav --progress "$CURRENT_DIR"/*.sh "$USER"@"$SERVER_IP":/home/repos/dcloud-webapp/
# rsync -chav --progress "$CURRENT_DIR"/nginx_conf "$USER"@"$SERVER_IP":/etc/nginx/sites-enabled/declo.co
rsync -chav --progress "$CURRENT_DIR"/public "$USER"@"$SERVER_IP":/home/repos/dcloud-webapp/
rsync -chav --progress "$CURRENT_DIR"/src "$USER"@"$SERVER_IP":/home/repos/dcloud-webapp/
