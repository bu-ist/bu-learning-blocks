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

## Create Guten Block

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).
