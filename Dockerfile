FROM	donmate/debian-with-build-essential

###			BASIC INSTALLATIONS		###
RUN		apt-get update
RUN		apt-get install -y build-essential
RUN		apt-get install -y sudo zsh git tig vim
RUN		apt-get install -y netcat curl

###			Node.JS INSTALL 		###
RUN		curl -sL https://deb.nodesource.com/setup | bash
RUN		apt-get install -y nodejs
RUN		npm -g install npm@latest 2> /dev/null && echo "----- NPM INSTALLED -----"

###			NPM INSTALL				###
RUN 	npm install webpack webpack-dev-server -g
RUN		npm install gulp -g

###			USER ENVIRONEMENT		###
RUN		mkdir /www
WORKDIR	/www
ENV 	PORT 8080

### Start server ###
CMD 	npm start

