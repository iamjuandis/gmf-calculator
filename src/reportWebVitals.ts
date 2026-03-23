type OnPerfEntry = ((metric: unknown) => void) | undefined;

const reportWebVitals = (onPerfEntry?: OnPerfEntry) => {
  if (!onPerfEntry || !(onPerfEntry instanceof Function)) return;

  import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  });
};

export default reportWebVitals;

