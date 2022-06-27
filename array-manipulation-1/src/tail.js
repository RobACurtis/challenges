/* exported tail */
function tail(array) {
if (array[0] === undefined) return array;

 delete array[0];

 for (let i = 1; i < array.length; i++) {
   array[i - 1] = array[i];
 }

 array.length = array.length - 1;

return array;
}
