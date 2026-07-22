import { useCallback, useEffect, useRef, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const contentType = response.headers.get("content-type") || "";
  let resData;

  if (contentType.includes("application/json")) {
    const text = await response.text();
    try {
      resData = text ? JSON.parse(text) : {};
    } catch {
      throw new Error("The server returned an invalid response.");
    }
  } else {
    const text = await response.text();
    resData = { message: text || "The server responded with an error" };
  }

  if (!response.ok) {
    throw new Error(resData.message || "The server responded with an error");
  }

  return resData;
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState();
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  function clearData() {
    setData(initialData);
  }

  const sendRequest = useCallback(
    async function sendRequest(body) {
      setIsLoading(true);
      setIsError(undefined);
      try {
        const resData = await sendHttpRequest(url, { ...config, body });
        if (mountedRef.current) {
          setData(resData);
        }
      } catch (err) {
        if (mountedRef.current) {
          setIsError(err.message || "Something went wrong.");
        }
      }
      if (mountedRef.current) {
        setIsLoading(false);
      }
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return { data, isLoading, error, sendRequest, clearData };
}
