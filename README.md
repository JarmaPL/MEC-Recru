This project Font-End was created with [Create React App](https://github.com/facebook/create-react-app).<br>
This project Back-End was created with [ExpressJS](https://github.com/expressjs/expressjs.com).<br>

## Available Scripts

In client:<br>
-> yarn start - Developer React server<br>
-> serve -s build - Production server<br>
In server:<br>
-> yarn start - server start

## Project Idea

I was start this project with chosee technologies, so I decaite to use React becouse I have the most expirience with this framework, next I build maind map what i need and how to make that, next i devait to use ExpressJs becouse its very good framework to build backend and working very well with MongoDB.

## Hot to lunch MEC?

    1. Download project by git pull ${link to repo}
    2. Lunch Docker and follow this commends:
        a: `sudo docker pull mongo`
        b: `sudo docker run -it -v mongodata:/${path to saving data} --name mongodb -d mongo
    3. Open project folder and follow commends:
        a: `cd server`
        b: `yarn install`
        b: `nano .env` -> type "MONGODB_URI=${link to mongodb and add "/${Database name", default: mongodb://127.0.0.1:27017/mec} -> save by Ctrl + O (on MacOS)`
        c: `yarn start`
        d: `Open secound terminal`
        e: `cd client`
        f: `nano .env` -> type "REACT_APP_SERVER_PATH=${path to server, default: http://localhost:4000} -> save by Ctrl + O (on MacOS)`
        g: `server -s build`
    4. Lunch browser and connect to localhost:5000

## Contact

    Szymon Jarmuszczak
    mail: szymon.jarmuszczak@gmail.com
    tel: (+48) 572-344-506
