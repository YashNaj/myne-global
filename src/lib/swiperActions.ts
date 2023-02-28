export default function  focusSlide(node) {
    console.log("🚀 ~ file: swiperActions.ts:2 ~ focusSlide ~ node:", node)
    const inputEl = node
    const cardSwiperEl = document.querySelector(".flippable-card-swiper");
    const activeIndex = cardSwiperEl.swiper.activeIndex
    console.log("🚀 ~ file: swiperActions.ts:7 ~ focusSlide ~ activeIndex:", activeIndex)
    
    console.log("🚀 ~ file: swiperActions.ts:3 ~ focusSlide ~ swiperEl:", cardSwiperEl)
    inputEl.addEventListener("focus", () => {
        cardSwiperEl?.swiper.slideTo(activeIndex + 1);
      });
    return {
		destroy() {
			document.removeEventListener('focus', cardSwiperEl, true);
		}
	};
}