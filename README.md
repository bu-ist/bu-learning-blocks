# BULB (Boston University Learning Blocks)

## Getting Started

### Local Environment

First, you need a WordPress Environment to run the plugin on. The quickest way to get up and running is to use the provided docker setup. Install [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/) by following the most recent instructions on the docker site.

In the folder of your preference, clone this project and enter the working directory:

```bash
git clone git@github.com:bu-ist/bu-learning-modules.git
cd bu-learning-modules
```

Then, run a setup script to check if docker and node are configured properly and starts the local WordPress instance. You may need to run this script multiple times if prompted.

```
./bin/setup-local-env.sh
```

If everything was successful, you'll see the following ascii art:

```
Welcome to...

########  ##     ## ##       ########
##     ## ##     ## ##       ##     ##
##     ## ##     ## ##       ##     ##
########  ##     ## ##       ########
##     ## ##     ## ##       ##     ##
##     ## ##     ## ##       ##     ##
########   #######  ######## ########
```

The WordPress installation should be available at `http://localhost:8888` (username: `admin`, password: `password`).
Inside this repository, you can use any docker command to interact with your containers. If this port is in use, you can override it in your `docker-compose.override.yml` file.

To bring down this local WordPress instance later run:

```
docker-compose down
```

If you'd like to see your changes reflected in this local WordPress instance, run:

```
npm start
```

## Testing

### PHP Testing

Tests for PHP use PHPUnit as the testing framework. If you're using the built-in local environment, you can run the PHP tests locally using this command:

```
npm run test-php
```

Code style in PHP is enforced using PHP_CodeSniffer. It is recommended that you install PHP_CodeSniffer and the WordPress Coding Standards for PHP_CodeSniffer ruleset using Composer. With Composer installed, run composer install from the project directory to install dependencies. The above npm run test-php will execute both unit tests and code linting. Code linting can be verified independently by running npm run lint-php.

To run unit tests only, without the linter, use npm run test-unit-php instead.

### Toggling WP_DEBUG

```
$ npm run enable-debug
$ npm run disable-debug
```

## Create Guten Block

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).
