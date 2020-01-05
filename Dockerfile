
FROM node:8
#Make app directory in docker image
RUN mkdir /app
WORKDIR /app
COPY /src /app/src
#Install all dependencies in docker image
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install 

#Expose port 3000 because thats where npm start binds too via create react app
EXPOSE 3000