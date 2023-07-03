import React from "react";
import { Link } from "react-router-dom";
import Map, { NavigationControl, Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import photo1 from "../assets/shop1.avif";
import photo2 from "../assets/shop2.avif";
import photo3 from "../assets/shop10.avif";
import photo4 from "../assets/shop11.avif";
import photo5 from "../assets/shop12.avif";
import "maplibre-gl/dist/maplibre-gl.css";
import ScrollToTop from "react-scroll-to-top";

export default function Location() {
  const [showPopup, setShowPopup] = React.useState(true);
  return (
    <>
      <div className="s-loc">
        <div className="s-locs">
          <img src={photo1} />
          <h2>Vienna, Austria</h2>
          <p>
            Discover Jeweluxe, Vienna's captivating jewelry haven. Step into our
            boutique, where elegance meets sophistication. Admire our exquisite
            collection, from sparkling diamonds to lustrous pearls. Our
            knowledgeable staff will guide you to find the perfect piece that
            reflects your unique style. Experience the magic of Jeweluxe, where
            Vienna's finest jewelry awaits. Let us be part of your story,
            adorning you with treasures that will mesmerize.
          </p>
        </div>
        <div className="s-locs">
          <img src={photo2} />
          <h2>Warsaw, Poland</h2>
          <p>
            Welcome to Jeweluxe, an exquisite jewelry destination in the heart
            of Warsaw. Step into a world where elegance and allure unite to
            create a mesmerizing experience. Explore our curated collection,
            featuring dazzling diamonds, radiant gemstones, and captivating
            designs. Our attentive staff awaits, ready to assist you in finding
            the perfect piece that embodies your individuality. Discover the
            magic of Jeweluxe, where Warsaw's style and sophistication converge.
            Let us adorn you with timeless treasures that will illuminate your
            journey.
          </p>
        </div>
        <div className="s-locs">
          <img src={photo3} />
          <h2>Budapest,Hungary</h2>
          <p>
            Enter the enchanting realm of Jeweluxe, Warsaw's premier jewelry
            boutique. Immerse yourself in a world of opulence and grace, where
            every piece tells a story of exquisite craftsmanship. From
            resplendent diamonds to intricate gemstone creations, our collection
            exudes a captivating allure. Experience the epitome of elegance at
            Jeweluxe, where Hungary's beauty finds its most radiant expression.
            Let us accompany you on a journey of timeless sophistication and
            unparalleled splendor.
          </p>
        </div>
        <div className="s-locs">
          <img src={photo4} />
          <h2>Batumi,Georgia</h2>
          <p>
            Batumi's hidden gem and the ultimate destination for exquisite
            jewelry. Immerse yourself in the enchanting ambiance of our
            boutique, nestled in the heart of this vibrant city. Discover a
            curated collection of extraordinary pieces, from dazzling diamonds
            to captivating gemstones, meticulously crafted to perfection. Step
            into the world of Jeweluxe in Batumi, where elegance and
            sophistication meet to create unforgettable moments of beauty and
            allure. Let us accompany you on a journey of timeless elegance and
            exceptional craftsmanship.
          </p>
        </div>
        <div className="s-locs">
          <img src={photo5} />
          <h2>Munich,Germany</h2>
          <p>
            Munich's exquisite treasure trove of fine jewelry. Step into our
            luxurious boutique, nestled in the heart of this vibrant city.
            Prepare to be captivated by our curated collection, showcasing an
            array of stunning diamonds, mesmerizing gemstones, and impeccable
            designs. Experience the allure of Jeweluxe in Munich, where
            sophistication and elegance converge, and let us accompany you on a
            journey of timeless beauty and unparalleled craftsmanship.
          </p>
        </div>
      </div>
      <div className="App" id="1">
        <Map
          mapLib={maplibregl}
          initialViewState={{
            longitude: 25.990376,
            latitude: 46.091052,
            zoom: 4,
          }}
          style={{ width: "100%", height: " calc(100vh - 77px)" }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=8ZWM6iJWT5Hg5DRvjKlw"
        >
          <NavigationControl position="top-left" />
          <Marker longitude={16.354169} latitude={48.199961} color="#000000" />
          <Marker longitude={21.017532} latitude={52.237049} color="#000000" />
          <Marker longitude={11.576124} latitude={48.137154} color="#000000" />
          <Marker longitude={41.6399} latitude={41.643414} color="#000000" />
          <Marker longitude={19.040236} latitude={47.497913} color="#000000" />
        </Map>
      </div>
      <ScrollToTop smooth color="ffff" />
    </>
  );
}
