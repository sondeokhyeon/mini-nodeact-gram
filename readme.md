#### mini-nodeact-gram

back : node(express)  
front : reactJS  
db : mariadb  
DBNAME : nodearct_gram
server/db/config.json

실행방법 

App폴더에 dockerfile build하고 후 docker-compose up -d 를 통해 실행 후  
docker ps를 통해 컨테이너 아이디를 확인 후   
docker exec -it 컨테이너 아이디 /bin/bash(win8의 경우에는 //bin/bash)를 통해   
이미지안에서 직접 cd /app 폴더에 들어가 server폴더에서 yarn dev client폴더에서 yarn start하면  
아이피를 통해 접근이 가능(docker-compose로 바인딩함) 



