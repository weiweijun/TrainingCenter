# TrainingCenter
This is the training center app for techbow

how to start your project?
skeleton → meat →  testing (development) → deploy → testing (production)
先用最简单的case去检测环境是不是搭建完成

git clone url..
ls到readme
npm init
npm install --save express jade
--save：把干的事情放在jason 的dependency里

建.gitignore 加入需要ignore commit的文件
git status
git add -A		-A 表示all
git status
git commit -m ‘first commit’
git push

npm install -g bower			-g一定在intall后面
不能以sodu运行用 sudo bower init --allow-root

sudo npm install bower --save -g
// server public folder 
// .bowerrc {"directory": "public/vendor"}
sudo bower init --allow-root
sudo bower install jquery --save --allow-root
sudo bower install toastr --save --allow-root
sudo bower install angular angular-resource angular-route --save --allow-root

// server.js
sudo npm install -g nodemon
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update
brew install mongodb
mkdir -p /data/db
mongod

mongo
use training
db.messages.insert({message: 'Hello Mango'})
show collections
