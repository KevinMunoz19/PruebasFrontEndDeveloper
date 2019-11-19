curl "http://localhost:3000/posts"
sleep 1
curl -H "Content-Type: application/json" -X POST -d '{"first_name": " Kevin", "last_name": "Munoz"}'  "http://localhost:3000/posts"
sleep 1
url "http://localhost:3000/posts"
sleep 1
curl -X DELETE "http://localhost:3000/posts"
