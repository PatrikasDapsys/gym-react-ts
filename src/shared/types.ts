export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
export interface ClassType {
  name: string;
  description: string;
  image: string;
}

export interface owlCarouselOptionsTypes {
  nav: boolean;
  loop: boolean;
  items: number;
  dots: boolean;
  margin: number;
  navText: string[];
  responsive: {
    0: {
      items: number;
    };
    576: {
      items: number;
    };
    768: {
      items: number;
    };
  };
}
