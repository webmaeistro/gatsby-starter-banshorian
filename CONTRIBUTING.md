add to the examples in this repo?
-fork repo.
-make a new branch name it something fitting
-pull request

found something wrong / added something cool?
-fork master
-do your magic
-pull request master

if you want to grab this repo and go full-on golloum with his precious
download the zip.

if you need to or want to grab some updates i may have pushed?

git remote add upstream <this repo's https url.git> master
git fetch/pull upstream
git checkout upstream/master
git checkout master (back to your repo)
git add .
git commit -am "init commit message"
git remove remote upstream
git remote -v ( double check its only your repo in pull / fetch)
git push -u
