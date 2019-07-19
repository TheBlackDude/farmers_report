#!/bin/bash
set -e
set -x


################################################################################
# define variables
################################################################################

# A minimal init system for Linux containers
# https://github.com/Yelp/dumb-init/releases
export DUMB_INIT=1.2.0

# https://nodejs.org
export NPM_CONFIG_LOGLEVEL=info
export NODE_VERSION=12.5.0


################################################################################
# install packages
################################################################################

wget https://github.com/Yelp/dumb-init/releases/download/v${DUMB_INIT}/dumb-init_${DUMB_INIT}_amd64.deb
dpkg -i dumb-init_*.deb
rm dumb-init_*.deb

# Add postgres apt repo to get more recent postgres versions
echo 'deb http://apt.postgresql.org/pub/repos/apt/ jessie-pgdg main' > /etc/apt/sources.list.d/pgdg.list
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -

apt-get update -qq
cat apt-packages.txt | xargs apt-get -qq --yes --force-yes install


################################################################################
# cleaning
################################################################################

apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
