<script>
  import { Icon } from "svelte-icons-pack";
  import { FiVideo ,FiX} from "svelte-icons-pack/fi";

  import phone from '../assets/images/phone/3-phone-full.png'
  
  import Navbar from "../components/navbar.svelte";
  import AboutOne from "../components/about-one.svelte";
  import FeatureTwo from "../components/feature-two.svelte";
  import AboutTwo from "../components/about-two.svelte";
  import Screenshot from "../components/screenshot.svelte";
  import FaqOne from "../components/faq-one.svelte";
  import Download from "../components/download.svelte";
  import ClientOne from "../components/client-one.svelte";
  import ContactOne from "../components/contact-one.svelte";
  import Partner from "../components/partner.svelte";
  import Footer from "../components/footer.svelte";
  import ScrollToTop from "../components/scroll-to-top.svelte";
  import Switcher from "../components/switcher.svelte";
  let open = false;

</script>

<Navbar navLight={true} playBtn={true} bgWhite={false} navCenter={false}/>

<!-- Start Hero -->
<section class="relative pt-24 xl:pb-[420px] md:pb-80 pb-36 items-center overflow-hidden bg-red-500 bg-[url('../../assets/images/bg2.png')] bg-center bg-no-repeat bg-cover" id="home">
    <div class="container relative">
        <div class="grid grid-cols-1 mt-10 text-center">
            <h3 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5 text-white">Get started with <br> Appever Template.</h3>

            <p class="text-white/70 text-lg max-w-xl mx-auto">Gain valuable insights into user behavior and drive data-informed decision-making with our revolutionary platform.</p>
        
            <div class="mt-6">
                <a href="#top" class="py-1.5 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-white text-slate-900 rounded-md">Download Now</a>
                <a href="#top" on:click|preventDefault={()=>{open = !open}} class="size-9 inline-flex items-center justify-center align-middle rounded-full bg-white text-slate-900 m-1 lightbox"><Icon src={FiVideo} className="size-4"></Icon></a><span class="font-semibold text-white ms-1 align-middle">Watch Now</span>
            </div>
        </div><!--end grid-->
    </div><!--end container-->
</section><!--end section-->
<div class="relative">
    <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
        <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
    </div>
</div>
<!-- End Hero -->

 <!-- START -->
<section class="relative mt-8">
    <div class="container relative">
        <div class="grid grid-cols-1 justify-center">
            <div class="relative z-2 duration-500 xl:-mt-[400px] lg:-mt-[320px] md:-mt-[350px] -mt-[140px] m-0">
                <img src={phone} class="lg:px-10" alt="">
            </div>
        </div>
    </div>
</section>
<!-- End -->


 <!-- Start -->
 <section class="relative md:py-24 py-16" id="features">
    <div class="container relative md:mb-24 mb-16">
        <AboutOne/>
    </div><!--end container-->

    <FeatureTwo/>

    <div class="container relative md:mt-24 mt-16">
        <AboutTwo/>
    </div><!--end container-->
</section><!--end section-->
<!-- End -->

<!-- Start -->
<section class="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20" id="screenshot">
    <div class="container relative">
        <div class="grid grid-cols-1 pb-6 text-center">
            <h6 class="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Screenshots</h6>
            <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Simple & Beautiful Interface</h4>

            <p class="text-slate-400 max-w-xl mx-auto">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
        </div><!--end grid-->

        <Screenshot/>
    </div><!--end container-->
</section><!--end section-->
<!-- End -->

<!-- Start -->
<section class="relative overflow-hidden md:py-24 py-16" id="faqs">
    <FaqOne/>
</section><!--end section-->
<!-- End Section-->

 <!-- Start -->
 <section class="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20" id="download">
    <Download/>
</section><!--end section-->
<!-- End -->

 <!-- Start -->
 <section class="relative md:py-24 py-16" id="reviews">
    <div class="container relative">
        <div class="grid grid-cols-1 pb-6 text-center">
            <h6 class="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Reviews</h6>
            <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">10k+ Customers Trust Us</h4>

            <p class="text-slate-400 max-w-xl mx-auto">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
        </div><!--end grid-->

        <ClientOne/>
    </div><!--end container-->
</section><!--end section-->
<!-- End Section-->

<!-- Start -->
<section class="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20" id="contact">
    <ContactOne/>
</section><!--end section-->
<!-- End -->

<!-- Business Partner -->
<section class="py-6 border-t border-b border-gray-100 dark:border-gray-800">
    <Partner/>
</section><!--end section-->
<!-- Business Partner -->

<Footer/>

<ScrollToTop/>

<Switcher/>

<div class={`fixed w-full h-[100vh] top-0 left-0 z-999 ${open ? '' : 'hidden'}`}  style="background-color: rgba(0, 0, 0, 0.5);">
    <div class="w-full h-full flex justify-center items-center">
        <div class="relative px-4 w-full max-w-2xl h-auto">
            <button class="absolute right-0 -top-4 bg-slate-600 p-[2px] rounded z-[9999]" on:click|preventDefault={()=>{open = !open}} ><Icon src={FiX} className="text-slate-300"></Icon></button>
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex justify-between items-start p-0">
                    <iframe width="750" height="400" src="https://www.youtube.com/embed/yba7hPeTSjk?playlist=yba7hPeTSjk&loop=1" title="myFram"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>