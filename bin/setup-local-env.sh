#!/bin/bash

# Exit if any command fails
set -e

# Set up environment variables
. "$(dirname "$0")/bootstrap-env.sh"

# Include useful functions
. "$(dirname "$0")/includes.sh"

# Change to the expected directory
cd "$(dirname "$0")/.."

# Check Node and NVM are installed
. "$(dirname "$0")/install-node-nvm.sh"

# Check Docker is installed and running
. "$(dirname "$0")/install-docker.sh"

! read -d '' BULB <<"EOT"

########  ##     ## ##       ########  
##     ## ##     ## ##       ##     ## 
##     ## ##     ## ##       ##     ## 
########  ##     ## ##       ########  
##     ## ##     ## ##       ##     ## 
##     ## ##     ## ##       ##     ## 
########   #######  ######## ########  

EOT

CURRENT_URL=$(docker-compose $DOCKER_COMPOSE_FILE_OPTIONS run -T --rm cli option get siteurl)

echo -e "\nWelcome to...\n"
echo -e "\033[95m$BULB\033[0m"
echo ''
echo -e "Run $(action_format "npm start"), then open $(action_format "$CURRENT_URL") to get started!"

echo -e "\n\nAccess the above install using the following credentials:"
echo -e "Default username: $(action_format "admin"), password: $(action_format "password")"
