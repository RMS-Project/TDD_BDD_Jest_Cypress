**Need to have Node installed**
https://expressjs.com/pt-br/starter/generator.html
**Install Yarn**
```
npm install Yarn
```
**Install Express globally**
```
sudo npm install express-generator -g
```
**Create the project using the Express ejs template**
```
express tdd_bdd_jasmine_cucumber --view=ejs
```
**More models**
https://expressjs.com/en/resources/template-engines.html
**Install project dependencies**
```
yarn install
```
**Install Jest**
```
yarn add --dev jest
```
**Install Cypress**
```
yarn add --dev cypress
```
**Exemplos de código de teste**
Abra a pasta cypress:
- fixtures - Dados para teste.
- integration - Códigos exemplos para implementação de testes.

<br>

** Create an updated project with the script: **
**Create an updated project with the script:**
```
#!/bin/bash
express form --view=ejs
cd form
yarn install
yarn add --dev jest
yarn add --dev cypress
google-chrome 127.0.0.1:3000 &
firefox 127.0.0.1:3000 &
yarn start
```