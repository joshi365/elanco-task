import { useState, useEffect } from 'react';

const useFetchAndCache = <T>(url: string): { data: T | null; loading: boolean; error: string | null } => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const cachedData = localStorage.getItem(url);
            if (cachedData) {
                setData(JSON.parse(cachedData) as T);
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                setData(json as T);

                localStorage.setItem(url, JSON.stringify(json));
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (e: any) {
                setError(e.message || "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetchAndCache;