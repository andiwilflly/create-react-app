# ----------------------
# Color Variables
# ----------------------
RED = "\033[0;31m"
YELLOW = '\033[1;33m'
GREEN = '\033[1;32m'
LCYAN = '\033[1;36m'
END = '\033[0m' # ${END}

# get the argument message
message="$1"

yarn p
echo "${GREEN} SUCCESS ${END} Prettier finished ${END}"

# Use current date time in the commit message when its not passed
if [[ -z "${message// }" ]]
    then
        echo "${RED} ERROR ${END} No commit message provided "
        exit 1
fi


# stage all changes
git add .
echo "${GREEN} SUCCESS ${END} Staged all files ${END}"


# add commit
git commit -m "$message"
echo "${GREEN} SUCCESS ${END} Added the commit with message: '$message'"


# get current branch and push
current_branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
git push origin "$current_branch"
echo "${GREEN} SUCCESS ${END} Push changes to '$current_branch' branch ${END}"

