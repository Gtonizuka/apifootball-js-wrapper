# apifootball API wrapper

This is a Javascript library (built on Typescript) that serves as a wrapper for [https://apifootball.com/](https://mythx.io/)

# Installing

# Usage

To bootstrapp the app you need to initiate the main service with a `API_KEY`.
E.G. 

```typescript
    const apiWrapper = new MainService('YOUR_API_KEY') 
```

Get standings for EPL:

```typescript
    const standings = apiWrapper.getStandings("148")
```


