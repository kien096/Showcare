
<script>
// @ts-nocheck

    import { Icon } from 'svelte-icons-pack';
    import {FiDownload ,FiX} from 'svelte-icons-pack/fi'
    import faqImg from '../assets/images/phone/3.png'
    import Countup from "svelte-countup";
    import { faqData } from '../data/data';

    let activeTab = 1

    let open = false;

</script>

<div class="container relative">
    <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
        <div class="relative order-1 md:order-2">
            <div class="relative">
                <img src={faqImg} class="mx-auto md:max-w-xs lg:max-w-sm" alt="">

                <div class="absolute top-24 md:end-14 -end-2 text-center">
                    <a href="#!" on:click|preventDefault={()=>{open = !open}}
                        class="lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center text-white bg-red-500">
                        <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </a>
                </div>
            </div>
            <div class="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tr to-red-500/20 via-red-500/70 from-red-500 bottom-1/2 translate-y-1/2 md:end-0 end-1/2 md:translate-x-0 translate-x-1/2 -z-1 shadow-md shadow-red-500/10 rounded-full"></div>

            <div class="absolute bottom-28 md:start-0 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-52 m-3">
                <div class="flex items-center">
                    <div class="flex items-center justify-center size-[65px] bg-red-500/5 text-red-500 text-center rounded-full me-3">
                        <Icon src={FiDownload} className="size-6"></Icon>
                    </div>
                    <div>
                        <div class="flex-1">
                            <h6 class="text-slate-400">Total Users</h6>
                        </div>
                        <p class="text-xl font-bold"><Countup value={45485} /></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:me-8 order-2 md:order-1">
            <h6 class="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">FAQs</h6>
            <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Have Questions? Look Here</h4>
            <p class="text-slate-400 max-w-xl mx-auto">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
            
            <div class="mt-8">
                {#each faqData as item}
                     <div class={`relative shadow dark:shadow-gray-800 rounded-md overflow-hidden ${item.id === 1 ? '' : 'mt-4'}`}>
                         <h2 class="font-semibold">
                             <button type="button" class={`flex justify-between items-center p-5 w-full font-medium text-start ${activeTab === item.id ? 'bg-slate-50/50 dark:bg-slate-800/20 text-red-500' : ''}`} on:click|preventDefault={()=>{activeTab = item.id}}>
                                 <span>{item.title}</span>
                                 <svg data-accordion-icon class={`size-4 shrink-0 ${item.id === activeTab ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                     <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                 </svg>
                             </button>
                         </h2>
                         <div class={item.id === activeTab ? '' : 'hidden'}>
                             <div class="p-5">
                                 <p class="text-slate-400 dark:text-gray-400">{item.desc}</p>
                             </div>
                         </div>
                     </div>
                {/each}
            </div>

            <div class="mt-6">
                <a href="#top" on:click|preventDefault={()=>{}} class="hover:text-red-500 dark:hover:text-red-500 after:bg-red-500 dark:text-white transition duration-500 font-medium">Find Out More <i class="mdi mdi-arrow-right"></i></a>
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