import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  // Mapping of English to translated page names
  const translations: Record<string, string> = {
    "Home": "Početna",
    "Benefits": "O nama",
    "Our Classes": "Usluge",
    "Contact Us": "Kontaktirajte nas" // Added for reference if needed in future
  };

  // Use translation if available, otherwise use the original page name
  const translatedPage = translations[page] ?? page;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {translatedPage} {/* Display translated page text */}
    </AnchorLink>
  );
};

export default Link;
