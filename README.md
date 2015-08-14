# [Codepot 2015] Add types - reduce bugs. Transition from Javascript to TypeScript
All the materials needed for the workshop are in this repository. You can `git clone` it or just download a zip (on the right).

## Environment configuration
Node.js + npm packages
- download and install Node.js 0.10+
- using `npm` install three following packages:
	- npm install -g tsd
	- npm install -g grunt-cli
	- npm install -g bower

## IDE
Preferably use one of these IDEs:
- WebStorm
- Atom
- Visual Studio

## Running the sample app project
- go to the angular_sample_app directory
- run following commands in order to download all needed packages:
	- `npm install`
	- `bower install`
	- `tsd reinstall`
	- run `grunt` form command line or from your IDE
	- the web app is accessible at [localhost:8888](http://localhost:8888/)
