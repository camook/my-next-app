declare const COUNTER: {
    get: (key: string) => Promise<string | null>;
    put: (key: string, value: string) => Promise<void>;
};