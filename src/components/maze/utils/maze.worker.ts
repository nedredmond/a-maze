/// <reference lib="webworker" />
declare const self: DedicatedWorkerGlobalScope;

import { generateMaze } from './maze';

self.onmessage = ({ data }) => self.postMessage(generateMaze(data));
