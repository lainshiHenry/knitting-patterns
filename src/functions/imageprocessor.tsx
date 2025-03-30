import { useEffect, useRef, useState } from "react";
import { FabricImage }, fabric from "fabric"; // Import Fabric.js (default import)

const ImageProcessor: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null); // Ref to the canvas element
    const [imageSrc, setImageSrc] = useState<string | null>(null); // State to store image src

    // Handle image upload
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    setImageSrc(e.target.result as string); // Set image src to the uploaded file
                }
            };
            reader.readAsDataURL(file); // Read the file as data URL
        }
    };

    useEffect(() => {
        if (imageSrc && canvasRef.current) {
            const canvas = new fabric.Canvas(canvasRef.current); // Create a Fabric canvas

            // Load the image from the uploaded URL
            fabric.Image.fromURL(imageSrc, (img) => {
                // Add image to the Fabric canvas
                canvas.setWidth(img.width);
                canvas.setHeight(img.height);
                canvas.add(img);

                // Example: Apply a grayscale filter
                img.filters.push(new fabric.Image.filters.Grayscale());
                img.applyFilters();

                // Render the canvas after applying the filter
                canvas.renderAll();
            });

            // Clean up the canvas when the component is unmounted or imageSrc changes
            return () => {
                canvas.dispose();
            };
        }
    }, [imageSrc]);

    return (
        <div>
            <h2>Image Processing with Fabric.js</h2>

            {/* File input to upload image */}
            <input type="file" onChange={handleImageUpload} />

            {/* Canvas to display the processed image */}
            <canvas ref={canvasRef} />
        </div>
    );
};

export default ImageProcessor;
