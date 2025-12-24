FROM node:20-bullseye

WORKDIR /app

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/AhmedShaykh/Expense-Tracker-App-With-React.JS.git .
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
