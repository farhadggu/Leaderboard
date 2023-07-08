FROM node:alpine
 
WORKDIR /app
# install app dependencies
COPY package.json /app
 
RUN npm install
 
# add app
COPY . /app
EXPOSE 3000
 
# start app
CMD ["npm", "start"]