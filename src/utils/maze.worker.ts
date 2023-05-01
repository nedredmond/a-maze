/// <reference lib="webworker" />
declare const self: DedicatedWorkerGlobalScope;

import { mazeCellsForSize } from './maze';

self.onmessage = ({ data }) => self.postMessage(mazeCellsForSize(data));
