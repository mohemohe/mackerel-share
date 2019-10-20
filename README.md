mackerel-stats
====

A surprisingly easy status page generator using mackerel.io.

![](https://i.imgur.com/XXDzN6g.png)

## live demo

https://cdn.statically.io/gh/mohemohe/mackerel-stats/master/demo/index.html

## option

https://github.com/mohemohe/mackerel-stats/blob/master/mackerel.js#L35

## sample

### browser

```js
const option = {
  metrics: {
    freetier1: [
      "https://mackerel.io/embed/public/embed/zPLOKOpVmcMmg1zTPC7u8TEDm9jC1xLjYcUskkEhJjTvU9FL2446YAMpkuPlHF8X?period=1d",
      "https://mackerel.io/embed/public/embed/UnVUvJe1yUWnC8IdmfakFtknkBkOQvmRjfp17z6szIqQqD4prXNhoAXgx2l9VnWi?period=1d",
      "https://mackerel.io/embed/public/embed/ZsVPhOp1cEbEqqpgCCfwEYDPiYgeGVcyAGy0TnIyW9vLjIRjFtFDtb986mJvGsNp?period=1d"
    ],
    freetier2: [
      "https://mackerel.io/embed/public/embed/c9ZeKs1spPCgdw4P8hBQBaop6gNRbdqpYF7OgffpP3bXqP9PKn9Nl2QH5ciRfsYB?period=1d",
      "https://mackerel.io/embed/public/embed/noZiwdvIIKtlxCzzPTb3m4qVQR8fSCdUsrD8le9HF0cUASq4a23LnTxvbjyjrSSC?period=1d",
      "https://mackerel.io/embed/public/embed/amHbCc1bAvTVZyIDioLHhvUXJZasV3Cc0YpWFCKJKzfaUQaYwM2ZWtwDEaCyF35b?period=1d"
    ]
  }
};
import("https://cdn.statically.io/gh/mohemohe/mackerel-stats/master/mackerel.js").then(Mackerel => {
  const mkr = new Mackerel.default(option);
  mkr.render();
});
```

### parcel, webpack, etc.

```bash
yarn add https://github.com/mohemohe/mackerel-stats.git
```

```js
import Mackerel from "mackerel-stats";

const option = {
  metrics: {
    freetier1: [
      "https://mackerel.io/embed/public/embed/zPLOKOpVmcMmg1zTPC7u8TEDm9jC1xLjYcUskkEhJjTvU9FL2446YAMpkuPlHF8X?period=1d",
      "https://mackerel.io/embed/public/embed/UnVUvJe1yUWnC8IdmfakFtknkBkOQvmRjfp17z6szIqQqD4prXNhoAXgx2l9VnWi?period=1d",
      "https://mackerel.io/embed/public/embed/ZsVPhOp1cEbEqqpgCCfwEYDPiYgeGVcyAGy0TnIyW9vLjIRjFtFDtb986mJvGsNp?period=1d"
    ],
    freetier2: [
      "https://mackerel.io/embed/public/embed/c9ZeKs1spPCgdw4P8hBQBaop6gNRbdqpYF7OgffpP3bXqP9PKn9Nl2QH5ciRfsYB?period=1d",
      "https://mackerel.io/embed/public/embed/noZiwdvIIKtlxCzzPTb3m4qVQR8fSCdUsrD8le9HF0cUASq4a23LnTxvbjyjrSSC?period=1d",
      "https://mackerel.io/embed/public/embed/amHbCc1bAvTVZyIDioLHhvUXJZasV3Cc0YpWFCKJKzfaUQaYwM2ZWtwDEaCyF35b?period=1d"
    ]
  }
};
const mkr = new Mackerel(option);
mkr.render();
```