/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const Upgrade = require ('./lib/upgrade.js');

module.exports.command = 'upgrade [options]';
module.exports.describe = 'Upgrades the Hyperledger Composer runtime of a business network';
module.exports.builder = {
    card: { alias: 'c', required: true, description: 'The cardname to use to upgrade the network', type:'string'},
    businessNetworkName: {alias: 'n', required: true, describe: 'The business network name', type: 'string' },
    option: { alias: 'o', required: false, describe: 'Options that are specific specific to connection. Multiple options are specified by repeating this option', type: 'string' },
    optionsFile: { alias: 'O', required: false, describe: 'A file containing options that are specific to connection', type: 'string' }
};

module.exports.handler = (argv) => {
    return argv.thePromise = Upgrade.handler(argv);
};
