import { useEffect, useState } from "react";
import { baseUrl } from "../utils/baseUrl";

interface stateCurrencyInfo {
  [index: string]: number;
}

const useCurrencyInfo = (currency: string) => {
  const [data, setData] = useState<stateCurrencyInfo>({});

  useEffect(() => {
    const controller = new AbortController();

    fetch(baseUrl(currency), { signal: controller.signal })
      .then((res) => res.json())
      .then((res) => setData(res[currency]));

    return () => {
      controller.abort();
    };
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
