<script>
// @ts-nocheck
    import { onMount } from 'svelte';

    import client1 from '../assets/images/client/01.jpg'
    import client2 from '../assets/images/client/02.jpg'
    import client3 from '../assets/images/client/03.jpg'
    import client4 from '../assets/images/client/04.jpg'
    import client5 from '../assets/images/client/05.jpg'

    import Countup from "svelte-countup";
    import { tns } from 'tiny-slider'
    
    import { Icon } from 'svelte-icons-pack';
    import { FiDownload, FiX } from 'svelte-icons-pack/fi';
    
    import { screenshortImg } from '../data/data';

    let open = false;

    onMount(()=>{
        tns({
            container: '.tiny-single-item',
            items: 1,
            controls: false,
            mouseDrag: true,
            loop: true,
            rewind: true,
            autoplay: true,
            autoplayButtonOutput: false,
            autoplayTimeout: 3000,
            navPosition: "bottom",
            speed: 400,
            gutter: 0,
        });
    })

</script>

<div class="container relative z-1">
    <div class="grid md:grid-cols-2 grid-cols-1 items-center mt-6 gap-[30px] relative">
        <div class="md:me-6">
            <h4 class="font-bold lg:leading-normal leading-normal text-[42px] lg:text-[54px] mb-5">Bring Your App Next Level With Appever</h4>
            <p class="text-slate-400 text-lg max-w-xl">Gain valuable insights into user behavior and drive data-informed decision-making with our revolutionary platform.</p>
        
            <div class="mt-6">
                <a href="#top" class="py-2 px-5 tracking-wider inline-flex items-center justify-center font-medium rounded bg-red-500 text-white">Download Now</a>
            </div>

            <ul class="list-none flex items-center mt-6">
                <li class="inline-block"><img src={client1} class="size-10 rounded-full border-[3px] border-white dark:border-slate-900 shadow dark:shadow-gray-500" alt=""></li>
                <li class="inline-block relative -ms-4"><img src={client2} class="size-10 rounded-full border-[3px] border-white dark:border-slate-900 shadow dark:shadow-gray-500" alt=""></li>
                <li class="inline-block relative -ms-4"><img src={client3} class="size-10 rounded-full border-[3px] border-white dark:border-slate-900 shadow dark:shadow-gray-500" alt=""></li>
                <li class="inline-block relative -ms-4"><img src={client4} class="size-10 rounded-full border-[3px] border-white dark:border-slate-900 shadow dark:shadow-gray-500" alt=""></li>
                <li class="inline-block relative -ms-4"><img src={client5} class="size-10 rounded-full border-[3px] border-white dark:border-slate-900 shadow dark:shadow-gray-500" alt=""></li>
                <li class="inline-block ms-1 text-slate-400 font-medium"><span class="text-slate-900 dark:text-white font-semibold"><Countup value={45485} />+</span> Total app users</li>
            </ul>
        </div>

        <div class="relative">
            <div class="mx-auto w-80">
                <div class="tiny-single-item">
                    {#each screenshortImg as item}
                        <div class="tiny-slide">
                            <img src={item} alt="">
                        </div>
                    {/each}
                </div>
            </div>

            <div class="absolute top-24 md:end-24 -end-2 text-center">
                <a href="#!" on:click|preventDefault={()=>{open = !open}}
                    class="lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center text-white bg-red-500">
                    <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                </a>
            </div>

            <div class="absolute bottom-28 md:start-5 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 m-3 mover">
                <div class="flex items-center">
                    <div class="flex items-center justify-center size-[65px] bg-red-500/5 text-red-500 text-center rounded-full me-3">
                        <Icon src={FiDownload} data-feather="download" class="size-6"></Icon>
                    </div>
                    <div class="flex-1">
                        <h6 class="text-slate-400">Total Download</h6>
                        <p class="text-xl font-bold"><Countup value={45485} /></p>
                    </div>
                </div>
            </div>
        </div>
    </div><!--end grid-->
</div><!--end container-->

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