#!/bin/sh

# sh scripts/json/create.sh
curl "https://aqueous-atoll-85096.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{}'
