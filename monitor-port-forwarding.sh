#!/usr/bin/env sh

# monitor-port-forwarding.sh
# cron job that fetches public IP for renburnett.io and tests HTTP on port 80
# logs “OK” or “ERROR” with a timestamp to /var/log/monitor.log
# TODO: sends email on "ERROR"

PUBLIC_IP=$(curl -s https://ifconfig.me)
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
if curl -m 10 -I "http://${PUBLIC_IP}" \
     | grep -qE '^HTTP/[12]\.[01] [23]..'; then
  echo "${TIMESTAMP} [OK]   ${PUBLIC_IP}:80 reachable"
else
  echo "${TIMESTAMP} [FAIL] ${PUBLIC_IP}:80 NOT reachable"

  # TODO: make sure email fires
  echo -e "Subject:🚨 Port Monitor Failure\n\n${TIMESTAMP} [FAIL] ${PUBLIC_IP}:80 NOT reachable" \
  | msmtp "$ALERT_EMAIL"
fi
