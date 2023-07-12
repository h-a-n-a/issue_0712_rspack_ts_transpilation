// 1. Not working
require('!raw-loader!@types/lodash/index.d.ts');
// 2. Working
require('@types/lodash/index.d.ts.js!=!!raw-loader!@types/lodash/index.d.ts');
