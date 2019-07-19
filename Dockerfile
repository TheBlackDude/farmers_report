FROM node:alpine

#################################################################
## setup containr
#################################################################

WORKDIR /code

COPY docker-setup.sh apt-packages.txt /code/

#################################################################
## install app
## copy files one by one and split commands to use docker cache
#################################################################

# Node Deps
COPY package.json /code/package.json
RUN npm install -g mocha --loglevel silent

ENV PATH /code/node_modules/.bin:$PATH

################################################################
## copy all the files inside the container
################################################################
COPY ./ /code

# Init Database
COPY import.sql /docker-entrypoint-initdb.d/

################################################################
## set the entrypoint
################################################################
ENTRYPOINT ["/code/entrypoint.sh"]