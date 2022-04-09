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
        <li>
          <input type="text" placeholder=" Новини" />
          <button type="submit">Пошук</button>
        </li>
      </ul>
    </div>
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        margin: 0.5rem auto;
        transition: all 0.5s ease;

           &:hover a {
          color: var(--red);
        }

        a {
          color: var(--white);
          font-weight: 700;
          font-size: 1.2rem;

       
        }

        input {
          position: relative;
          border: none;
          outline: none;
          width: 90%;
          padding: 0.8rem;
          padding-left: 3rem;
          margin: 1rem auto;
          border-radius: 0.5rem;
          color: var(--gray);
          font-size: 1.3rem;
          font-weight: 400;
        }
        button {
          padding: 0.5rem 2rem;
          margin: 1rem 40%;
          border: 2px solid var(--white);
          border-radius: 0.5rem;
          color: var(--white);
        }
      }
    }
  }
}

@media screen and (max-width: 950px) {
  .input-inner i {
    display: none;
  }
}
</style>
