<script lang="ts">
  import Router from 'svelte-spa-router';
  import routes from './routes';
  import "./assets/css/global.css"
  import Header from "./comments/header/index.svelte"
  import Footer from "./comments/footer/index.svelte"
</script>
<main>
  <Header />
  <Router {routes} />
  <Footer />
</main>

