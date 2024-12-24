
<!-- Start Footer -->

<script>
    import { Icon } from 'svelte-icons-pack';
    import logo from '../assets/images/logo-light.png'
    import { FiDribbble, FiFacebook, FiInstagram, FiLinkedin, FiMail, FiShoppingCart, FiTwitter } from 'svelte-icons-pack/fi';
    let year = new Date().getFullYear()
</script>


<footer class="py-8 bg-slate-800 dark:bg-gray-900">
    <div class="container">
        <div class="grid md:grid-cols-12 items-center">
            <div class="md:col-span-3">
                <a href="#top" class="logo-footer">
                    <img src={logo} class="md:ms-0 mx-auto" alt="">
                </a>
            </div>

            <div class="md:col-span-5 md:mt-0 mt-8">
                <div class="text-center">
                    <p class="text-gray-400">© {year} Appever. Design & Develop with <i class="mdi mdi-heart text-red-700"></i> by <a href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.</p>
                </div>
            </div>

            <div class="md:col-span-4 md:mt-0 mt-8">
                <ul class="list-none foot-icon ltr:md:text-right rtl:md:text-left text-center">
                    <li class="inline"><a href="https://1.envato.market/appever-svelte" target="_blank" class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-red-500 rounded-md text-slate-300 hover:text-white hover:bg-red-500"><Icon src={FiShoppingCart} className="h-4 w-4 align-middle" title="Buy Now"></Icon></a></li>
                    <li class="inline"><a href="https://dribbble.com/shreethemes" target="_blank" class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-red-500 rounded-md text-slate-300 hover:text-white hover:bg-red-500"><Icon src={FiDribbble} className="h-4 w-4 align-middle" title="dribbble"></Icon></a></li>
                    <li class="inline"><a href="http://linkedin.com/company/shreethemes" target="_blank" class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-red-500 rounded-md text-slate-300 hover:text-white hover:bg-red-500"><Icon src={FiLinkedin} className="h-4 w-4 align-middle" title="Linkedin"></Icon></a></li>
                    <li class="inline"><a href="https://www.facebook.com/shreethemes" target="_blank" class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-red-500 rounded-md text-slate-300 hover:text-white hover:bg-red-500"><Icon src={FiFacebook} className="h-4 w-4 align-middle" title="facebook"></Icon></a></li>
                    <li class="inline"><a href="https://www.instagram.com/shreethemes/" target="_blank" class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-red-500 rounded-md text-slate-300 hover:text-white hover:bg-red-500"><Icon src={FiInstagram} className="h-4 w-4 align-middle" title="instagram"></Icon></a></li>
                    <li class="inline"><a href="https://twitter.com/shreethemes" target="_blank" class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-red-500 rounded-md text-slate-300 hover:text-white hover:bg-red-500"><Icon src={FiTwitter} className="h-4 w-4 align-middle" title="twitter"></Icon></a></li>
                    <li class="inline"><a href="mailto:support@shreethemes.in" class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-red-500 rounded-md text-slate-300 hover:text-white hover:bg-red-500"><Icon src={FiMail} className="h-4 w-4 align-middle" title="email"></Icon></a></li>
                </ul><!--end icon-->
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</footer><!--end footer-->
<!-- End Footer -->