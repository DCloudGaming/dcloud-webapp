import { useEffect } from "react";

// https://betterprogramming.pub/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668
const importScript = (resourceUrl) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = resourceUrl;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [resourceUrl]);
};
export default importScript;
