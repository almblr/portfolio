import { useConfig } from "@/stores/store";
import scrollToElement from "@/utils/scroll-to-element";

const useNavigation = () => {
  const config = useConfig();

  const scrollToCategory = (key: string): void => {
  const element = key.toLowerCase() as keyof typeof config.categories;
  const htmlElement = config.categories[element] as HTMLElement;
    scrollToElement(htmlElement);
  };

  return { scrollToCategory };
}

export default useNavigation
