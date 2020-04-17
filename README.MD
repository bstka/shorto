<p align="center"><img src="./ReadMe/Shorto-banner.png"></p>


<p align="center">

  <a href="https://circleci.com/gh/bstka/shorto">
    <img src="https://circleci.com/gh/bstka/shorto.svg?style=svg&circle-token=8ab6effe9810977de211c022dc8d3e83efaacdf3" height="20" width="80">
  </a>
  
  <a href="https://travis-ci.com/bstka/shorto">
    <img src="https://travis-ci.com/bstka/shorto.svg?token=scscR8V7rzMyp5cqbdFs&branch=master" height="20" width="90">
  </a>
  
  <a href="https://github.com/bstka/shorto">
    <img src="https://github.com/bstka/shorto/workflows/Node.js%20CI/badge.svg?branch=master" height="20">
  </a>

  
</p>

# Shorto!!! 😎
----------
> Simple Node App to short your long Url/Links, yeah call it Link Shortener for sure 😁

## How to Run/Install?

```bash
Install dependency!!!
> npm install

Run it!!!
> npm run dev

Test it!!!
> npm run test
```

## How it Works?

### Make Short Url!

```json

    Method: 'POST',
    path: '/'

    payload: {
        "ShortUrl": "YourShortUrl",
        "LongUrl": "YourLongUrl!"
    }

```

If you leave ShortUrl blank, it will generate 5 random char for you!

### Get Redirected

```json

    Method: 'GET',
    path: '/'

    payload: {
        "ShortUrl": "YourShortUrl",
    }

```