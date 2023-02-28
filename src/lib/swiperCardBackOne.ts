export default function focusBackTwo(node) {
    console.log(node)
    const inputEl = node
    const cardSwiperEl = document.querySelector(".flippable-card-swiper");
    console.log("🚀 ~ file: swiperActions.ts:3 ~ focusSlide ~ swiperEl:", cardSwiperEl)
    inputEl.addEventListener("focus", () => {
        cardSwiperEl?.swiper.slideTo(1);
        flipped = true; 
      });
    return {
		destroy() {
			document.removeEventListener('focus', cardSwiperEl, true);
		}
	};
}