## Prerequisite
| Library | Min Version |
| ------- | ----------- |
| Node | 14.17.0 |
| React Native | 0.65.1 |
| React | 17.0.2 |

Check the `package.json` file for minimum version required


## The folder stucture (sample: Bidding App)
```
project
└───android
|   └───app
|   |   | 
|   |   ...
|   |   .keystore (keystore file)
|   │   ...
└───ios
|   │   ...
|   │   ...
└───src
│   └───assets
│   |   └───/images
│   |       ... (other assets)
│   └───components
│   |   └───/components 1
│   |   └───/components 2
│   |   ...
|   |   index.js (import then export all components here)
|   └───const (list of reusable constants, such as API URL, theme color, etc)
│   |       ApiConst.js
│   |       styles.js
│   |       ...
│   └───pages (list of app pages)
│   |   └───/login
│   |   └───/profle
|   |   └───/bidding
│   |   ...
│   └───redux
│   |   └───modules (separate redux by modules)
│   |   |   └───/user
|   |   |   |    actions.js
|   |   |   |    reducers.js
|   |   |   └───/bidding
|   |   |   |    actions.js
|   |   |   |    reducers.js
|   |   |   └───... (other redux modules)
│   |   actions.js (import then export all modules/actions here)
|   |   reducers.js (combine reducers here)
|   |   store.js (set the store here)
|	└───routes
|	|		index.js (set the route of the app)
│   └───services (list of services that should be separated from app views, such as api calls, etc)
│   |   └───api
|   |       └───/docs
│   |       └───/modules
|   |       |   └───/user
|   |       |   └───/bidding
|   |       |   └───... (other api modules)
|   |       |   index.js (import then export all api modules here)
│   |       base.js (set the http headers, inteceptors, etc)
|   |       request.js (sample functions)
|   |   ....(other services, such as background timer, logging etc)
│   └───utils (a bunch of reusable functions)
│   |   └───/RootNavigation (this function is to access navigation globally anywhere)
│   |   └───...
|   |   |
│   |   index.js (import then export utils function here)  
│   ...
|   App.js (including store here)
index.js (pointing AppRegistry and include firebase messaging if using firebase here)
.gitignore
package.json
README.md  
```