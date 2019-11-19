const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

//let posts = [{
let posts = {
  //username: 'azat',
  userID: 'azat',
  id: '1',
  title: 'minim illum quis esse anim cillum esse quae quem irure',
  body: 'minim illum quis esse anim cillum esse quae quem irure'
}

app.get('/posts', (req, res) => {
  if (req.query.id) return res.send(posts[req.query.id])
  res.send(posts)
})

app.post('/posts', (req, res) => {
  if (!req.body.first_name.trim() || !req.body.last_name.trim()) return res.sendStatus(400)
  let obj = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }
  posts.push(obj)
  console.log('created', posts)
  res.sendStatus(201)
})

app.put('/posts/:id', (req,res) => {
  Object.assign(posts[req.params.id], req.body)
  console.log('updated', posts[req.params.id])
  res.sendStatus(204)
})

app.delete('/posts/:id', (req, res) => {
  posts.splice(req.param.id,1)
  console.log('deleted', posts)
  res.sendStatus(204)
})

app.listen(3000)
