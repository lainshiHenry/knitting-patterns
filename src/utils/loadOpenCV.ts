export const loadOpenCV = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        // Check if OpenCV is already loaded
        if ((window as any).cv && (window as any).cv.imread) {
            console.log("OpenCV is already loaded.");
            resolve();
            return;
        }

        console.log("Loading OpenCV...");
        // Check if a script element for OpenCV already exists
        const existingScript = Array.from(document.getElementsByTagName("script")).find(
            (script) => script.src.includes("/opencv.js")
        );

        if (existingScript) {
            console.log("OpenCV script is already present.");
            existingScript.onload = () => {
                console.log("OpenCV.js Loaded");
                resolve();
            };
            existingScript.onerror = () => {
                console.error("Failed to load OpenCV.js");
                reject(new Error("Failed to load OpenCV.js"));
            };
            return;
        } else {
            const script = document.createElement("script");
            script.src = "/opencv.js"; // Path to the local opencv.js file
            script.async = true;
            script.onload = () => {
                console.log("OpenCV.js Loaded");
                resolve();
            };
            script.onerror = () => {
                console.error("Failed to load OpenCV.js");
                reject(new Error("Failed to load OpenCV.js"));
            };

            document.body.appendChild(script);
        }
    });
};
