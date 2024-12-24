<script>
  import Navbar from "../components/navbar.svelte";
  import app from "../assets/images/app.png"
  import play from "../assets/images/play.png"
  import phone from "../assets/images/phone/1.png"
  import Feature from "../components/feature.svelte";
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

<Navbar navLight={false} playBtn={false} bgWhite={false} navCenter={false}/>

<!-- svelte-ignore a11y-invalid-attribute -->
<!-- Start -->
<section class="relative overflow-hidden md:py-36 py-24 bg-slate-50/50 dark:bg-slate-800/20 bg-[url('../../assets/images/bg1.png')] bg-no-repeat bg-center bg-cover" id="home">
    <div class="container relative">
        <div class="grid md:grid-cols-2 grid-cols-1 items-center mt-6 gap-[30px] relative">
            <div class="md:me-6">
                <h6 class="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">App Showcase</h6>
                <h4 class="font-bold lg:leading-normal leading-normal text-[42px] lg:text-[54px] mb-5">Creative way to Showcase your app</h4>
                <p class="text-slate-400 text-lg max-w-xl">Gain valuable insights into user behavior and drive data-informed decision-making with our revolutionary platform.</p>
            
                <div class="mt-6">
                    <a href=""><img src={app} class="h-12 inline-block m-1" alt=""></a>
                    <a href=""><img src={play} class="h-12 inline-block m-1" alt=""></a>
                </div>
            </div>

            <div class="relative">
                <img src={phone} class="mx-auto w-80 rotate-12 relative z-2" alt="">
                <div class="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-red-500/20 via-red-500/70 from-red-500 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 z-1 shadow-md shadow-red-500/10 rounded-full"></div>

                <div class="overflow-hidden after:content-[''] after:absolute after:size-16 after:bg-red-500/20 after:top-0 after:end-6 after:z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>
            </div>
        </div><!--end grid-->
    </div><!--end container-->
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