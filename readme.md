#### mini-nodeact-gram

back : node(express)  
front : reactJS  
db : mariadb  
DBNAME : nodearct_gram

실행방법 

App폴더에서 dockerfile build(docker build -t mini-nodeactgram ./)하고 후 상위폴더로 나와서 docker-compose up -d 를 통해 실행 후 docker ps를 통해 컨테이너 아이디를 확인 후   
docker exec -it 컨테이너 아이디 /bin/bash(win8의 경우에는 //bin/bash)를 통해   
이미지안에서 직접 cd /app 폴더에 들어가 server폴더에서 라이브러리 설치(yarn 치면 설치됨)하고 yarn dev 
client폴더에서 라이브러리 설치(yarn)하고 yarn start하면 아이피를 통해 접근이 가능(docker-compose로 바인딩함)함

아이피:4000/api/sync를 하면 테이블이 만들어지고 이후 아이피:3000을 통해 이미지 업로드 가능



