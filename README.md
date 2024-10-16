
# MED Reminder


This is a daily application app created by integrating AI technology, which includes most commonly used tools to assist you in effectively managing daily life and enhancing functional convenience.


## Environment Requirements

- Vue CLI
```
npm install -g @vue/cli
```
- NodeJS
```
https://nodejs.org/en/download
```
- MongoDB
```
https://www.mongodb.com/download-center/community/releases
```

## Generate SSL Certificate (Only HTTPS Required)
Put the ``key.pem`` & ``cert.pem`` at the previous level directory of this project.
```
The Directory's Relative Path is shown as  '../MED_public'
```

## API Keys

To run this project, you will need to add the following environment variables to your apiKey.js file

OpenAI API `API_KEY`
```
https://platform.openai.com/

(You should add this parameter named as 'openaiKey' and export it manually because Github does not allow developers to upload content about OpenAI Key)
```

Fugle API `API_KEY`
```
https://newsapi.org/s/taiwan-news-api
```

News API `API_KEY`
```
https://developer.fugle.tw/
```

## AppScript Setup
The code has been placed in the following folder
```
server/appscript/appscript.js
```
You only need to create an appscript at Google Platform, and get an url, and put it in the following file.
```
server/appscript/send.js
```

## Deployment
Clone this Project
```
git clone https://github.com/SCLemon/MED_public.git 
```

Go Into the Project Directory
```
cd MED_public
(now you will be at directory as 'MED_public')
```
Install Package for Frontend Pages
```
npm i
```

Continue, input the following code to go into the Server Directory
```
cd server
(now you will be at directory as 'MED_public/server')
```

Install Package for Server Side
```
npm i
```
Setup the apiKey
```
nano apiKey.js
```

And Put the following code into the apiKey.js
```
const FugleAPIKey = '' // https://developer.fugle.tw/
const NewsAPIKey = '' // https://newsapi.org/s/taiwan-news-api
const openaiKey=''  // https://platform.openai.com/
module.exports = {
    openaiKey,FugleAPIKey,NewsAPIKey
}
```

Finally, go back to the Previous level directory
```
cd ../
(now you will be at directory as 'MED_public')
```

Start the Database
```
sudo npm run openDB
(You should Input this Code first, to initialize the Database)
```

Start the Project
```
sudo npm run http_start (for http environment)
sudo npm run https_start (for https environment)
```

## Authors

- [@SCLemon](https://github.com/SCLemon)  (2024/04/01 ~ Current)


## Support

For support, email blc0000421@gmail.com
