<script lang="ts">
  import { firstCapital } from "$lib/caps";
  export let size = "9";
  import logo from "$lib/images/myne_logo.svg";
  import { TabPanel } from "@rgossiaux/svelte-headlessui";
  import { Icon, Plus } from "svelte-hero-icons";
  import { fade, fly, scale, slide } from "svelte/transition";
  import AddCard from "./AddCard.svelte";
  import CardFlippable from "./CardFlippable.svelte";
  import Spinner from "./Spinner.svelte";
  import SwiperPictures from "./SwiperPictures.svelte";
  import { addCard, certificate, documentUpload, stolen, transfer, userCards } from "$lib/store";
  import UserSelector from "./UserSelector.svelte";
  import ReportStolen from "./ReportStolen.svelte";
  import MakeCertificate from "./MakeCertificate.svelte";
  import CardButtonDocumentUpload from "./CardButtonDocumentUpload.svelte";
  import CardFunctionModals from "./CardFunctionModals.svelte";
  import CardVaultMenu from "./CardVaultMenu.svelte";
  export let data;
  let addCardOpen = false;
  let loading = false;
  let categoryFilter: string;
  let cardExpanded: boolean = false;
  $: cardExpanded = cardExpanded;
  $: categoryFilter = categoryFilter;
  let filteredCards;
  let categories = [
    "jewelry",
    "watch",
    "art",
    "leather",
    "clothing",
    "sneakers",
    "firearms",
    "technology",
    "trading cards",
    "collectibles",
    "crypto",
    "nft",
    "dog",
    "cat",
    "bird",
    "other animal",
    "vintage",
    "automobile",
    "motorcycle",
    "other",
  ];
  let inputText: string;
  function filterByTextInput(array, inputText) {
    return array.filter((item) => {
      return Object.values(item).some((value) => String(value).toLowerCase().includes(inputText.toLowerCase()));
    });
  }

  let isLoading;
  $: filteredCards = $userCards;
  $: categories = categories.sort();
  let cardsFiltered;
  $: cardsFiltered = filteredCards.filter((item) => {
    if (categoryFilter === "All") {
      return $userCards;
    }
    if (!inputText) {
      return item.category === categoryFilter;
    } else if (inputText) {
      const inputFilter = filterByTextInput($userCards, inputText);
      return (cardsFiltered = inputFilter);
    }
  });
  $: console.log(categoryFilter);
  $: {
    if (inputText != null && inputText !== "") {
      cardsFiltered = filterByTextInput($userCards, inputText);
    } else {
      console.log("The string is null or empty");
    }
  }
  let scrollContainer;
  let h;
  let w;
  let scrollTop;
  export let mobile: boolean = false;
  $: console.log(
    "check if the card is expanded and use that switch to disable the scroll in the cardvault",
    cardExpanded
  );
</script>

