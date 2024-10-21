
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


## Send Notification Setup

First, you should setup your Mail Config in the files which is the same as above.
```
server/apiKey.js
```

Next, the code has been placed in the following folder, you can change it to what you want.
```
server/sendMailer/send.js
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
const googleMapKey='' // https://cloud.google.com/apis?hl=zh-TW
const weatherKey = '' // https://www.visualcrossing.com/weather-api
const openaiKey=''  // https://platform.openai.com/
module.exports = {
    openaiKey,FugleAPIKey,NewsAPIKey,googleMapKey,weatherKey
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

# Generate SSL Certification
```
// 獲取免費 Domain Name
https://my.noip.com/

// 安裝 Let's Encrypt
sudo apt update
sudo apt install certbot

// 手動獲取憑證
sudo certbot certonly --standalone

// 自動更新憑證
sudo certbot renew --dry-run

```

## Authors

- [@SCLemon](https://github.com/SCLemon)  (2024/04/01 ~ Current)


## Support

For support, email blc0000421@gmail.com
