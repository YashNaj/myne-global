if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,a)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const l=e=>i(e,o),d={module:{uri:o},exports:c,require:l};s[o]=Promise.all(r.map((e=>d[e]||l(e)))).then((e=>(a(...e),c)))}}define(["./workbox-5f8782c7"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.d.ts",revision:"8e41236608408c8e12e8a5298a028609"},{url:"app.html",revision:"bb16db069686bd967e8c610031fa927b"},{url:"cardProps.ts",revision:"52bcf68c806dd470b6ba4edf8d275e03"},{url:"forms.ts",revision:"c274d88cf96a9f0afa11a44b9f3da692"},{url:"hooks.server.ts",revision:"5cfa36ce27525b18baf3ded91e220c10"},{url:"index.ts",revision:"2e6c4dba3660924bc464360da2b504ca"},{url:"lib/caps.ts",revision:"38c22c5313b0574ee30c15cab45accce"},{url:"lib/components/AddCard.svelte",revision:"721efa5245310c7a63e58dadfb4263c2"},{url:"lib/components/AddCardTest.svelte",revision:"31de53ca09a4620a5e74cde492bb03ba"},{url:"lib/components/Alert.svelte",revision:"c9cc4c28948d3a0e8beb312187185260"},{url:"lib/components/AutoCompleteDropDown.svelte",revision:"9f90a4e778881409226bb63b93466dd5"},{url:"lib/components/Card.svelte",revision:"71df64a547a9c5f6e1406a7617985c05"},{url:"lib/components/CardButtonWidget.svelte",revision:"46d0cc0ac425b7a69702e11f792f03a5"},{url:"lib/components/CardCell.svelte",revision:"095f783d562848e4ae21b272478109bf"},{url:"lib/components/CardCellDescription.svelte",revision:"506d6afeccff7cc7c3cb412a058937c2"},{url:"lib/components/CardFlippable.svelte",revision:"a90caf4e9f301af14264b0c66bda79c7"},{url:"lib/components/CardSlider.svelte",revision:"001363c8789c026a2af9abc23682df85"},{url:"lib/components/CardVault.svelte",revision:"4d290c18d92e63c9a6e633d054ceb7d3"},{url:"lib/components/Carousel.svelte",revision:"3431170ecda4240151da69f977572b9c"},{url:"lib/components/ChildId.svelte",revision:"d31933ef6c25ce2e014539b69d44cecb"},{url:"lib/components/ChildIdButtonWidget.svelte",revision:"e311f5685f756a8c99c2cfb60fd57d7c"},{url:"lib/components/ComboBox.svelte",revision:"9a7ec4d7e8a89dbbc2e618320ac65c3a"},{url:"lib/components/Context.svelte",revision:"d80186c84ee33845684349c60bbc5114"},{url:"lib/components/CreditCard.svelte",revision:"61d534ae911b1af9357f5a90ae06a81f"},{url:"lib/components/Dashboard.svelte",revision:"c354abf8204fb9b27c0587870d79fe67"},{url:"lib/components/DashBoardActionsGrid.svelte",revision:"c1cdf369f8c5f5367d6dc50d2c7a6fbe"},{url:"lib/components/DashboardFunctions.svelte",revision:"6c71c9f87625a521ec6a07a6d3e4748d"},{url:"lib/components/DashboardSquareButton.svelte",revision:"dc840ed5c9915fc7f774d8e2da9b3081"},{url:"lib/components/Desktop.svelte",revision:"77a9bf4cae5fd7402a34203633cef30e"},{url:"lib/components/DesktopWidget.svelte",revision:"341dfa34fe3c0f3d5ddfef1ee4d4317c"},{url:"lib/components/Dialog.svelte",revision:"1bc1be44a5051105ac85f7dbf3aa0326"},{url:"lib/components/DialogueBox.svelte",revision:"91451357e264fe0e3382e883cc674c42"},{url:"lib/components/fields.ts",revision:"d9a444b553ddffda008c4fc376cf85ab"},{url:"lib/components/Footer2.svelte",revision:"6e9349b98d4d6422c2c039022042debf"},{url:"lib/components/FormControl.svelte",revision:"6e7f41fcb66ffb5ceb4af9523d9bb7b3"},{url:"lib/components/GeneralModal.svelte",revision:"bdbc12fcab4cee7c0ddca922818eddb9"},{url:"lib/components/GenerateImportCSV.svelte",revision:"11ed4541e0a1cc055d9a8d4aa3e91c51"},{url:"lib/components/Helcim.svelte",revision:"4cb0c846983e52204318b0edb9a3b9f6"},{url:"lib/components/HistoryReports.svelte",revision:"d0ca79a894316fdaa3461cf691e4f3f1"},{url:"lib/components/HomeTabs.svelte",revision:"5040f9dbb4ca9279ec85f7cf1e806f4c"},{url:"lib/components/Import.svelte",revision:"fa41b94b195c98f4756f3316a779a087"},{url:"lib/components/infoTooltip.svelte",revision:"52884e2ec5d704c88cb010af56527930"},{url:"lib/components/ItemCertificate.svelte",revision:"05a1fb0f9a32dd30e185f02e2a3a6678"},{url:"lib/components/label.svelte",revision:"5a6b6090f6bf1221b93447b1d80a2d8b"},{url:"lib/components/Listbox.svelte",revision:"446d6c4280d9ddcaf0dd0842c36f375f"},{url:"lib/components/LogoSpin.svelte",revision:"5d0f0cd62ea64772b3dca31193d967aa"},{url:"lib/components/LogOut.svelte",revision:"47baac5d336796f8685799f3453e3093"},{url:"lib/components/Menu.svelte",revision:"e72f38264d0efa7aa0caa98ca237ec59"},{url:"lib/components/MobileNav.svelte",revision:"1194d400b4a23864a24423dcb3c7eb33"},{url:"lib/components/Nav.svelte",revision:"259dc1f0c61ccec591e97124d9517673"},{url:"lib/components/Navbar.svelte",revision:"06d2795348a9b766904b6ab8e3236047"},{url:"lib/components/NextButton.svelte",revision:"d436970aa4f39c0b9c2797bfd0f384a1"},{url:"lib/components/PageContainer.svelte",revision:"f2923e943c6b8d7f2713c3280f89351a"},{url:"lib/components/PageSlide.svelte",revision:"ccc44798b31f6811625ef25b202509a4"},{url:"lib/components/paginateFetch.svelte",revision:"1a5ed35aad72a3e76123dacfb8134639"},{url:"lib/components/PaginationButtons.svelte",revision:"950d94eddc99f363c6ded8a3b516ce12"},{url:"lib/components/Popover.svelte",revision:"a51a76900abf95c1e9e1929761e92f0a"},{url:"lib/components/PopUpComboBox.svelte",revision:"0f49cd7c59e9352e85281836660961e2"},{url:"lib/components/PrevButton.svelte",revision:"3227716e78db42aad0fdba151c745b8a"},{url:"lib/components/ProfileCard.svelte",revision:"41aa2dc6e6a7bc13090010c83dcc873f"},{url:"lib/components/RadioGroup.svelte",revision:"907624c913d241f06f9b15917a9055a6"},{url:"lib/components/RequestInventory.svelte",revision:"9256dcbec6093bb22f2ee28aaea5a2e6"},{url:"lib/components/resultText.svelte",revision:"9b6c0c1375f0a6cae26f41cb7587d9f0"},{url:"lib/components/rowCount.svelte",revision:"34a46db0a439e50a689fc77e0f02831b"},{url:"lib/components/Slide.svelte",revision:"feebde0cdd79f71bb7d63dbbfa6d8078"},{url:"lib/components/SliderOldBACKUP.svelte",revision:"2a8fb65750ba7b1918c532d9fa56163e"},{url:"lib/components/SlideUp.svelte",revision:"90b68a063d3237ff8d6b6e19055c7148"},{url:"lib/components/Spinner.svelte",revision:"a8aea5a49e7de9f7f98aadea6214defb"},{url:"lib/components/Stat.svelte",revision:"7a522dc43019b930ea5731d3eeb71866"},{url:"lib/components/SwiperPictures.svelte",revision:"500ec192656857c66e653cd9419b820f"},{url:"lib/components/SwiperStandard.svelte",revision:"676f467cc7fe279778847e9c547f4dbf"},{url:"lib/components/Switch.svelte",revision:"996538aeb29ab4dbd5aea7a22e06ef8d"},{url:"lib/components/Tab.svelte",revision:"0e280d4780e75c1deeef6f80ab2c0f73"},{url:"lib/components/TabbedWindow.svelte",revision:"cbc1db20e1de91ba3e3d0db834284746"},{url:"lib/components/Tabby.svelte",revision:"45659209693c7fc8e120a53bef7c5af5"},{url:"lib/components/TabContainer.svelte",revision:"21cc4b2c89d8ca12a1d7604589775b9d"},{url:"lib/components/Tabs.svelte",revision:"52d7db20389be7d9b96a6d995dbfa65e"},{url:"lib/components/Tooltip.svelte",revision:"1bfbb2ae44a719301b5015bdc7d3a0b7"},{url:"lib/components/Transition.svelte",revision:"3bf5312fbac085f2dfbd556e15db14d8"},{url:"lib/components/UploadWidget.svelte",revision:"33fb147df204aad99d8ec196688b32e5"},{url:"lib/components/UserHeader.svelte",revision:"5838cbd6c0777d0fc8f8360e9a4b8138"},{url:"lib/const/index.ts",revision:"1d62f94256db8145243420fbac2cb564"},{url:"lib/const/vaultLock.svg",revision:"656b4caa6f23224769c50502108f2089"},{url:"lib/images/android-chrome-512x512.png",revision:"c0867c4a37265f446ac260b01dd49923"},{url:"lib/images/android.svg",revision:"4b3cdf571cca5f66cbabf9241d90acbe"},{url:"lib/images/blue_icon.png",revision:"43a9805e977457dc4303f8cc6dce10a5"},{url:"lib/images/blue_myne_logo.png",revision:"8f596c6931c46edfa702aff16c9f2956"},{url:"lib/images/button-wave.svg",revision:"2e8c1ae8cfcd122f8eaecb7deb8365a5"},{url:"lib/images/desktopAuthWave.svg",revision:"5148e47b2bfe859c1145fca7783592a7"},{url:"lib/images/logo_1.svg",revision:"93a058f0f3f90f4327932de53a901cc0"},{url:"lib/images/logo_2.svg",revision:"a8a5bffd88b0e209c0084b7bd5c1a6a7"},{url:"lib/images/myne_logo.svg",revision:"3cc6b20fbdd06868748e67610a7ac0fe"},{url:"lib/images/myne_logo.svg.svg",revision:"28c07b8a9e8d69d7dac30dc6d7104a98"},{url:"lib/images/test_watch_placeholder.png",revision:"8c786cec37d11e505943594159b0e544"},{url:"lib/images/VaultLock.svg",revision:"f58a430ddf33b6c568758f85d7acfa11"},{url:"lib/images/white_icon.png",revision:"48875594dc607516e9058f08981f3d01"},{url:"lib/images/white_myne_logo.png",revision:"2457c479575fd48c4dcd2b5db501ad16"},{url:"lib/interfaces/errors.ts",revision:"8a1c095ff2be5965efb86408bd04e3f7"},{url:"lib/interfaces/index.ts",revision:"ad5673a3113a72939e742912c8dca378"},{url:"lib/models/animal.ts",revision:"72167d16651dd326daf31023a83a5037"},{url:"lib/models/art.ts",revision:"640f552068c95e4fecbc081a8f4c85a6"},{url:"lib/models/cards.ts",revision:"0c254c48d0620293eed8f8b47bbfd14f"},{url:"lib/models/childId.ts",revision:"c5d32a13fc8d3c5f3ec613a09e62a0bc"},{url:"lib/models/clothing.ts",revision:"925527a9e60c3d6338661b19574c7118"},{url:"lib/models/collectibles.ts",revision:"dd3adac91fc6e9c88636ee21139266bb"},{url:"lib/models/crypto.ts",revision:"96adde905bb9cc7c0d16987250bed05d"},{url:"lib/models/emailVerificationRequests.ts",revision:"ffff33c6b101bd14b44ee4d683ad48e4"},{url:"lib/models/guns.ts",revision:"4cb48d4ff85664f327575907f26cb786"},{url:"lib/models/jewlery.ts",revision:"97655a94618eb6d6674bbbbd34636510"},{url:"lib/models/leather.ts",revision:"c1a5abc1220bce4bf2573cc7bb566312"},{url:"lib/models/modelMaster.ts",revision:"5a1c80d8914bf8d1a58456beb06b9a86"},{url:"lib/models/motorVehicle.ts",revision:"9e06293ad0767db5f1f1e80fd21bfdcd"},{url:"lib/models/nft.ts",revision:"3905fe5a09f113f69077e515a5f753c1"},{url:"lib/models/other.ts",revision:"9180f3bd8b9d50987bddc18a42f973f2"},{url:"lib/models/passwordResetRequests.ts",revision:"26830ff24d785f104cd308ea37000212"},{url:"lib/models/sneaker.ts",revision:"fbdaa5aaf5027332d294501434ac77db"},{url:"lib/models/technology.ts",revision:"8790a294999d102a3a23ec1bac6d925f"},{url:"lib/models/tradingCard.ts",revision:"3f79a403445147b7d8d14c06f212debc"},{url:"lib/models/vintage.ts",revision:"84e415103c51e89c27d513cd98f1898c"},{url:"lib/models/watches.ts",revision:"34a364544dae3155b45793330a788140"},{url:"lib/schemas/index;.ts",revision:"746dd67f34bacc6ab74779144b873f5b"},{url:"lib/schemas/index..ts",revision:"746dd67f34bacc6ab74779144b873f5b"},{url:"lib/schemas/pasrser.ts",revision:"a313832d1fdc765fe0bdfd3dd339e939"},{url:"lib/search.ts",revision:"7d64ca0392f7e6eb6493437215601669"},{url:"lib/server/client.ts",revision:"87a9568490873e0f8e65323d1ea9b0bd"},{url:"lib/server/db.ts",revision:"eaa6ee357164f3bea2eec6ad93418c1e"},{url:"lib/server/helcim.ts",revision:"6bf99726945a2ce0b79e4ef26d749845"},{url:"lib/server/lucia.ts",revision:"3089fa63e0cc44aa16f72f7abb6a1ec5"},{url:"lib/server/redis.ts",revision:"7c5737627370c3e5ce316e1025757509"},{url:"lib/server/roles.ts",revision:"071fdf097b2ca1213c14401756baea29"},{url:"lib/server/server.ts",revision:"d70a7f33371b0bbda82efa39261f8ac3"},{url:"lib/stores.ts",revision:"dd2240528e9baab289d82dd88b3d172b"},{url:"lib/supabaseClient.ts",revision:"95e4d1013e7b898a7864b23df38b0b6a"},{url:"lib/swiperActions.ts",revision:"dc8e6c62e36c72995eb05e42d1750876"},{url:"lib/swiperCardBackTwo.ts",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"lib/trpc/client.ts",revision:"01f687dd74972dbc5175a631d806eb57"},{url:"lib/trpc/context.ts",revision:"bd3d02c039cf907112df6c272b375869"},{url:"lib/trpc/router.ts",revision:"16645eaadd962757b9feb1227403518c"},{url:"lib/trpc/routes/myneCards.ts",revision:"d2199505fc763f2a8491c4f76dcf6283"},{url:"lib/trpc/t.ts",revision:"5985e5dee0ec8877f8bb1a8d4e12e4e8"},{url:"lib/utils/addCardSwiperActions.ts",revision:"76420967a4c07f7bb7e290e966ae18a7"},{url:"lib/utils/errors.ts",revision:"d3f787f5525cc30e4373b4d2e8d7c724"},{url:"lib/utils/index.ts",revision:"35333983997f10211a84adfd46d81671"},{url:"routes/(app)/+layout.svelte",revision:"16b2d994a28a4d2c877c287f10cf92ff"},{url:"routes/(app)/+page.server.ts",revision:"2f26907bc13e48a7fa331df9a67ffcb2"},{url:"routes/(app)/+page.svelte",revision:"c17bf3598e8aab36f97b3a2320acd235"},{url:"routes/(app)/add_card/+page.server.ts",revision:"94f51ef61ed6c4f30a0684e79b92a70f"},{url:"routes/(app)/add_card/+page.svelte",revision:"a09c81590f9b90fa4cdbd308809f36b8"},{url:"routes/(app)/admin/+page.server.ts",revision:"41aa7c8e6b448f8c40090c38bd8d0f91"},{url:"routes/(app)/admin/+page.svelte",revision:"d49698cd18f1d107c33d266e36a29cc2"},{url:"routes/(app)/search_stolen/+page.server.ts",revision:"8031c7fc36d7dcd2f6149f7800bda6ef"},{url:"routes/(app)/search_stolen/+page.svelte",revision:"4279de850054b83d340a1946616feae0"},{url:"routes/(app)/settings/+page.server.ts",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"routes/(app)/settings/+page.svelte",revision:"6fcf20109c974f8fe3fcffc6afbf655f"},{url:"routes/(app)/signout/+page.server.ts",revision:"36a7166412f23b902c274dbdfe97afa4"},{url:"routes/(app)/test/+page.server.ts",revision:"8031c7fc36d7dcd2f6149f7800bda6ef"},{url:"routes/(app)/test/+page.svelte",revision:"2692aad8c719868cf456c8ad1070e70a"},{url:"routes/(app)/test2/+page.server.ts",revision:"3aef21b4477ab297be5d5b27007f3a7b"},{url:"routes/(app)/test2/+page.svelte",revision:"2db0616741589c11ca4c5efc0aa87a47"},{url:"routes/(app)/unverified-email/+page.svelte",revision:"2f32955f89b370b7ec9925013aa2f067"},{url:"routes/(auth)/+layout.svelte",revision:"f08bf7412b9d6cc3137b6fddb2ff2245"},{url:"routes/(auth)/signin/+page.server.ts",revision:"e6e6e21bdda2d101fe9b740d0782b4e7"},{url:"routes/(auth)/signin/+page.svelte",revision:"3738b13ab994d1dd4a9fdc4eb5aa81c5"},{url:"routes/(auth)/signup/+page.server.ts",revision:"59071668c4845c1fb701591f1d3e95ac"},{url:"routes/(auth)/signup/+page.svelte",revision:"0152eee3a0d929a49fd296375b5a0101"},{url:"routes/+layout.server.ts",revision:"286b674a6511733ed23793e3d9974b80"},{url:"routes/+layout.svelte",revision:"0ad1c096359bb200b713e101e764a3cb"},{url:"routes/api/cardFetch/+server.ts",revision:"581a9a0f5125680c92271db863bdd219"},{url:"routes/api/get-cards/+server.ts",revision:"abb1d2597dd08df2aacb6bdda40cab84"},{url:"routes/api/get-records/+server.ts",revision:"0a35061d1bd5eaea6540330809429702"},{url:"routes/api/helcim/+server.ts",revision:"9760510cd57f3dbc75a5461bd8825f23"},{url:"routes/api/test/+server.ts",revision:"8804d1c78ef5666704128dddc48bf2b9"},{url:"routes/api/user/+server.ts",revision:"65022ee70cde2e37048468c1017f1d62"},{url:"routes/api/user/password/+server.ts",revision:"0897d2f06e41c86949b965bff305a0d1"},{url:"routes/api/verify-email/+server.ts",revision:"5cb0a3516661bf30de89e91c81fac709"},{url:"routes/app.css",revision:"fca494de6e4b49eb92f6cf84d5c4951e"},{url:"routes/brandsAndBreeds.ts",revision:"e453f29dd8a387e5864f4a177ec599b9"},{url:"routes/fieldProps.ts",revision:"f0a76787f4448be911a82c1da98ebed7"},{url:"routes/index.ts",revision:"ceca2f0e832b0c1f64403bdd3fb87cea"},{url:"routes/svelteSelect.css",revision:"204174733f8275e2a2441f3a57a65d4e"},{url:"select.css",revision:"f76012cb3784bff93e07340e7ead8b2e"},{url:"size.ts",revision:"d034904412bc1293b41b8d6b3bf1d7f9"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map