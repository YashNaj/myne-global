export default function  focusBackTwo(node) {
    console.log("🚀 ~ file: swiperActions.ts:2 ~ focusSlide ~ node:", node)
    const inputEl = node
    const cardSwiperEl = document.querySelector(".flippable-card-swiper");
    const activeIndex = cardSwiperEl.swiper.activeIndex
    console.log("🚀 ~ file: swiperActions.ts:7 ~ focusSlide ~ activeIndex:", activeIndex)
    
    console.log("🚀 ~ file: swiperActions.ts:3 ~ focusSlide ~ swiperEl:", cardSwiperEl)
    inputEl.addEventListener("focus", () => {
        cardSwiperEl?.swiper.slideTo(activeIndex + 2);
      });
   
    return {
        update() {
            const inputEl = node
            const activeIndex = cardSwiperEl.swiper.activeIndex
        },
		destroy() {
			document.removeEventListener('focus', cardSwiperEl, true);
		}
	};
}