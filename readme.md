npm install -g ionic
npm install -g cordova
ionic start myApp sidemenu
ionic serve
#build
ionic cordova build android
#db
ionic cordova plugin add cordova-sqlite-storage --save
npm install typeorm --save
npm install @types/node --save-dev
npm i -D @angular-builders/custom-webpack
npm install --save @angular-builders/dev-server
ng serve equivelent in angular.json @angular-builders/custom-webpack:dev-server
npm i sql.js@^0.5.0 --save
#anglar.json
@angular-devkit/build-angular:browser
@angular-builders/dev-server:generic
build -> options ->
"customWebpackConfig": {
    "path": "./config/webpack.config.js"
},