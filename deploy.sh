#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git remote add origin https://github.com/nate-sys/nate-sys.github.io
git push -uf origin master

cd -

