<script>
  import { Router, Link, Route } from "svelte-routing";
  import IndexOne from "./pages/index-one.svelte";
  import IndexTwo from "./pages/index-two.svelte";
  import IndexThree from "./pages/index-three.svelte";
  import IndexFour from "./pages/index-four.svelte";
  import IndexFive from "./pages/index-five.svelte";
  import IndexSix from "./pages/index-six.svelte";
</script>

<main>
  <Router>
    <Route path='/' component={IndexOne}/>
    <Route path='/index-two' component={IndexTwo}/>
    <Route path='/index-three' component={IndexThree}/>
    <Route path='/index-four' component={IndexFour}/>
    <Route path='/index-five' component={IndexFive}/>
    <Route path='/index-six' component={IndexSix}/>
  </Router>
</main>


