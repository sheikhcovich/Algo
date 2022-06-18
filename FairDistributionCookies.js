var distributeCookies = function (cookie = [20, 13, 18], k = 2) {
  let sum = 0;
  for (let i = 0; i < cookie.length; i++) {
    sum = sum + cookie[i];
  }
  console.log(Math.floor(sum / k) + (sum % k));
};
distributeCookies();
