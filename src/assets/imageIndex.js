import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import img8 from './8.jpg';
import img9 from './9.jpg';
import img10 from './10.jpg';
import img11 from './11.jpg';
import img12 from './12.jpg';
import img13 from './13.jpg';
import img14 from './14.jpg';
import img15 from './15.jpg';
import img16 from './16.jpg';
import img17 from './17.jpg';
import img18 from './18.jpg';
import img19 from './19.jpg';
import img20 from './20.jpg';
import img21 from './21.jpg';
import img22 from './22.jpg';
import img23 from './23.jpg';
import img24 from './24.jpg';
import img25 from './25.jpg';
import img26 from './26.jpg';
import img27 from './27.jpg';
import img28 from './28.jpg';
import img29 from './29.jpg';

// Export images array for easy access
export const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29
];

// Export individual images
export {
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29
};

// Helper function to get image by number
export const getImage = (number) => {
  if (number < 1 || number > images.length) {
    console.warn(`Image ${number} not found. Available images: 1-${images.length}`);
    return null;
  }
  return images[number - 1];
};

// Helper function to get random image
export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

// Helper function to get multiple random images
export const getRandomImages = (count = 3) => {
  const shuffled = [...images].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, images.length));
};

// Image categories distributed across the entire site
export const imageCategories = {
  hero: [img1, img7, img3, img4], // 4 images for hero carousel
  services: [img5, img6, img7, img8, img9, img10, img29], // 7 images for services section
  gallery: [img11, img12, img13, img14, img15, img16, img17, img18], // 8 images for gallery/behind glass eye
  technology: [img19, img20, img21], // 3 images for technology section
  testimonials: [img22, img23, img24], // 3 images for testimonials
  partners: [img25, img26], // 2 images for partners section
  aboutUs: [img27, img28], // 2 images for about us
  contactUs: [img29], // 1 image for contact section
  // Additional categories for flexibility
  featured: [img1, img5, img11, img19], // Featured images across sections
  backgrounds: [img2, img6, img12, img20], // Background images
  highlights: [img3, img7, img13, img21] // Highlight images
};

// Helper function to get images by category
export const getImagesByCategory = (category) => {
  return imageCategories[category] || [];
};

export default images;
