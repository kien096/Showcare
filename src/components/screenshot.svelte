<script>
  import { onMount } from "svelte";

  import { Lightbox } from 'svelte-lightbox'


  import { screenshortImg } from "../data/data";

  import { tns } from 'tiny-slider/src/tiny-slider';

  onMount(()=>{
    tns({
        container: '.tiny-four-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            992: {
                items: 4
            },

            767: {
                items: 3
            },

            425: {
                items: 1
            },
        },
    });
  })

</script>

<div class="grid grid-cols-1 mt-6 relative">
    <div class="tiny-four-item">
        {#each screenshortImg as item}
            <div class="tiny-slide">
                <Lightbox description="Simple lightbox">
                    <a href="#top" on:click|preventDefault={()=>{}} class="lightbox"><img src={item} alt="Simple lightbox"></a>
                </Lightbox>
            </div>
        {/each}
    </div>
</div>