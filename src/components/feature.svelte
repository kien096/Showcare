
<script>
  import { Icon } from "svelte-icons-pack";

  import { featureOne } from "../data/data";

</script>

<div class="container relative">
    <div class="grid grid-cols-1 pb-6 text-center">
        <h6 class="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Features</h6>
        <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Discover Powerful Features</h4>

        <p class="text-slate-400 max-w-xl mx-auto">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
    </div><!--end grid-->

    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
        {#each featureOne as item}
            <div class={item.active ? 'p-6 shadow-xl shadow-slate-100 dark:shadow-slate-800 transition duration-500 rounded-3xl' : 'p-6 hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800 transition duration-500 rounded-3xl'}>
                <div class="size-16 bg-red-500/5 text-red-500 rounded-2xl flex align-middle justify-center items-center shadow-sm">
                    <Icon src={item.icon} className="size-5"></Icon>
                </div>

                <div class="content mt-7">
                    <a href="#top" on:click|preventDefault={() => {}} class="text-lg hover:text-red-500 dark:text-white dark:hover:text-red-500 transition-all duration-500 ease-in-out font-semibold">{item.title}</a>
                    <p class="text-slate-400 mt-3">{item.desc}</p>
                    
                    <div class="mt-3">
                        <a href="#top" on:click|preventDefault={() => {}} class="hover:text-red-500 dark:hover:text-red-500 after:bg-red-500 dark:text-white transition duration-500">Read More <i class="mdi mdi-arrow-right"></i></a>
                    </div>
                </div>
            </div><!--end content-->
        {/each}
    </div>
</div><!--end container-->