#!/usr/bin/env node
'use strict';
/** Create and run teq-app as a Node.js program. */
// IMPORT
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import teq from '@teqfw/core';

// VARS
/* Resolve path to the root folder. */
const url = new URL(import.meta.url);
const script = fileURLToPath(url);
const bin = dirname(script);
const path = join(bin, '..');

// MAIN
/* Run the teq-app from the given root path. */
teq({path}).catch((e) => console.error(e));