 <script>
    import phone from '../assets/images/phone/half-2.png'
 </script>

<div class="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
    <div class="lg:col-span-5 md:col-span-6 md:order-2 order-1">
        <div class="pt-6 px-6 rounded-2xl bg-red-500/5 dark:bg-red-500/10 shadow shadow-red-500/20">
            <img src={phone} alt="">
        </div>
    </div><!--end grid-->

    <div class="lg:col-span-7 md:col-span-6 md:order-1 order-2">
        <div class="lg:me-10">
            <h6 class="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Elegant Design</h6>
            <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Share your photos with <br> friends easily</h4>
            <p class="text-slate-400 max-w-xl">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>

            <ul class="list-none text-slate-400 mt-6">
                <li class="mb-1 flex"><i class="mdi mdi-check text-red-500 text-xl me-2"></i> Digital Marketing Solutions for Tomorrow</li>
                <li class="mb-1 flex"><i class="mdi mdi-check text-red-500 text-xl me-2"></i> Our Talented & Experienced Marketing Agency</li>
                <li class="mb-1 flex"><i class="mdi mdi-check text-red-500 text-xl me-2"></i> Create your own skin to match your brand</li>
            </ul>

            <div class="mt-6">
                <a href="#top" on:click|preventDefault = {()=>{}} class="hover:text-red-500 dark:hover:text-red-500 after:bg-red-500 dark:text-white transition duration-500 font-medium">Learn More <i class="mdi mdi-arrow-right align-middle"></i></a>
            </div>
        </div>
    </div>
</div><!--end grid-->