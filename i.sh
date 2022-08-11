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

CREATEAPP(){
# https://stackabuse.com/how-to-deploy-a-react-app-to-heroku/    
heroku create -a app-tonis-torres
}

# CREATEAPP

REGISTERHEROKU(){
# E, em seguida, registre o aplicativo que criamos anteriormente no Heroku 
#como o repositório remoto para o local que inicializamos na etapa anterior:
heroku git:remote -a app-tonis-torres
}

# REGISTERHEROKU



ADDBUILDPACK(){
    # adicionar o buildpack do React:
    heroku buildpacks:set mars/create-react-app
}

# ADDBUILDPACK

PUSHREPOHEROKU(){
git push heroku master
}

PUSHREPOHEROKU


MAIN(){
echo "$MENU"    
LISTREMOTEPROJECT
CREATEAPP
REGISTERHEROKU


}


