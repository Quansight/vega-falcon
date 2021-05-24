/**
* @license Apache-2.0
*
* Copyright (c) 2021 OmniSci/Quansight.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import debug from 'debug';
import { Transform } from 'vega-dataflow';
import { inherits } from 'vega-util';

// Create a logger:
const logger = debug( 'vega-falcon-transform:resolve' );

/**
* Selectively filters tuples by resolving against a filter.
*
* @constructor
* @param {object} params - operator parameters
* @returns {ResolveFilter} transform instance
*/
function ResolveFilter( params ) {
	Transform.call( this, null, params );
	return this;
}

/**
* Transform definition.
*/
ResolveFilter.Definition = {
	'type': 'FalconResolveFilter',
	'metadata': {},
	'params': []
};

/**
* Inherit from `Transform` constructor.
*/
inherits( ResolveFilter, Transform );

/**
* Processes incoming pulses.
*
* @name transform
* @type {Function}
* @memberof ResolveFilter.prototype
* @param {object} params - operator parameters
* @param {Pulse} pulse - current dataflow pulse
* @returns {(Pulse|null)} output pulse (or `StopPropagation`)
*/
Object.defineProperty( ResolveFilter.prototype, 'transform', {
	'configurable': true,
	'enumerable': false,
	'writable': true,
	'value': function transform( params, pulse ) {
		// TODO

		logger( 'Parameters: %s', JSON.stringify( params ) );
	}
});

/**
* Exports.
*/
export default ResolveFilter;
