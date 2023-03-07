export default function addCardSwiperAction(node) {
    console.log("🚀 ~ file: swiperActions.ts:2 ~ focusSlide ~ node:", node)
    const inputEl = node
    const swiper = document.querySelector('.swiper-container').swiper

    const activeIndex = swiper?.activeIndex
    console.log("🚀 ~ file: swiperActions.ts:7 ~ focusSlide ~ activeIndex:", activeIndex)
    
    console.log("🚀 ~ file: swiperActions.ts:3 ~ focusSlide ~ swiperEl:", swiper)
    inputEl.addEventListener("focus", () => {
        cardSwiperEl?.swiper.slideTo(activeIndex + 1);
      });
   
    return {
		destroy() {
			inputEl.removeEventListener('focus',{}, true);
		}
	};
}