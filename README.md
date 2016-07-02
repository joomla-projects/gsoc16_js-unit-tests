Joomla! GSoC 2016 JavaScript Tests [![Analytics](https://ga-beacon.appspot.com/UA-544070-3/joomla-cms/readme)](https://github.com/igrigorik/ga-beacon)
====================

Build Status
---------------------
Travis-CI: [![Build Status](https://travis-ci.org/joomla/joomla-cms.svg?branch=staging)](https://travis-ci.org/joomla/joomla-cms)
Jenkins: [![Build Status](http://build.joomla.org/job/cms/badge/icon)](http://build.joomla.org/job/cms/)

What is this?
---------------------
* Joomla core currently has some custom written JavaScript libraries used in performing various front end tasks.
* This repository is dedicated to the JavaScript tests written for those custom JavaScript libraries in Joomla!.
* The `tests\javascript` directory contains all those JavaScript tests.
* The tests are written using the Jasmine framework and Karma is used as the test runner.

Before you can run the tests, you need to install some programs on your local workstation, as documented below.

Prerequisites
---------------------
* The testing environment requires your local machine to have Node.js installed in it.
* To install node.js, please go to the node.js [official website](https://nodejs.org/en/), download the respective setup for your operating system and install it by following the installation wizard.

Install dependencies
---------------------
1. Open a command line and navigate to the directory tests/javascript
2. Execute command  npm install
..* This will install all the dependencies to the tests/javascript/node_modules directory. If a node_modules folder does not exist, a folder will automatically be created by npm.
3. Execute command npm i -g karma karma-jasmine karma-jasmine-ajax karma-firefox-launcher karma-coverage karma-requirejs karma-verbose-reporter
..* For the ease of use we are going to have the Karma package and some other Karma plugin packages as global modules. This allows us to start the Karma server from the command karma start from anywhere. When Karma is started from its global installation, it expects all the plugins also to reside globally in your local machine. That is the reason behind installing the plugin packages also globally. Please also make sure you have Firefox installed in your machine.
..* If you find this unnecessary and want to skip installing the global packages, you always have the liberty to run the locally installed karma package.

Starting the Karma server and running the tests
---------------------
* If you installed the packages globally as well, all you need to do is to execute the command
karma start karma.conf.js
from anywhere. This would start a server and a Firefox browser window will automatically open up. Then the tests would be run and the detailed results will be shown in the command line itself.

* If you didn’t install the afore mentioned packages globally, you will have to run the command
node tests/javascript/node_modules/karma/bin/karma start karma.conf.js
which essentially would perform the same operation as karma start karma.conf.js would.
