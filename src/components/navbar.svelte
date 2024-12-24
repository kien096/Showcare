
 <script>
        import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'
        import { onMount, onDestroy } from 'svelte';

        import { FiUser } from 'svelte-icons-pack/fi';
        import logoDark from '../assets/images/logo-dark.png'
        import logoLight from '../assets/images/logo-light.png'
        import app from '../assets/images/appstore.png'
        import play from '../assets/images/playstore.png'

        import { Icon } from 'svelte-icons-pack';
        import { Link } from 'svelte-routing';

        // ------ sticky navbar start ------

        export let navLight
        export let playBtn
        export let bgWhite
        export let navCenter

        let isScrolled = false;

        const handleScroll = () => {
            isScrolled = window.scrollY > 50;
        };

        onMount(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onDestroy(() => {
            window.removeEventListener('scroll', handleScroll);
        });


        // ------ sticky navbar end ------

        // ------ togglemenu start ------

        let showMenu = false

        const toggleMenu = () => {
            showMenu = !showMenu
        }

        // ------ togglemenu end ------


        // ------active navbar start------

        let activeSection = 'home';

        const handle = () => {
            const sections = document.querySelectorAll('section');
            const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

            sections.forEach(section => {
            const offset = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPos >= offset && scrollPos < offset + height) {
                activeSection = section.id;
            }
            });
        };

        onMount(() => {
            window.addEventListener('scroll', handle);
        });

        onDestroy(() => {
            window.removeEventListener('scroll', handle);
        });

        // ------active navbar end------


 </script>


 <!-- Navbar Start -->
 <nav class={`navbar ${bgWhite ? 'bg-white dark:bg-slate-900 shadow dark:shadow-gray-800' : ''}`} id="navbar" class:is-sticky = {isScrolled}>
    <div class="container relative flex flex-wrap items-center justify-between">
        {#if navLight}
            <Link class="navbar-brand" to="/">
                <span class="inline-block dark:hidden">
                    <img src={logoDark} class="l-dark" alt="">
                    <img src={logoLight} class="l-light" alt="">
                </span>
                <img src={logoLight} class="hidden dark:inline-block" alt="">
            </Link>
        {:else}
            <Link class="navbar-brand md:me-8" to="/">
                <img src={logoDark} class="h-5 inline-block dark:hidden" alt="">
                <img src={logoLight} class="h-5 hidden dark:inline-block" alt="">
            </Link>
        {/if}

        <div class="nav-icons flex items-center lg_992:order-2 md:ms-6">
            <!-- Navbar Button -->

            {#if playBtn}
                <ul class="list-none menu-social mb-0">
                    <li class="inline">
                        <a href="#top" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center"><img src={app} alt=""></a>
                    </li>

                    <li class="inline ms-1">
                        <a href="#top" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center"><img src={play} alt=""></a>
                    </li>
                </ul>
            {:else}
                <ul class="list-none menu-social mb-0">
                    <li class="inline">
                        <a href='#top' class="size-8 inline-flex items-center justify-center rounded-full align-middle bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white"><Icon src={FiUser} className="size-4"></Icon></a>
                    </li>
                    <li class="inline">
                        <a href="#top" class="h-8 px-4 text-[12px] tracking-wider inline-flex items-center justify-center font-medium rounded-full bg-red-500 text-white uppercase">Signup</a>
                    </li>
                </ul>
            {/if}
            <!-- Navbar Collapse Manu Button -->
            <button  type="button" class="collapse-btn inline-flex items-center ms-2 text-slate-900 dark:text-white lg_992:hidden" on:click={toggleMenu}>
                <span class="sr-only">Navigation Menu</span>
                <i class="mdi mdi-menu text-[24px]"></i>
            </button>
        </div>

        <!-- Navbar Manu -->
        <div class={`navigation lg_992:order-1 lg_992:flex hidden  ${navCenter ? '' : 'ms-auto'}`} class:hidden = {!showMenu} id="menu-collapse">
            <ul class={`navbar-nav ${navLight ? 'nav-light' : ''}`} id="navbar-navlist">
                <li class="nav-item" class:active={activeSection === 'home'}>
                    <a class="nav-link active" href="#top" use:scrollTo={'home'}>Home</a>
                </li>
                <li class="nav-item" class:active={activeSection === 'features'}>
                    <a class="nav-link" href="#top" use:scrollTo={'features'}>Features</a>
                </li>
                <li class="nav-item" class:active={activeSection === 'screenshot'}>
                    <a class="nav-link" href="#top" use:scrollTo={'screenshot'}>Application</a>
                </li>
                <li class="nav-item" class:active={activeSection === 'faqs'}>
                    <a class="nav-link" href="#top" use:scrollTo={'faqs'}>FAQs</a>
                </li>
                <li class="nav-item" class:active={activeSection === 'download'}>
                    <a class="nav-link" href="#top" use:scrollTo={'download'}>Download</a>
                </li>
                <li class="nav-item" class:active={activeSection === 'reviews'}>
                    <a class="nav-link" href="#top" use:scrollTo={'reviews'}>Reviews</a>
                </li>
                <li class="nav-item" class:active={activeSection === 'contact'}>
                    <a class="nav-link" href="#top" use:scrollTo={'contact'}>Contact us</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<!-- Navbar End -->