<div class="lg:w-full h-[99%] p-2 rounded-2xl">
  <CardFunctionModals />
  <CardVaultMenu bind:categoryFilter bind:inputText />
  {#if $addCard}
    <div class=" flex flex-row w-full h-full justify-center items-center flex-wrap">
      <AddCard {mobile} />
    </div>
  {:else}
    <div
      class:translate-y-full={addCardOpen}
      class:ease-linear={addCardOpen}
      class="h-[80%] rounded-xl justify-center overflow-y-auto w-full overflow-x-hidden transition-shadow duration-75 will-change-transform"
    >
      {#await import("$lib/components/Card.svelte")}
        <div
          bind:clientHeight={h}
          bind:clientWidth={w}
          class="w-full h-full bg-primary p-1 flex justify-center content-center flex-wrap"
          out:fly|local={{ duration: 200 }}
        >
          <h1 class="text-8xl w-full justify-center flex text-white font-semibold">Card Vault</h1>
          <div class="spinner container flex justify-center">
            <div class="flex flex-col justify-center content-center flex-wrap w-{size} h-{size} rounded-full">
              <div class="rounded-full">
                <svg
                  class="animate-[spin_.8s_ease-in-out_infinite]"
                  version="1.1"
                  id="svg183"
                  width="200"
                  height="200"
                  viewBox="0 0 981.08368 981.48389"
                  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:svg="http://www.w3.org/2000/svg"
                >
                  <defs id="defs187" />
                  <sodipodi:namedview
                    id="namedview185"
                    pagecolor="#ffffff"
                    bordercolor="#000000"
                    borderopacity="0.25"
                    inkscape:showpageshadow="2"
                    inkscape:pageopacity="0.0"
                    inkscape:pagecheckerboard="0"
                    inkscape:deskcolor="#d1d1d1"
                    showgrid="false"
                  />
                  <g
                    id="g191"
                    inkscape:label="Page 1"
                    transform="matrix(1.3333333,0,0,-1.3333333,-750.35516,1188.5708)"
                  >
                    <g id="g193">
                      <g id="g195" transform="matrix(1200,0,0,867,360,107)">
                        <path
                          style="fill:#FFFFFF;fill-opacity:1;stroke-width:0.000980392"
                          d="m 0.43145482,0.40607079 c -6.0045e-4,0.001553 -8.143e-4,0.016269 -6.5432e-4,0.0450256 2.6335e-4,0.0473369 -5.617e-5,0.0448887 0.005863,0.0449221 l 0.003125,1.765e-5 6.66e-6,0.016436 c 3.34e-6,0.00904 3.9634e-4,0.0197631 8.7305e-4,0.0238296 0.00171,0.0145861 0.007781,0.0260562 0.0175517,0.0331587 0.004094,0.002976 0.00525,0.003262 0.0132487,0.003269 0.008207,8.07e-6 0.009112,-2.2959e-4 0.0142688,-0.00374 0.006527,-0.004444 0.0116453,-0.0116775 0.0147512,-0.0208477 0.002102,-0.006206 0.002239,-0.007712 0.002634,-0.0290371 l 4.1667e-4,-0.0224914 0.003323,-3.743e-4 c 0.001828,-2.0587e-4 0.003796,-9.1821e-4 0.004375,-0.001583 0.001484,-0.001704 0.001534,-0.0874568 5.225e-5,-0.0895075 -7.4927e-4,-0.001037 -0.0107713,-0.001384 -0.0399707,-0.001384 -0.0381179,0 -0.0389902,5.052e-5 -0.0398627,0.002307 z m 0.0631897,0.11159168 c -3.0339e-4,0.0239938 -7.81e-4,0.0264885 -0.006658,0.0347769 -0.0116423,0.0164196 -0.0321077,0.0100604 -0.0379268,-0.0117849 -6.0186e-4,-0.002259 -0.001003,-0.01155 -0.001042,-0.0241454 l -6.34e-5,-0.0204729 h 0.0229821 0.0229816 z"
                          id="path285"
                        />
                        <path
                          style="fill:#FFFFFF;fill-opacity:1;stroke-width:0.000980392"
                          d="m 0.45895482,0.05624225 c -0.002979,1.9879e-4 -0.0106667,0.001169 -0.0170833,0.002156 -0.0904125,0.01390722 -0.1717162,0.08241668 -0.22165292,0.18677281 -0.034199,0.071468 -0.0512466,0.14974039 -0.0512466,0.23529412 0,0.0987607 0.0230824,0.18934472 0.0680394,0.26701269 0.0398768,0.0688913 0.0961144,0.11961901 0.15858759,0.14305004 0.026841,0.0100669 0.0502663,0.0142335 0.0800225,0.0142335 0.0227228,0 0.0358877,-0.00159 0.05625,-0.006792 0.0716592,-0.0183069 0.13751918,-0.0729278 0.18300771,-0.15177709 0.035821,-0.0620921 0.057781,-0.13375 0.065351,-0.21324784 0.00184,-0.0192669 0.00253,-0.065383 0.0013,-0.0859285 C 0.77709842,0.37308949 0.76039232,0.30635077 0.73100492,0.24517106 0.67083362,0.11990426 0.56862535,0.04892437 0.45895482,0.05624225 Z m 0.0241119,0.06400059 c 0.0134113,0.008892 0.0291669,0.0460709 0.0414556,0.0978233 0.006015,0.0253315 0.0140954,0.0716971 0.0165599,0.0950214 l 5.9517e-4,0.005633 -0.003653,-7.0692e-4 c -0.0185584,-0.003591 -0.0924052,-0.003726 -0.12406964,-2.267e-4 -0.074625,0.008248 -0.13459232,0.0271525 -0.1799253,0.0567216 -0.00523,0.003411 -0.009661,0.005991 -0.009848,0.005732 -8.8009e-4,-0.001218 0.006627,-0.030398 0.0126417,-0.0491407 0.0179271,-0.0558594 0.0493279,-0.10879207 0.0867153,-0.14617662 0.016867,-0.0168658 0.0403936,-0.0341922 0.0604167,-0.0444946 0.008119,-0.004177 0.0249017,-0.011419 0.0298652,-0.0128865 l 0.002782,-8.2253e-4 -0.004185,0.010783 c -0.009038,0.0232884 -0.0187768,0.0569829 -0.0250464,0.0866592 -0.002948,0.0139523 -0.008775,0.0492458 -0.00823,0.0498433 1.2691e-4,1.3907e-4 0.005293,0.00167 0.0114808,0.003402 0.006187,0.001732 0.0120937,0.003418 0.013125,0.003748 0.001473,4.7073e-4 0.001875,9.492e-5 0.001875,-0.001754 0,-0.004134 0.008197,-0.0477678 0.0119786,-0.0637667 0.009828,-0.0415736 0.0217681,-0.073961 0.033594,-0.0911212 l 0.004681,-0.006793 h 0.0116934 c 0.0103118,0 0.0121429,2.9806e-4 0.015498,0.002523 z m 0.074949,0.0158828 c 0.0739907,0.0342342 0.1333809,0.11246967 0.1620179,0.21342838 0.00415,0.0146267 0.00765,0.0298208 0.00707,0.030634 -2.078e-4,2.8766e-4 -0.00476,-0.002361 -0.010118,-0.005885 -0.0309628,-0.0203705 -0.0701973,-0.0360608 -0.1155,-0.0461896 -0.00709,-0.001585 -0.0131473,-0.003458 -0.0134616,-0.004162 -3.1437e-4,-7.0402e-4 -8.2431e-4,-0.004185 -0.001133,-0.007735 -8.3318e-4,-0.009576 -0.005988,-0.0469973 -0.008806,-0.0639313 -0.006686,-0.0401484 -0.0162003,-0.0789662 -0.0263154,-0.10734585 -0.002465,-0.006915 -0.004481,-0.0127543 -0.004481,-0.0129758 0,-7.4058e-4 8.1375e-4,-4.2486e-4 0.0107271,0.004162 z m -0.0557276,0.24110365 c 0.0116875,6.0575e-4 0.0265762,0.001711 0.0330861,0.002456 0.0117674,0.001347 0.0118385,0.001372 0.0122605,0.004354 0.00258,0.0182368 0.003583,0.13379103 0.001482,0.17081998 -0.003253,0.0573431 -0.008601,0.1058401 -0.0164608,0.14929166 -0.0129027,0.0713263 -0.0327318,0.12542794 -0.0501166,0.13673846 -0.003694,0.002404 -0.004864,0.00256 -0.0156177,0.002085 l -0.0116242,-5.1346e-4 -0.00403,-0.006227 c -0.0220005,-0.033999 -0.0409977,-0.1063895 -0.0510878,-0.19467787 -7.4922e-4,-0.006556 -0.001238,-0.0120832 -0.001085,-0.0122832 1.5237e-4,-2.0005e-4 0.006465,3.5528e-4 0.014027,0.001234 0.007562,8.7879e-4 0.0233125,0.001883 0.035,0.002231 0.0116875,3.481e-4 0.0226562,8.2515e-4 0.024375,0.00106 l 0.003125,4.272e-4 v -0.018274 -0.018274 l -0.003542,-5.947e-4 c -0.001948,-3.2708e-4 -0.0131042,-8.8415e-4 -0.0247917,-0.001238 -0.0116875,-3.5377e-4 -0.027625,-0.0014 -0.0354167,-0.002325 -0.007792,-9.25e-4 -0.0146056,-0.001697 -0.0151421,-0.001716 -0.001379,-4.868e-5 -0.001723,-0.003246 -0.00335,-0.0311763 -0.002431,-0.0417289 -0.001826,-0.14088202 0.001057,-0.17313328 l 4.7498e-4,-0.005313 0.0105632,-0.001296 c 0.0345559,-0.00424 0.0640419,-0.005353 0.0968138,-0.003655 z m -0.1352963,0.0210317 c -0.002636,0.0514034 -0.002658,0.11435765 -5.658e-5,0.1628873 7.3776e-4,0.0137627 0.001213,0.0251874 0.001056,0.0253883 -9.4824e-4,0.001211 -0.0356044,-0.007675 -0.0536192,-0.0137492 -0.044229,-0.0149126 -0.0795124,-0.0362122 -0.0960131,-0.0579604 l -0.004193,-0.005527 -5.4776e-4,-0.0144175 c -4.1954e-4,-0.0110428 -2.6531e-4,-0.0157132 6.5891e-4,-0.0199528 0.006561,-0.0300992 0.0584971,-0.0634775 0.12676184,-0.0814682 0.0190131,-0.005011 0.0213774,-0.005572 0.0240831,-0.005716 l 0.002416,-1.2899e-4 z m 0.24279634,-0.004832 c 0.0623805,0.0161988 0.11329646,0.0468393 0.12546926,0.0755058 0.00244,0.005741 0.00245,0.005827 0.00223,0.0224878 l -2.119e-4,0.0167243 -0.00479,0.006094 c -0.021888,0.0278569 -0.0675181,0.0522917 -0.12548185,0.067195 -0.007715,0.001984 -0.0142228,0.003336 -0.0144621,0.003005 -2.3921e-4,-3.3109e-4 -2.591e-5,-0.007252 4.7394e-4,-0.0153796 0.00218,-0.0354411 0.002949,-0.0870751 0.001874,-0.12588768 -5.7351e-4,-0.0207234 -0.001256,-0.041411 -0.001518,-0.0459723 -4.4053e-4,-0.007691 -3.6129e-4,-0.008259 0.001092,-0.007818 8.617e-4,2.6158e-4 0.007754,0.002082 0.0153177,0.004046 z M 0.25228842,0.58405841 c 0.0296719,0.016473 0.0678814,0.0300711 0.10624974,0.0378126 0.006875,0.001387 0.0125628,0.002578 0.0126395,0.002647 7.675e-5,6.851e-5 0.001112,0.008429 0.0023,0.0185782 0.008975,0.0766607 0.0222709,0.13889315 0.0384666,0.18004696 0.002023,0.005139 0.003677,0.009643 0.003677,0.0100091 0,9.4168e-4 -0.0132302,-0.004076 -0.0238464,-0.009044 -0.0377687,-0.017675 -0.0723561,-0.0474787 -0.10100725,-0.0870373 -0.0275174,-0.0379933 -0.0473363,-0.0806066 -0.0611405,-0.13146077 -0.002827,-0.0104144 -0.009006,-0.0389935 -0.009006,-0.0416545 0,-4.9069e-4 0.004594,0.002427 0.0102086,0.006483 0.005615,0.004056 0.015271,0.0101856 0.0214587,0.0136197 z m 0.4750161,-0.002313 c -0.020269,0.0959395 -0.0685902,0.17658 -0.13293708,0.22185261 -0.007331,0.005158 -0.0176418,0.0117148 -0.0229126,0.0145709 -0.0110986,0.006014 -0.0233875,0.01151 -0.0239609,0.0107163 -2.1772e-4,-3.0134e-4 3.6223e-4,-0.002262 0.001289,-0.004357 9.2655e-4,-0.002095 0.003456,-0.009259 0.005622,-0.01592 0.0145477,-0.0447519 0.0252054,-0.0988152 0.0325146,-0.16493656 0.001227,-0.0111015 0.002282,-0.0202729 0.002345,-0.0203809 6.258e-5,-1.0796e-4 0.006862,-0.001806 0.0151107,-0.003774 0.0459416,-0.0109581 0.0826724,-0.0261574 0.11165548,-0.0462031 0.0078,-0.005392 0.014279,-0.009281 0.014406,-0.008642 1.268e-4,6.3933e-4 -0.00128,0.008322 -0.00313,0.0170729 z"
                          id="path199"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      {:then Module}
        <div
          class="w-full h-[99%] grid grid-rows-none grid-flow-row grid-cols-2 gap-1 overflow-y-auto
            md:grid-cols-4 md:gap-2 relative place-items-center will-change-auto {cardExpanded
            ? 'overflow-x-disabled overflow-y-disabled'
            : ''}"
          in:fade|local={{ duration: 200, delay: 250 }}
          bind:this={scrollContainer}
          on:scroll={() => (scrollTop = scrollContainer.scrollTop)}
        >
          {#if cardsFiltered?.length === 0}
            <div transition:scale|local={{ delay: 10 }}>
              <Module.default>
                <h1 class="w-full h-full grid place-items-center text-primary font-semibold text-2xl">
                  No cards found
                </h1>
              </Module.default>
            </div>
          {/if}
          {#each cardsFiltered as cardProps, i}
            <div transition:scale|local={{ delay: 10 }}>
              <Module.default
                {w}
                {h}
                {scrollTop}
                cardDisplayId={i}
                cardProps={structuredClone({ ...cardProps })}
                {mobile}
                cardFrontSwiperId={i}
                bind:expanded={cardExpanded}
              >
                <SwiperPictures {mobile} pictures={structuredClone(cardProps.pictures)} />
              </Module.default>
            </div>
          {/each}
        </div>
      {/await}
    </div>
  {/if}
</div>
