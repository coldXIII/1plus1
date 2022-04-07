<template>
  <div id="app">
    <header>
      <NavMenu />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import NavMenu from './components/navigation/NavMenu.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    NavMenu,
    Footer,
  },
};
</script>

<style lang="scss">

:root {
  --light-gray:#eee;
  --gray: #888;
  --red: #c70025;
  --orange: orange;
  --purple: #ba023b;
  --white: #fff;
  --black: #000;
  }
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: '1plus1', sans-serif;
}
body {
  background: #e5e5e5;
  overflow-x: hidden;
}


@mixin button($color) {
  color: $color;
  background: var(--white);
  padding: 0.5rem 1rem ;
  box-shadow: 5px 5px 5px 0px rgba(170, 170, 170, 0.5);
  border-radius: 1rem;
  font-size: 1rem;
    text-align: center;
    @media (max-width: 995px) {
    font-size: 0.9rem;
  }
  @media (max-width: 750px) {
    font-size: 0.8rem;
  }
}
.btn {
  @include button(var(--gray));
  &:hover {
    @include button(var(--white));
    background: var(--red);
  }
}
.btn-white {
  @include button(var(--white));
  background: #fff5;
  border:2px solid var(--white);
  padding: 0.5rem 1rem 0.7rem;
  &:hover {
    @include button(var(--white));
    background: var(--purple);
  }
}

#app {
    font-family: '1plus1', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
button,
select {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: var(--black);
}
i {
  cursor: pointer;
}
main {
  padding: 0 4rem;
  background: #eee;
  @media (max-width: 900px) {
    padding: 0 3rem;
  }
  @media (max-width: 700px) {
    padding: 0 2rem;
  }
  @media (max-width: 400px) {
    padding: 0 0.5rem;
  }
}

.container {
  width: 100%;
  padding: 1rem;
  padding-top: 3rem;
  background: var(--white);
}

footer {
  width: 100%;
}
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 995px) {
    padding: 1rem 2rem;
     margin: 0.8rem auto;
  }
  @media (max-width: 710px) {
    padding: 1rem;
    justify-content: space-around;
  }
  @media (max-width: 550px) {
    flex-wrap: wrap;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: 600;
      text-align: center;
       
    @media (max-width: 995px) {
      font-size: 1.5rem;
      
    }
    @media (max-width: 750px) {
      font-size: 1rem;
    }
    @media (max-width: 550px) {
      font-size: 1.5rem;
      margin: 0.8rem auto;
    }
  }
}
</style>
