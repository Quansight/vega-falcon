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
* @param {Array<Function>} params.fields - array of dimension accessors to filter
* @param {Array} query - array of per-dimension range queries
* @returns {FalconFilter} transform instance
*/
function FalconFilter( params ) {
	Transform.call( this, params );
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
			'name': 'fields',
			'type': 'field',
			'array': true,
			'required': true
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
* Inherit from parent constructor.
*/
inherits( FalconFilter, Transform );

/**
* Exports.
*/
export default FalconFilter;
