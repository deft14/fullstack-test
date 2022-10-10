import { useEffect, useState } from "react";

export function useApi(service, params = {}, effects = []) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoading(true);
    service(
      "https://603c67f9f4333a0017b6786c.mockapi.io/api/v1/Products",
      params,
    )
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
        setLoading(false);
        setLoaded(true);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        setLoaded(true);
      });
    return () => {};
  }, effects);

  return {
    loading,
    loaded,
    response,
    error,
  };
}

export function useApi2(service, params = {}, effects = []) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoading(true);
    service(
      "https://603c67f9f4333a0017b6786c.mockapi.io/api/v1/Products",
      params,
    )
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
        setLoading(false);
        setLoaded(true);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        setLoaded(true);
      });
    return () => {};
  }, effects);

  return {
    loading,
    loaded,
    response,
    error,
  };
}
