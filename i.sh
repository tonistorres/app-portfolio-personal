#! /usr/bin/zsh

MENU="
---------------------
| MENU: H E R O K U |
------------------------
| F R O N T   -   E N D |
|--------------------------------------------------
| 1 - Implantando um App Front-End na Heroku      |
|--------------------------------------------------
IMPORTANT WARNING :                             
Before deploying your App make a push to github repository.
Execute:
git init
git add .
git commit -m'feat: initial commit'
git push -u origin branch                                       
---------------------------------------------------
"

LISTREMOTEPROJECT(){
    git remote -v
}

MAIN(){
echo "$MENU"    
LISTREMOTEPROJECT
echo "Para terminar a execução do comando pressione ENTER"
heroku create -b mars/create-react-app
git remote -v
git push heroku master
}

MAIN

