#!/bin/bash

# Exit if any command fails.
set -e

# Gutenberg script includes.
. "$(dirname "$0")/includes.sh"

# Set up environment variables
. "$(dirname "$0")/bootstrap-env.sh"

# These are the containers and values for the development site.
CLI='cli'
CONTAINER='wordpress'
SITE_TITLE='Gutenberg Dev'

# Get the host port for the WordPress container.
HOST_PORT=$(docker-compose $DOCKER_COMPOSE_FILE_OPTIONS port $CONTAINER 80 | awk -F : '{printf $2}')

# Wait until the Docker containers are running and the WordPress site is
# responding to requests.
echo -en $(status_message "Attempting to connect to WordPress...")
until $(curl -L http://localhost:$HOST_PORT -so - 2>&1 | grep -q "WordPress"); do
    echo -n '.'
    sleep 5
done
echo ''

# Fix permissions.
echo -e $(status_message "Fixing /var/www/html permissions...")
docker-compose $DOCKER_COMPOSE_FILE_OPTIONS run --rm -u 0 $CLI chown -R 33:33 /var/www/html

# Install WordPress.
echo -e $(status_message "Installing WordPress...")
docker-compose $DOCKER_COMPOSE_FILE_OPTIONS run --rm $CLI core install --title="$SITE_TITLE" --admin_user=admin --admin_password=password --admin_email=test@test.com --skip-email --url=http://localhost:$HOST_PORT

if [ "$WP_VERSION" == "latest" ]; then
	echo -e $(status_message "Updating WordPress...")
	# Check for WordPress updates, to make sure we're running the very latest version.
	docker-compose $DOCKER_COMPOSE_FILE_OPTIONS run --rm $CLI core update >/dev/null
fi

# If the 'wordpress' volume wasn't during the down/up earlier, but the post port has changed, we need to update it.
CURRENT_URL=$(docker-compose $DOCKER_COMPOSE_FILE_OPTIONS run -T --rm $CLI option get siteurl)
if [ "$CURRENT_URL" != "http://localhost:$HOST_PORT" ]; then
	echo -e $(status_message "Updating HOST_PORT in options...")
	docker-compose $DOCKER_COMPOSE_FILE_OPTIONS run --rm $CLI option update home "http://localhost:$HOST_PORT" >/dev/null
	docker-compose $DOCKER_COMPOSE_FILE_OPTIONS run --rm $CLI option update siteurl "http://localhost:$HOST_PORT" >/dev/null
fi

# Activate BULB
echo -e $(status_message "Activating BULB...")
docker-compose $DOCKER_COMPOSE_FILE_OPTIONS run --rm $CLI plugin activate bu-learning-blocks >/dev/null

# Make sure the uploads folder exist and we have permissions to add files there.
docker-compose $DOCKER_COMPOSE_FILE_OPTIONS run --rm $CONTAINER mkdir -p /var/www/html/wp-content/uploads
docker-compose $DOCKER_COMPOSE_FILE_OPTIONS run --rm $CONTAINER chmod -v 767 /var/www/html/wp-content/uploads

# Install a dummy favicon to avoid 404 errors.
docker-compose $DOCKER_COMPOSE_FILE_OPTIONS run --rm -u 33 $CONTAINER touch /var/www/html/favicon.ico
