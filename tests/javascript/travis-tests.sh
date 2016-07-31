#!/bin/bash
# Script for installing firefox and fluxbox and preparing JavaScript tests

BASE="$1"

set -e

# Xvfb
sh -e /etc/init.d/xvfb start
sleep 3 # give xvfb some time to start

# Fluxbox
sudo apt-get update -qq
sudo apt-get install -y --force-yes firefox fluxbox
fluxbox &
sleep 3 # give fluxbox some time to start

#Make sure all node modules are installed
cd tests/javascript
npm install
cd $BASE