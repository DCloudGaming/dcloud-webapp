import { useEffect } from "react";

// https://betterprogramming.pub/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668
function ImportScript(resourceUrl, order) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = resourceUrl;
    script.async = false;
    document.body.appendChild(script);
    script.onload = function () {
      console.log("Loaded ", order, " ", resourceUrl);
    };
    return () => {
      document.body.removeChild(script);
    };
  }, [resourceUrl, order]);
}

export default ImportScript;
