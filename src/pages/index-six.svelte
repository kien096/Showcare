<script>
    import Navbar from "../components/navbar.svelte";
    import app from "../assets/images/app.png"
    import play from "../assets/images/play.png"
    import phone from "../assets/images/phone/2-phone.png"
  import { onMount } from "svelte";
  import FeatureThree from "../components/feature-three.svelte";
  import AboutThree from "../components/about-three.svelte";
  import AboutFour from "../components/about-four.svelte";
  import ScreenshotTwo from "../components/screenshot-two.svelte";
  import FaqTwo from "../components/faq-two.svelte";
  import DownloadTwo from "../components/download-two.svelte";
  import ClientTwo from "../components/client-two.svelte";
  import ContactTwo from "../components/contact-two.svelte";
  import PartnerTwo from "../components/partner-two.svelte";
  import Footer from "../components/footer.svelte";
  import ScrollToTop from "../components/scroll-to-top.svelte";
  import Switcher from "../components/switcher.svelte";

    onMount(()=>{
        
    })
</script>

<Navbar navLight={false} playBtn={true} bgWhite={false} navCenter={true}/>

<!-- Start Hero -->
<section class="relative pt-24 xl:pb-[420px] md:pb-80 pb-36 items-center overflow-hidden bg-red-500/5" id="home">
    <div class="absolute inset-0 bg-[url('../../assets/images/map.png')] bg-center bg-no-repeat bg-cover opacity-30"></div>
    <div class="container relative z-10">
        <div class="grid grid-cols-1 mt-10 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
            <h3 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-[56px] mb-5">A better way to connect <br> with your customers</h3>

            <p class="text-slate-500 text-lg max-w-xl mx-auto">Gain valuable insights into user behavior and drive data-informed decision-making with our revolutionary platform.</p>
        
            <div class="mt-6">
                <a href={""}><img src={app} class="h-12 inline-block m-1" alt=""></a>
                <a href={""}><img src={play} class="h-12 inline-block m-1" alt=""></a>
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
    <div class="container relative ">
        <div class="grid grid-cols-1 justify-center">
            <div class="relative z-2 duration-500 xl:-mt-[400px] lg:-mt-[320px] md:-mt-[350px] -mt-[140px] m-0">
                <img src={phone} class="mx-auto w-80 md:w-96 lg:w-[500px] relative z-2 wow animate__animated animate__bounceIn" data-wow-delay=".7s" alt="">
                <div class="absolute overflow-hidden lg:size-[600px] md:size-[450px] sm:size-[400px] size-[320px] bg-gradient-to-tl to-red-500/20 via-red-500/70 from-red-500 bottom-0 translate-x-1/2 start-1/2 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 z-1 shadow-md shadow-red-500/10 rounded-full"></div>
            </div>
        </div>
    </div>
</section>
<!-- End -->

<!-- Start -->
<section class="relative md:py-24 py-16" id="features">
    <FeatureThree/>

    <div class="container relative md:mt-24 mt-16">
        <AboutThree/>
    </div><!--end container-->

    <div class="container relative md:mt-24 mt-16">
        <AboutFour/>
    </div><!--end container-->
</section><!--end section-->
<!-- End -->

 <!-- Start -->
 <section class="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20" id="screenshot">
    <div class="container relative">
        <div class="grid grid-cols-1 pb-6 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
            <h6 class="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Screenshots</h6>
            <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Simple & Beautiful Interface</h4>

            <p class="text-slate-400 max-w-xl mx-auto">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
        </div><!--end grid-->

        <ScreenshotTwo/>
    </div><!--end container-->
</section><!--end section-->
<!-- End -->

<!-- Start -->
<section class="relative overflow-hidden md:py-24 py-16" id="faqs">
    <FaqTwo/>
</section><!--end section-->
<!-- End Section-->

<!-- Start -->
<section class="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20" id="download">
    <DownloadTwo/>
</section><!--end section-->
<!-- End -->

 <!-- Start -->
 <section class="relative md:py-24 py-16" id="reviews">
    <div class="container relative">
        <div class="grid grid-cols-1 pb-6 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
            <h6 class="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Reviews</h6>
            <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">10k+ Customers Trust Us</h4>

            <p class="text-slate-400 max-w-xl mx-auto">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
        </div><!--end grid-->

        <ClientTwo/>
    </div><!--end container-->
</section><!--end section-->
<!-- End Section-->

 <!-- Start -->
 <section class="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20" id="contact">
    <ContactTwo/>
</section><!--end section-->
<!-- End -->
<!-- Business Partner -->
<section class="py-6 border-t border-b border-gray-100 dark:border-gray-800">
    <PartnerTwo/>
</section><!--end section-->
<!-- Business Partner -->
 <Footer/>

 <ScrollToTop/>

 <Switcher/>