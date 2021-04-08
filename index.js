require('dotenv').config()

console.log("This server is bitchin'")

const express = require('express')

const server = express()

server.use(express.json())

