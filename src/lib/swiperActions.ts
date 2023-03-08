export default function  focusSlide(node) {
    console.log("🚀 ~ file: swiperActions.ts:2 ~ focusSlide ~ node:", node)
    const inputEl = node
    const swiper = document.getElementByClassName('.flippable-card-swiper').swiper
    console.log("🚀 ~ file: swiperActions.ts:5 ~ focusSlide ~ swiper:", swiper)

    const activeIndex = swiper.activeIndex
    console.log("🚀 ~ file: swiperActions.ts:7 ~ focusSlide ~ activeIndex:", activeIndex)
        inputEl.addEventListener("focus", () => {
        swiper.slideNext();
      });
   
    return {
		update() {
			inputEl.removeEventListener('focus',{}, true);
		}
	};
}