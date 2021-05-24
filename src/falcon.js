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

import { Transform } from 'vega-dataflow';
import { inherits } from 'vega-util';

/**
* Big data crossfilter.
*
* @constructor
* @param {object} params - operator parameters
* @param {Array<Function>} params.fieldsets - array of dimension accessors to filter
* @param {Array} params.query - array of per-dimension range queries
* @returns {FalconFilter} transform instance
*/
function FalconFilter( params ) {
	Transform.call( this, null, params );
	this._index = null;
	return this;
}

/**
* Transform definition.
*/
FalconFilter.Definition = {
	'type': 'FalconFilter',
	'metadata': {},
	'params': [
		{
			'name': 'fieldsets',
			'type': 'array',
			'array': true,
			'required': true,
			'content': {
				'type': 'field',
				'array': true,
				'required': true
			}
		},
		{
			'name': 'query',
			'type': 'array',
			'array': true,
			'required': true,
			'content': {
				'type': 'number',
				'array': true,
				'length': 2
			}
		}
	]
};

/**
* Inherit from `Transform` constructor.
*/
inherits( FalconFilter, Transform );

/**
* Processes incoming pulses.
*
* @name transform
* @type {Function}
* @memberof FalconFilter.prototype
* @param {object} params - operator parameters
* @param {Pulse} pulse - current dataflow pulse
* @returns {(Pulse|null)} output pulse (or `StopPropagation`)
*/
Object.defineProperty( FalconFilter.prototype, 'transform', {
	'configurable': true,
	'enumerable': false,
	'writable': true,
	'value': function transform( params, pulse ) {
		// TODO

		console.log( params );
	}
});

/**
* Exports.
*/
export default FalconFilter;
