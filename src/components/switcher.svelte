<!-- svelte-ignore a11y-invalid-attribute -->
<script>
  import { Icon } from "svelte-icons-pack";
  import { FiMoon, FiSun } from "svelte-icons-pack/fi";

    const htmlTag = document.getElementsByTagName("html")[0];

    const changeTheme =(e) =>{
        if(htmlTag.className.includes('light')){
            htmlTag.classList.remove('light')
            htmlTag.classList.add('dark')
        }else{
            htmlTag.classList.remove('dark')
            htmlTag.classList.add('light')
        }
    }

   

    const modeChange = (e) => {
    e.preventDefault()
    const switcherRtl = document.getElementById("switchRtl");
        if (switcherRtl && switcherRtl.innerText === "LTR") {
            htmlTag.dir = "ltr";
        } else {
            htmlTag.dir = "rtl";
        }
    }

 
</script>

<!-- Switcher -->
<div class="fixed top-1/4 -right-2 z-3">
    <span class="relative inline-block rotate-90">
        <input type="checkbox" class="checkbox opacity-0 absolute" id="chk" on:change={(e)=>changeTheme(e)}/>
        <label class="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk">
            <Icon src={FiMoon} className="size-4 text-yellow-500"></Icon>
            <Icon src={FiSun} className="size-4 text-yellow-500"></Icon>
            <span class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
        </label>
    </span>
</div>
<!-- Switcher -->

<!-- LTR & RTL Mode Code -->
<div class="fixed top-1/3 -right-3 z-50">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="" id="switchRtl" on:click|preventDefault={(e)=>modeChange(e)}>
        <span class="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden" id="switchRtl" >LTR</span>
        <span class="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden" id="switchRtl">RTL</span>
    </a>
</div>
<!-- LTR & RTL Mode Code -->