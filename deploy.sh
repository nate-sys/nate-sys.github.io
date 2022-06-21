#!/usr/bin/env sh

set -e

npm run build

cd dist

git add .
git commit -m 'deploy'

#git remote add origin https://github.com/nate-sys/nate-sys.github.io
git push origin master:dist

cd -

