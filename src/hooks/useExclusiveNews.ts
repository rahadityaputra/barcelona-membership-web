import { useCallback, useEffect, useState } from "react";
import api from "../services/api";

const useExclusiveNews = () => {

const [news, setNews] = useState<any[]>([]);
const [error, setError] = useState<string | null>(null);
const [loading, setLoading] = useState<boolean>(true);


  const fetchExclusiveNews = useCallback(async () => {
    // Fetch exclusive news from API
    try {
        setLoading(true);
        const response = await api.get('/api/news/exclusive');
        setNews(response.data);
        
    } catch (error) {
        setLoading(false);
        setError('Failed to fetch exclusive news');
        console.error('Failed to fetch exclusive news:', error);
    } finally{
        setLoading(false);
    }
  }, []);


  useEffect(() => {
    fetchExclusiveNews();
  }, [fetchExclusiveNews]);

  return {
    news,
    loading,
    error,
    fetchExclusiveNews,
  };
};

export default useExclusiveNews;