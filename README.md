# deepseek01
* [ ] Create api keys

* [ ] Launch the app

* [x] Test

How to launch the app:

```node
    git clone https://github.com/supertren/deepseek01.git
    cd deepseek01
    npm init -y
    npm install openai dotenv express
    node --env-file=.env server.mjs

Test with cURL:

# Search request
curl -X POST http://localhost:3000/search \
  -H "Content-Type: application/json" \
  -d '{"query": "Latest advancements in renewable energy 2023"}'

# Analysis request
curl -X POST http://localhost:3000/analyze \
  -H "Content-Type: application/json" \
  -d '{"text": "Tesla announced new solar roof technology with 25% improved efficiency in Q4 2023."}'
```
