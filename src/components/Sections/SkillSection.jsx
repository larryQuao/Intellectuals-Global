import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import imageSlide1 from '../../assets/3dimage.png';
import imageSlide2 from '../../assets/3dimage.png';
import imageSlide3 from '../../assets/3dimage.png';
import imageSlide4 from '../../assets/3dimage.png';

const slidesData = [
  {
    id: 1,
    careerTitle: "Career Explore",
    careerDescription: "Sharpen your edge in achieving the best academic results with trusted and certified Teaching Assistants across the globe",
    trustStatement: "Career Explorers With Experience In Career Exploitation.",
    buttonText: "Start Your Career Exploration",
    image: imageSlide1,
    alt: "Career Exploration"
  },
  {
    id: 2,
    careerTitle: "Target Zone",
    careerDescription: "Sharpen your edge in achieving the best academic results with trusted and certified Teaching Assistants across the globe",
    trustStatement: "Collaborate on real-world data sets.",
    buttonText: "Have a Target to Reach",
    image: imageSlide2,
    alt: "Target Process in Academics"
  },
  {
    id: 3,
    careerTitle: "Impact",
    careerDescription: "Craft beautiful and intuitive user experiences. Learn design principles, prototyping, and user research.",
    trustStatement: "Portfolio reviews by professional designers.",
    buttonText: "Design Your Future",
    image: imageSlide3,
    alt: "UX/UI Design Career Exploration"
  },{
    id: 4,
    careerTitle: "Digital Platform",
    careerDescription: "Craft beautiful and intuitive user experiences. Learn design principles, prototyping, and user research.",
    trustStatement: "Portfolio reviews by professional designers.",
    buttonText: "Design Your Future",
    image: imageSlide4,
    alt: "UX/UI Design Career Exploration"
  },
];


const SkillSection = () => {
  return (
    <div className="py-10 sm:py-12 font-montserrat">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        {/* Top Static Content (remains outside the slider) */}
        <div className="max-w-3xl mx-auto text-center mb-6 lg:mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-baltic-900 sm:text-5xl lg:text-6xl">
            Skill Transformation Pack <br /> From Intellectuals
          </h2>
          <p className="mt-4 text-lg leading-8 text-baltic-600">
            Combine technical training for Students with industries experts, mentors and Project managers for critical thinking that pushes innovation. Our training is to equip academic giants for the job market.
          </p>
        </div>

        {/* Swiper Container for the "Career Explore" like slides */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay /*, Navigation */]} 
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            className="mySwiper pb-12"
          >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 items-center py-8">
                  <div className="lg:pr-4 text-center lg:text-left">
                    <h3 className="text-3xl font-semibold tracking-tight text-baltic-900 sm:text-5xl">
                      {slide.careerTitle}
                    </h3>
                    <p className="mt-4 text-lg leading-8 text-baltic-900 ">
                      {slide.careerDescription}
                    </p>
                    <p className="mt-6 text-md text-baltic-700">
                      {slide.trustStatement}
                    </p>
                    <div className="mt-8 flex justify-center lg:justify-start">
                      <a
                        href="#"
                        className="rounded-4xl bg-baltic-950 px-6 py-3 text-sm text-white font-semibold focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-baltic-950 hover:bg-violet-700"
                      >
                        {slide.buttonText}
                      </a>
                    </div>
                  </div>

                  {/* Image Area for the slide */}
                  <div className="flex justify-center">
                    {slide.image ? (
                      <img src={slide.image} alt={slide.alt} className="w-full max-w-3xs lg:max-w-3xs object-contain rounded-lg" />
                    ) : (
                      <div className="w-full aspect-[4/3] max-w-md lg:max-w-lg bg-gray-200 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500 text-center px-4">Image Placeholder for <br/>{slide.careerTitle}</p>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;