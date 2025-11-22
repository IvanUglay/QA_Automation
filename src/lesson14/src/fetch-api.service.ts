export class FetchApiService {
    public constructor(private baseUrl: string) {
        try {
            new URL(baseUrl);
        } catch {
            throw new Error(`Invalid baseUrl: ${this.baseUrl}. Має бути повним URL, наприклад https://example.com`);
        }
    }
    public async get(
        uri: string,
        params?: Record<string, string | number | boolean>,
        headers?: Record<string, string>
    ): Promise<Response> {
        const url = new URL(uri, this.baseUrl);
        if (params) {
            Object.entries(params).forEach(([key, value]) =>
                url.searchParams.append(key, String(value))
            );
        }
        return fetch(url.toString(), { method: 'GET', headers });
    }

    public async requestJson<T>(
        method: 'GET' | 'POST' | 'PUT' | 'DELETE',
        uri: string,
        params?: Record<string, string | number | boolean>,
        headers?: Record<string, string>
    ): Promise<T> {
        let response: Response;

        if (method === 'GET') {
            response = await this.get(uri, params, headers);
        } else {
            throw new Error(`HTTP method ${method} not implemented`);
        }

        if (!response.ok) {
            const body = await response.text();
            throw { status: response.status, body };
        }

        const data = await response.json();
        return data as T;
    }
}
