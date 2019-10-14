FROM node:10

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . /home/frontend-react

WORKDIR /home/frontend-react

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production