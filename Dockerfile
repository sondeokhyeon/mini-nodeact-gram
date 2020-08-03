FROM node:latest

RUN apt -y -qq update

RUN mkdir /app
