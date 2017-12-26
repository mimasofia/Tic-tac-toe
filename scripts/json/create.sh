#!/bin/sh

# sh scripts/json/create.sh
curl "https://ga-library-api.herokuapp.com/examples" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
    }
  }'
