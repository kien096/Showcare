<script>
  import { Icon } from "svelte-icons-pack";
  import phone from "../assets/images/phone/1.png"


  import { featureThree, featureTwo } from "../data/data";

</script>
<div class="container relative">
    <div class="grid grid-cols-1 pb-6 text-center">
        <h6 class="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Features</h6>
        <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Discover Powerful Features</h4>

        <p class="text-slate-400 max-w-xl mx-auto">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
    </div><!--end grid-->

    <div class="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 mt-6 gap-6 items-center">
        <div class="lg:col-span-4 md:col-span-6 lg:order-1 order-2">
            <div class="grid grid-cols-1 gap-6">
                {#each featureTwo as item}
                    <div class="group flex duration-500 xl:p-3">
                        <div class="flex md:order-2 order-1 align-middle justify-center items-center size-16 mt-1 bg-red-500/5 dark:bg-red-500/10 group-hover:bg-red-500 group-hover:text-white text-red-500 rounded-2xl text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                            <Icon src={item.icon} className="size-5"></Icon>
                        </div>
                        <div class="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                            <h4 class="mb-0 text-lg font-semibold">{item.title}</h4>
                            <p class="text-slate-400 mt-3">{item.desc}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <div class="lg:col-span-4 md:col-span-12 lg:mx-4 lg:order-2 order-1">
            <img src={phone} class="mx-auto" alt="">
        </div>

        <div class="lg:col-span-4 md:col-span-6 order-3">
            <div class="grid grid-cols-1 gap-6">
                {#each featureThree as item}
                    <div class="group flex duration-500 xl:p-3">
                        <div class="flex align-middle justify-center items-center size-16 mt-1 bg-red-500/5 dark:bg-red-500/10 group-hover:bg-red-500 group-hover:text-white text-red-500 rounded-2xl text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                            <Icon src={item.icon} className="size-5"></Icon>
                        </div>
                        <div class="flex-1 ms-4">
                            <h4 class="mb-0 text-lg font-semibold">{item.title}</h4>
                            <p class="text-slate-400 mt-3">{item.desc}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div><!--end grid-->
</div><!--end container-->