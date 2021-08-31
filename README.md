
# Docker builds
```
cp Dockerfile.prod Dockerfile
docker build -t dockerizenodeapp ./

cp Dockerfile.dev Dockerfile
docker build -t dockerizenodeapp_dev ./
```

# Docker run
```
docker run dockerizenodeapp -p '4242:4242' -e HOST='127.0.0.1' -e PORT='4242'

docker run dockerizenodeapp_dev -p '4242:4242' -e HOST='127.0.0.1' -e PORT='4242' -v $(pwd)/src:/app/src -d
```

# Docker 