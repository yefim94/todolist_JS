'use strict';

// L1
console.log('🥪 synchrnous 1');
// L2
setTimeout(function () {
  console.log('🍅  timeout 2');
}, 0);
// L3
Promise.resolve().then(function () {
  return console.log('🥪 synchrnous 1');
});
// L4
console.log('🥪 synchrnous 4');