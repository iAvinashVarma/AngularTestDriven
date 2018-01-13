# AngularTestDriven
AngularTestDriven Development using Jasmine Framework, Karma CLI and PhantomJS.

### Install KarmaCLI, PhantomJS and Jasmine

```
C:\TestingAngularJS> npm install karma-cli phantomjs -g
C:\TestingAngularJS> npm install karma jasmine -g
```

### Check Versions
```
C:\TestingAngularJS> karma --version
C:\TestingAngularJS> phantomjs --version
C:\TestingAngularJS> jasmine -v
C:\TestingAngularJS> node --version
C:\TestingAngularJS> npm --v
```

### Install Node Modules (From Package.json)

```
C:\TestingAngularJS> npm install
```

### Install Bower Components (From bower.json)

```
C:\TestingAngularJS\app> bower install
```

### Initialize Karma
```
C:\TestingAngularJS> karma init
```

### Start Karma (Do not use GIT BASH in Windows)

```
C:\TestingAngularJS> karma start app/js/test/karma.conf.js
```