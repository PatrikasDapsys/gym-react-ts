import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

  const displayPageName = (page: string) => {
    if (page === "ourclasses") {
      return "Our Classes";
    } else if (page === "contactus") {
      return "Contact Us";
    }
    return page;
  };

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage as SelectedPage)}
    >
      {displayPageName(page)}
    </AnchorLink>
  );
};

export default Link;
