curl "http://localhost:3000/profile"
curl -H "Content-Type: application/json" -X POST -d '{"first_name": " Kevin", "last_name": "Mardan"}'  "http://localhost:3000/profile"
sleep 1
curl -H 'Content-Type: application/json' -X PUT -d '{"first_name": "Douglas", "last_name": "Crockford"}' "http://localhost:3000/profile/0"
sleep 1
curl "http://localhost:3000/profile"
curl -X DELETE "http://localhost:3000/profile"
