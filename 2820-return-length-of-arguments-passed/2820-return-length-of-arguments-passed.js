/**
 * @return {number}
 */
var argumentsLength = function(...args) {
 if(args === 0) {
     return 0;
 }
 return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */