// import HeroSection from "./HeroSection";

import Service from "../service/Services";
import ContactUs from "./ContactUsSection";
import BusinessFeatures from "./FeaturesSection";
import PhotoGallery from "./GallerySection";
import HeroSection2 from "./HeroSection";
import Reviews from "./ReviewsSection";

export default function Home() {
  return (
    <div className="">
        {/* <HeroSection/> */}
        {/* Hero Section */}
      <HeroSection2 />
      
      {/* Business Features */}
      <BusinessFeatures />

      {/* Services Section */}
      <Service />

      {/* Customer Reviews Section */}
      <Reviews />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Contact Us Section */}
      <ContactUs />

      <p></p>
    </div>
  );
}

// HeroSection.js



// BusinessFeatures.js


// ServiceCards.js


// Reviews.js


// PhotoGallery.js


// ContactUs.js


