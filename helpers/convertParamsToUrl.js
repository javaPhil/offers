const convertParamsToUrl = (url, params) => {
  if (!url || !params) return "";
  return (
    url +
    "?" +
    Object.entries(params)
      .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
      .join("&")
  );
};

export default convertParamsToUrl;
