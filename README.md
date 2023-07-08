# Getting Started with LeaderBoard React

In the project directory first run this command to create env file for handling request calls for api:

```bash
echo "REACT_APP_BASE_URL=http://example.com" > .env
```

then build react project:

```bash
npm run build
```

then start project by your port you want:

```bash
npm start -p 3000
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Deploy App With Docker:

In the project directory first run this command to create env file for handling request calls for api:

```bash
echo "REACT_APP_BASE_URL=http://example.com" > .env
```

then build docker file: 

```bash
docker-compose build
```

run the docker file: 

```bash
docker-compose up -d
```