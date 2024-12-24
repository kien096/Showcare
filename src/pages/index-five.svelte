<script>
    
    import Feature from "../components/feature.svelte";
    import HomeFiveBanner from "../components/home-five-banner.svelte";
    import Navbar from "../components/navbar.svelte";
    import AboutOne from "../components/about-one.svelte";
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

</script>

<Navbar navLight={false} playBtn={true} bgWhite={false} navCenter={true}/>

<!-- Start -->
<section class="relative overflow-hidden md:py-36 py-24 bg-red-500/10 before:content-[''] before:absolute md:before:bottom-[30rem] sm:before:bottom-[35rem] xl:before:right-[13rem] lg:before:-right-[13rem] md:before:-right-[16rem] sm:before:-right-[15rem] before:w-[55rem] before:h-[25rem] before:rotate-[100deg] before:bg-gradient-to-r before:to-transparent before:via-red-500/50 before:from-red-500 before:z-1" id="home">
    <HomeFiveBanner/>
</section><!--end section-->
<!-- End -->

<!-- Start -->
<section class="relative md:py-24 py-16" id="features">
    <Feature/>

    <div class="container relative md:mt-24 mt-16">
        <AboutOne/>
    </div><!--end container-->

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
