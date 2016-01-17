// Copyright 2014-present runtime.js project authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

/* eslint-disable quotes */
var terminal = require('./terminal');
var assert = require('assert');
var typeutils = require('typeutils');

var color = terminal.color;

terminal.print(
   "\n                   _   _                   _     \n"
 + "  _ __ _   _ _ __ | |_(_)_ __ ___   ___   (_)___\n"
 + " | '__| | | | '_ \\| __| | '_ ` _ \\ / _ \\  | / __|\n"
 + " | |  | |_| | | | | |_| | | | | | |  __/_ | \\__ \\\n"
 + " |_|   \\__,_|_| |_|\\__|_|_| |_| |_|\\___(_)/ |___/\n"
 + "                                        |__/\n\n");

terminal.print('\n', 1, color.DARKGRAY, color.BLACK);
terminal.print('# Welcome to ', 1, color.DARKGRAY, color.BLACK);
terminal.print('runtime.js\n\n', 1, color.LIGHTGRAY, color.BLACK);

module.exports = terminal;
