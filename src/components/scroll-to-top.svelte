<!-- svelte-ignore a11y-invalid-attribute -->
<script>
  import { onDestroy, onMount } from "svelte";

    let scroll = false ;

    const handleScroll = () =>{
        scroll = window.scrollY > 50;
    }

    onMount(()=>{
        window.addEventListener('scroll', handleScroll);
    })

    onDestroy(()=>{
        window.removeEventListener('scroll', handleScroll);
    })

    function topFunction(e) {
        e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" })
    }
    
</script>

<a href="#" on:click|preventDefault={(e)=>topFunction(e)}  id="back-to-top" class={`back-to-top fixed text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-red-500 text-white leading-9 ${scroll ? 'block' : 'hidden'}`}><i class="mdi mdi-arrow-up"></i></a>