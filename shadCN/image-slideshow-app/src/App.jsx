import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ImageSlideshowApp() {
  const images = [
    "http://m.gettywallpapers.com/wp-content/uploads/2021/01/Doraemon-and-nobita-Wallpaper-scaled.jpg",
    "https://www.gratistodo.com/wp-content/uploads/2016/08/Doraemon-17-800x834.jpg",
    "https://wallpaperaccess.com/full/1281915.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-muted/40">
      <Card className="w-full max-w-xl rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-center">Image Slideshow</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-hidden rounded-xl">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-auto transition-all duration-300"
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <Button variant="outline" onClick={prevImage}>
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} / {images.length}
            </span>
            <Button onClick={nextImage}>Next</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
