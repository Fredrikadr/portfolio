import { scroller } from 'react-scroll';

function handleLinkClick(section: string) {
  scroller.scrollTo(section, {
    duration: 50,
    delay: 0,
    smooth: 'easeInOutQuad'
  });
}

export { handleLinkClick }