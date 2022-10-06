function myPromise(executor) {
  let onResolve,
    onReject,
    isCalled = false,
    isFulfilled = false,
    isRejected = false,
    value,
    error;

  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function" && !isCalled) {
      onResolve(val);
      isCalled = true;
    }
  }
  function reject(err) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function" && !isCalled) {
      onReject(err);
      isCalled = true;
    }
  }
  this.then = function (thenHandler) {
    onResolve = thenHandler;
    if (!isCalled && isFulfilled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };
  this.catch = function (catchHandler) {
    onReject = catchHandler;
    if (!isCalled && isRejected) {
      onReject(error);
      isCalled = true;
    }
    return this;
  };
  function resolve(val) {
    if (typeof onResolve === "function" && !isCalled) {
      onResolve(val);
      isCalled = true;
    }
  }
  function reject(err) {
    if (typeof onResolve === "function" && !isCalled) {
      onReject(err);
      isCalled = true;
    }
  }
  executor(resolve, reject);
}


let RandomNumber = new myPromise((res, rej) => {
  const randonNum = parseInt(Math.random() * 100, 10);
  setTimeout(() => {
    if (randonNum % 5 == 0) {
      rej(`Rejected with num:${randonNum}`);
    }
    res(`Resolved with num:${randonNum}`);
  }, randonNum * 10);
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
