<script>
    import phone from '../assets/images/phone/half-3.png'
    import app from '../assets/images/app.png'
    import play from '../assets/images/play.png'
    import { Icon } from 'svelte-icons-pack';
    import {FiSmartphone} from 'svelte-icons-pack/fi'
 </script>

<div class="container relative">
    <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
        <div class="lg:col-span-5 md:col-span-6">
            <div class="pt-6 px-6 rounded-2xl bg-red-500/5 dark:bg-red-500/10 shadow shadow-red-500/20">
                <img src={phone} class="wow animate__animated animate__zoomIn" alt="" data-wow-delay=".7s">
            </div>
        </div><!--end grid-->

        <div class="lg:col-span-7 md:col-span-6">
            <div class="lg:ms-10">
                <div class="wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                    <h6 class="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Mobile Apps</h6>
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Available for your <br> Smartphones</h4>
                    <p class="text-slate-400 max-w-xl mb-0">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
                </div>
                <div class="my-6">
                    <a href="#top" on:click|preventDefault={()=>{}}><img src={app} class="h-12 inline-block m-1 wow animate__animated animate__fadeInUp" alt="" data-wow-delay=".3s"></a>
                    <a href="#top" on:click|preventDefault={()=>{}}><img src={play} class="h-12 inline-block m-1 wow animate__animated animate__fadeInUp" alt="" data-wow-delay=".5s"></a>
                </div>

                <div class="inline-block wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                    <div class="pt-4 flex items-center border-t border-gray-100 dark:border-gray-800">
                        <Icon src={FiSmartphone} className="me-2 text-red-500 size-10"></Icon>
                        <div class="content">
                            <h6 class="text-base font-medium">Install app now on your cellphones</h6>
                            <a href="#top" on:click|preventDefault={()=>{}} class="hover:text-red-500 dark:hover:text-red-500 after:bg-red-500 dark:text-white transition duration-500 font-medium">Install Now <i class="mdi mdi-arrow-right"></i></a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><!--end gird-->
</div><!--end container-->