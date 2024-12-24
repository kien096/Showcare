<script>
// @ts-nocheck

    import { Icon } from "svelte-icons-pack";
    import { FiArrowRight, FiMail } from "svelte-icons-pack/fi";

    import Typewriter,{loop} from 'svelte-typewriter'
    
    import phone from "../assets/images/phone/3-phone-half.png"

    import Navbar from "../components/navbar.svelte";
    import AboutOne from "../components/about-one.svelte";
    import AboutTwo from "../components/about-two.svelte";
    import FeatureTwo from "../components/feature-two.svelte";
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

<!-- Start Hero -->
<section class="relative overflow-hidden pt-40 after:content-[''] after:absolute after:inset-0 after:mx-auto after:size-[56rem] after:bg-gradient-to-tl after:to-red-600/40  after:from-indigo-600/40 after:blur-[200px] after:rounded-full after:-z-1" id="home">
    <div class="container relative z-2">
        <div class="grid grid-cols-1 text-center">
            <div class="">
                <h4 class="lg:leading-normal leading-normal text-4xl lg:text-[54px] mb-5">Awesome Mobile App for Your <br><Typewriter mode="loop" cursor={false} delay="1000" interval="100">
                    <span class="typewrite font-bold">Modern Lifestyle</span>
                </Typewriter> </h4>
                <p class="text-slate-500 dark:text-white/60 text-lg max-w-xl mx-auto">Gain valuable insights into user behavior and drive data-informed decision-making with our revolutionary platform.</p>

                <div class="subcribe-form mt-6 mb-3">
                    <form class="relative max-w-lg mx-auto">
                        <Icon src={FiMail} className="size-4 absolute top-[17px] start-5 text-slate-400"></Icon>
                        <input type="email" id="subcribe" name="email" class="form-input border-0 py-4 ps-12 pe-12 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 focus:border-0 focus:ring-0" placeholder="Your Email Address :">
                        <button type="submit" class="size-[46px] inline-flex items-center justify-center rounded-full align-middle absolute top-[2px] end-[3px] bg-red-500 border-red-500 text-white"><Icon src={FiArrowRight} className="size-5"></Icon></button>
                    </form><!--end form-->
                </div>

                <span class="text-slate-500 dark:text-white/60 font-medium">Looking for help? <a href="#top" class="text-red-500">Get in touch with us</a></span>
            </div>
            <div class="relative mt-4 lg:mx-16 z-3">
                <img src={phone} alt="" class="mover">
            </div>
        </div><!--end grid-->
    </div><!--end container-->
</section><!--end section-->
<!-- End Hero -->

<!-- Start -->
<section class="relative md:py-24 py-16" id="features">
    <FeatureTwo/>

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