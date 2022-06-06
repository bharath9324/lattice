FROM ubuntu

RUN apt-get update && \
	apt-get upgrade --assume-yes

# install basic tools
RUN apt-get install --no-install-recommends -y \
    python3.9 python3-pip python-dev-is-python3 && \
    apt-get -y install git && \
    apt-get install curl gnupg -yq && \
    apt-get -y install net-tools

# install node and npm
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get -y install nodejs && \
    npm install

ENV PYTHONUNBUFFERED=1
ENV SHELL=/bin/bash
WORKDIR /Users/bharathsubramanyam/Development
RUN pip install --upgrade pip 
COPY ./requirements.txt /Users/bharathsubramanyam/Development
RUN pip install -r requirements.txt
RUN npm install
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
