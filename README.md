# parse-server-any-analytics-adapter
<!-- netreconlab/parse-server-any-analytics-adapter -->

[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/netreconlab/ParseCareKit/#license)
[![ci](https://github.com/netreconlab/parse-server-any-analytics-adapter/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/netreconlab/parse-server-any-analytics-adapter/actions/workflows/ci.yml)
[![release](https://github.com/netreconlab/parse-server-any-analytics-adapter/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/netreconlab/parse-server-any-analytics-adapter/actions/workflows/release.yml)
[![npm version](https://badge.fury.io/js/parse-server-any-analytics-adapter.svg)](https://badge.fury.io/js/parse-server-any-analytics-adapter)
[![codecov](https://codecov.io/gh/netreconlab/parse-server-any-analytics-adapter/branch/main/graph/badge.svg)](https://codecov.io/gh/netreconlab/parse-server-any-analytics-adapter)
[![vulnerabilities](https://snyk.io/test/github/netreconlab/parse-server-any-analytics-adapter/badge.svg)](https://snyk.io/test/github/netreconlab/parse-server-any-analytics-adapter)
[![dependency up-to-date](https://img.shields.io/librariesio/release/npm/parse-server-any-analytics-adapter)](https://libraries.io/npm/parse-server-any-analytics-adapter)
[![weekly downloads](https://img.shields.io/npm/dw/parse-server-any-analytics-adapter)](https://www.npmjs.com/package/parse-server-any-analytics-adapter)


This library allow a [Parse Server](https://github.com/parse-community/parse-server) to leverage the [Analytics](https://github.com/DavidWells/analytics) library to connect to any [3rd party analytics](https://getanalytics.io/plugins/) tool :chart:.

## Table of Contents <!-- omit in toc -->

- [Usage](https://github.com/netreconlab/parse-server-any-analytics-adapter/edit/adapter/README.md#usage)
  - [Server](https://github.com/netreconlab/parse-server-any-analytics-adapter/edit/adapter/README.md#server) 
  - [Client](https://github.com/netreconlab/parse-server-any-analytics-adapter/edit/adapter/README.md#client)


## Usage
#### Server

```javascript
import AnyAnalyticsAdapter from 'parse-server-any-analytics-adapter'
import googleAnalytics from '@analytics/google-analytics'
import customerIo from '@analytics/customerio'

/* Initialize AnyAnalytics with with any and all 3rd party analytics of your choosing. */
const anyAnalytics = AnyAnalyticsAdapter({
  app: 'my-app-name', /* Name of site / app */
  version: 100, /* Version of your app */
  plugins: [ /* Array of analytics plugins */
    googleAnalytics({
      trackingId: 'UA-121991291',
    }),
    customerIo({
      siteId: '123-xyz'
    })
  ]
})

/* Initialize parse server */
const api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/dev',
  cloud: __dirname + '/cloud/main.js',
  appId: 'myAppId',
  masterKey: 'myKey',
  ...,
  analyticsAdapter: anyAnalytics, /* Place your instance of AnyAnalytics here. */
  ...
});

/* Finish mounting your Parse Server */
...
```

#### Client

You can use [REST](https://docs.parseplatform.org/rest/guide/#analytics) or any [Parse SDK](https://parseplatform.org/#sdks) that has the ability to send Parse Analytics such as the [Parse-Swift SDK](https://github.com/parse-community/Parse-Swift/blob/main/ParseSwift.playground/Pages/16%20-%20Analytics.xcplaygroundpage/Contents.swift).

```swift
//: To track when the app has been opened, do the following.
ParseAnalytics.trackAppOpened { result in
    switch result {
    case .success:
        print("Saved analytics for app opened.")
    case .failure(let error):
        print(error)
    }
}

//: To track any event, do the following.
var friendEvent = ParseAnalytics(name: "openedFriendList")
friendEvent.track { result in
    switch result {
    case .success:
        print("Saved analytics for custom event.")
    case .failure(let error):
        print(error)
    }
}

//: You can also add dimensions to your analytics.
friendEvent.track(dimensions: ["more": "info"]) { result in
    switch result {
    case .success:
        print("Saved analytics for custom event with dimensions.")
    case .failure(let error):
        print(error)
    }
} 
```
