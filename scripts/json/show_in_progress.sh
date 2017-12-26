# sh scripts/json/show_in_progress.sh
curl "https://aqueous-atoll-85096.herokuapp.com/games?over=false" \
--include \
--request GET \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}"

echo
