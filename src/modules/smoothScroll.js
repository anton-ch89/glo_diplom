//Скролл

// };

const smoothScroll = () => {
   const scrollButton = document.querySelector('.smooth-scroll');
   scrollButton.style.display = 'none';
   document.addEventListener('scroll', () => {
      const posBlock = document.querySelector('#offer').getBoundingClientRect().bottom;
      if (posBlock < 0) {
         scrollButton.style.display = 'block';
      } else {
         scrollButton.style.display = 'none';
      }
   });
   scrollButton.addEventListener('click', () => {
      const elementPosition = document.querySelector('#header').getBoundingClientRect().top;
         window.scrollBy({
            top: elementPosition,
            behavior: 'smooth'
      });
   });
};



export default smoothScroll;