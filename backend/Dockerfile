FROM node:10

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . /home/backend

WORKDIR /home/backend

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

RUN npm install -g nodemon

RUN npm install sequelize pg pg-hstore

#RUN npm install express body-parser morgan

RUN npm install -g sequelize-cli 

#RUN npm install babel-preset-env --save-dev npm install babel-cli --save npm install babel-core --save
