RED='\033[0;31m' # ${RED}
GREEN='\033[0;32m' # ${GREEN}

# get the argument message
message="$1"

# Use current date time in the commit message when its not passed
if [[ -z "${message// }" ]]
    then
        echo "${RED} No commit message provided"
        exit 1
fi


# stage all changes
git add .
echo "${GREEN} Staged all files"

# add commit
git commit -m "$message"
echo "${GREEN} Added the commit with message: '$message'"

# get current branch and push
current_branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
git push origin "$current_branch"
echo "${GREEN} Push changes to '$current_branch' branch"
