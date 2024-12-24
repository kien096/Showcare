<script>

    import { partner } from "../data/data";
  
  </script>
  
  <div class="container relative">
      <div class="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
          {#each partner as item}
              <div class="mx-auto py-4">
                  <img src={item} class="h-6 wow animate__animated animate__fadeInUp" alt="" data-wow-delay=".1s">
              </div>
          {/each}
      </div><!--end grid-->
  </div><!--end container-->
  
  