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

import path from 'path';
import module from 'module';
import vega from 'vega';
import { falconfilter, falconresolvefilter } from './../src/index.js';

const require = module.createRequire( import.meta.url );
const readJSON = require( '@stdlib/fs/read-json' );

// Resolve the current directory:
const __dirname = path.dirname( new URL( import.meta.url ).pathname );

// Load a Vega specification:
const spec = readJSON.sync( path.join( __dirname, 'spec_falcon.json' ) );
if ( spec instanceof Error ) {
	throw spec;
}

// Add the Falcon transforms to the existing set of Vega transforms:
vega.transforms.falconfilter = falconfilter;
vega.transforms.falconresolvefilter = falconresolvefilter;

// Create a new Vega view:
const view = new vega.View( vega.parse( spec ) );

// Log the initial state:
console.log( view.getState() );

// Evaluate the data flow graph:
await view.runAsync();

// Log the evaluated state:
console.log( view.getState() );
