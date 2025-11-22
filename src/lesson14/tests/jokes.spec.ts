import { describe, it, expect } from 'vitest';
import { FetchApiService } from '../src/fetch-api.service';

const api = new FetchApiService('https://official-joke-api.appspot.com');

describe('Official Joke API - Vitest tests (fixed baseUrl)', () => {
    it('GET /random_joke — should return 200 and a joke object', async () => {
        const joke = await api.requestJson<{ id: number; type: string; setup: string; punchline: string }>(
            'GET',
            '/random_joke'
        );
        expect(joke).toHaveProperty('id');
        expect(joke).toHaveProperty('type');
        expect(joke).toHaveProperty('setup');
        expect(joke).toHaveProperty('punchline');
    });

    it('GET /jokes/random — alternative random endpoint', async () => {
        const joke = await api.requestJson<{ id: number; type: string; setup: string; punchline: string }>(
            'GET',
            '/jokes/random'
        );
        expect(joke).toHaveProperty('id');
        expect(joke).toHaveProperty('type');
        expect(joke).toHaveProperty('setup');
        expect(joke).toHaveProperty('punchline');
    });

    it('GET /types — returns non-empty array of types', async () => {
        const types = await api.requestJson<string[]>('GET', '/types');
        expect(types.length).toBeGreaterThan(0);
    });

    it('GET /jokes/programming/random — random programming joke should have type "programming"', async () => {
        const result = await api.requestJson<
        { id: number; type: string; setup: string; punchline: string } |
        { id: number; type: string; setup: string; punchline: string }[]
        >('GET', '/jokes/programming/random');

        const joke = Array.isArray(result) ? result[0] : result;
        expect(joke.type).toBe('programming');
    });

    it('GET /not_a_route — negative test expecting 400 or 404', async () => {
        let thrown = false;
        try {
            await api.requestJson('GET', '/not_a_route');
        } catch (err) {
            thrown = true;
            const e = err as { status?: unknown; body?: unknown };
            expect([400, 404]).toContain(e.status as number | undefined);
        }
        expect(thrown).toBe(true);
    });
});
