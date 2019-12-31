# apifootball API wrapper

This is a Javascript library (built on Typescript) that serves as a wrapper for [https://apifootball.com/](https://mythx.io/)

# Installing

To install just clone this repo and import the library into your project.

# Usage

To bootstrap the library you need to initiate the main service with a `API_KEY`.
E.G. 

```typescript
    const apiWrapper = new MainService('YOUR_API_KEY') 
```

## List of actions

Get standings for EPL:

```typescript
    const standings = apiWrapper.getStandings("148")
```


