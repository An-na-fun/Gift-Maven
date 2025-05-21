import React, { useEffect, useState } from "react";
import "./Categories.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.error("Failed to fetch categories", err));
  }, []);

  return (
    <section className="categories modern-carousel">
      <div className="categories-header">
        <h2 className="title">Categories</h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="categories-swiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="category-card">
              <img
                src={category.image}
                alt={category.name}
                className="category-img"
              />
              <h4>{category.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Categories;