'use strict';
const str = "Victoria said, 'I don't think so.' And i'am said, 'This is true!' - but you don't know."
const regexp = /\s'|\.'|!'|\?'|'\s/g;
console.log(str.replace(regexp, '"' ));
