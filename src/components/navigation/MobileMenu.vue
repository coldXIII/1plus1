<template>
  <div class="mini-nav">
    <div class="nav-menu">
      <ul>
        <li>
          <a href=""
            ><ion-icon name="list-circle-outline"></ion-icon>&nbsp;Програми</a
          >
        </li>
        <li>
          <a href=""><ion-icon name="eye-outline"></ion-icon> &nbsp; Шоу</a>
        </li>
        <li>
          <a href=""
            ><ion-icon name="videocam-outline"></ion-icon> &nbsp; Серіали</a
          >
        </li>
        <li>
          <a href=""
            ><ion-icon name="videocam-outline"></ion-icon> &nbsp; Фільми</a
          >
        </li>
        <li>
          <a href=""
            ><ion-icon name="people-outline"></ion-icon> &nbsp; Ведучі</a
          >
        </li>
      </ul>
    </div>
    <form action="" class="mobileForm">
      <input type="text" placeholder="Новини" />
      <i class="fas fa-search"></i>
      <button type="submit">Пошук</button>
    </form>
  </div>
</template>
<script>
export default {};
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  background: var(--black);

  .nav-menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background: var(--black);

    ul {
      display: flex;
      flex-direction: column;

      li {
        display: block;
        list-style: none;
        padding: 0.5rem;
        margin: 0.5rem auto;

        a {
          color: var(--white);
          font-weight: 700;
          font-size: 1.2rem;
        }
      }
    }
  }
  .mobileForm {
    position: relative;
    background: var(--black);

    input {
      position: relative;
      border: none;
      outline: none;
      width: 80%;
      padding: 0.8rem;
      padding-left: 3rem;
      margin: 1rem auto;
      border-radius: 0.5rem;
      color: var(--gray);
      font-size: 1.3rem;
      font-weight: 400;
      margin-left: 3rem;
          }
    button {
      padding: 0.5rem 1.5rem;
      margin: 1rem 40%;
      border: 2px solid var(--white);
      border-radius: 0.5rem;
      color: var(--white);
    }
    i {
      position: absolute;
      top: 32px;
      left: 65px;
      transform: translate(-25px -32px);
      color: var(--gray);
    }
  }
}

@media screen and (max-width: 950px) {
  .input-inner i {
    display: none;
  }
}
</style>
