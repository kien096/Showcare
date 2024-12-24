<script>
  import { onMount } from "svelte";


  import { clientData } from "../data/data";
  import { tns } from "tiny-slider";

  onMount(()=>{
    tns({
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
    });
  })

</script>
<div class="grid grid-cols-1 mt-6">
    <div class="tiny-three-item">
        {#each clientData as item}
            <div class="tiny-slide text-center">
                <div class="cursor-e-resize">
                    <div class="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                        <i class="mdi mdi-format-quote-open mdi-48px text-red-500"></i>
                        <p class="text-slate-400">{item.desc}</p>
                        <ul class="list-none mb-0 text-amber-400 mt-3">
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                        </ul>
                    </div>
                    
                    <div class="text-center mt-5">
                        <img src={item.image} class="size-14 rounded-full shadow-md mx-auto" alt="">
                        <h6 class="mt-2 font-semibold">{item.name}</h6>
                        <span class="text-slate-400 text-sm">{item.position}</span>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div><!--end grid-->