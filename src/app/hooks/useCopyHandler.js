import { useEffect } from "react";

const useCopyHandler = () => {
  useEffect(() => {
    const handleCopy = (event) => {
      // Prevent the default copy behavior
      event.preventDefault();

      // Set custom text to the clipboard
      const customText = "☺️😂";
      if (event.clipboardData) {
        event.clipboardData.setData("text/plain", customText);
      } else if (window.clipboardData) {
        // For older browsers
        window.clipboardData.setData("Text", customText);
      }
    };

    // Attach the copy event listener
    document.addEventListener("copy", handleCopy);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, []);
};

export default useCopyHandler;
