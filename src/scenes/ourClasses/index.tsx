import { ClassType, SelectedPage, owlCarouselOptionsTypes } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./OurClasses.css"; // Import the CSS file for custom styles
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weigth Training Classes",
    description:
      "Build strength and sculpt your body with our expert-led weight training classes. Maximize your gains and achieve your fitness goals with us.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Find inner peace and enhance your flexibility with our invigorating yoga classes led by experienced instructors.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Get a sculpted core and strengthen your abdominal muscles with our dynamic and targeted ab core classes.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Embark on thrilling fitness adventures with our adrenaline-pumping adventure classes designed to challenge and inspire.",
    image: image4,
  },
  {
    name: "Fitness Training Classes",
    description:
      "Take your fitness to new heights with our comprehensive fitness training classes led by expert trainers.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Achieve your fitness goals with our diverse training classes, tailored to your needs and guided by knowledgeable instructors.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const owlCarouselOptions: owlCarouselOptionsTypes = {
  nav: true,
  loop: true,
  items: 3,
  dots: false,
  margin: 10,
  navText: [
    "<span class='owl-nav-arrow owl-nav-arrow-left'>❮</span>",
    "<span class='owl-nav-arrow owl-nav-arrow-right'>❯</span>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },

    768: {
      items: 3,
    },
  },
};

function OurClasses({ setSelectedPage }: Props) {
  return (
    <section id="ourclasses" className=" bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Immerse yourself in our invigorating classes, designed to ignite
              your fitness journey. With a diverse range of high-energy cardio
              workouts and rejuvenating yoga sessions, our expert-led classes
              cater to all fitness levels. Experience the rewarding and engaging
              atmosphere as our carefully crafted classes challenge and motivate
              you. Whether you seek strength, flexibility, or overall wellness,
              our transformative classes push your limits and help you achieve
              your goals. Join us today to discover the power of our exceptional
              classes and embark on an inspiring fitness adventure.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto w-[90%]">
          <OwlCarousel
            className="owl-theme w-full justify-center"
            {...owlCarouselOptions}
          >
            {classes.map((item: ClassType, index: number) => (
              <div className="mt-10" key={index}>
                <div className="relative">
                  <Class 
                    name={item.name}
                    description={item.description}
                    image={item.image}
                  />
                  <span className="carousel-arrow carousel-arrow-left" />
                  <span className="carousel-arrow carousel-arrow-right" />
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </motion.div>
    </section>
  );
}

export default OurClasses;
