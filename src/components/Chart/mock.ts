import { writable } from 'svelte/store';
import { Granularity } from './types';

interface Flow {
    ts: Date;
    flow: number;
}

export const flow = writable<Flow[]>([]);

function mockUpdate() {
    flow.update(old => {
        old.push({
            ts: new Date(),
            flow: Math.floor(Math.random() * 100),
        });
        return old;
    });
}

export function createMock(granularity: Granularity) {
    if (granularity == 0) granularity = 1;
    console.log('Creating Interval of granularity', granularity);
    return setInterval(mockUpdate, granularity * 1000);
}
