const scrollToElement = (htmlElement: HTMLElement): void => {
  htmlElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default scrollToElement;
