# TODO: finish setting up SMTP stuff

# #!/usr/bin/env sh
# # build /etc/msmtprc from env vars
# cat > /etc/msmtprc <<EOF
# defaults
# account default
# host $SMTP_HOST
# port $SMTP_PORT
# auth on
# user $SMTP_USER
# password $SMTP_PASS
# from $SMTP_FROM
# tls on
# tls_trust_file /etc/ssl/certs/ca-certificates.crt
# EOF

# exec "$@"  # hand off to crond
