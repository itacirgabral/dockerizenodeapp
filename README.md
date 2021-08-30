```
cp Dockerfile.prod Dockerfile
docker build -t itacirgabral/dockerizenodeapp:v0.0.1 ./
docker push  itacirgabral/dockerizenodeapp:v0.0.1 

docker run itacirgabral/dockerizenodeapp:v0.0.1 -p '3000:3000' -e HOST='127.0.0.1' -e PORT='3000'
```

```
cp Dockerfile.dev Dockerfile
docker build -t itacirgabral/dockerizenodeapp:v0.0.1_dev ./
docker push itacirgabral/dockerizenodeapp:v0.0.1_dev

docker run itacirgabral/dockerizenodeapp:v0.0.1_dev -p '3000:3000' -e HOST='127.0.0.1' -e PORT='3000' -v $(pwd)/src:/app/src -d
```

todo
- https://www.digitalocean.com/community/tutorials/how-to-develop-applications-on-kubernetes-with-okteto