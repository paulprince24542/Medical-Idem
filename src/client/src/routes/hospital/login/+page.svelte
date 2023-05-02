<script>
  // @ts-ignore
  // async function login(event) {
  //   event.preventDefault();
  //   console.log("ergr")
  // export let data;
  // export let form;
  // console.log(form);
  // }
</script>

<div class="container-fluid">
  <div class="row">
    <div class="col-6 image-section">
      <!-- <img src="/images/patient1.jpg"> -->
    </div>
    <div class="col-6 form-section">
      <form class="d-flex flex-column" method="POST">
        <h1>Hospital Login</h1>
        <label>Username</label>
        <input type="text" name="username" />
        <label>Password</label>
        <input type="password" name="password" />
        <button>Login</button>
      </form>
    </div>
  </div>
</div>

<style>
  .image-section {
    background-image: url("/images/hospital1.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  img {
    width: 50rem;
    height: 100vh;
  }
  .form-section {
    background-color: rgb(232, 232, 232);
    height: 100vh;
  }

  .form-section h1 {
    margin-left: 6rem;
    margin-bottom: 3rem;
  }
  form {
    margin: 12rem 8rem;
  }
  label {
    color: rgb(40, 24, 24);
    margin-top: 1rem;
  }
  input {
    width: 26rem;
    margin-top: 1rem;
    border: none;
    background-color: rgb(226, 225, 223);
    border-radius: 0.2rem;
    height: 2.4rem;
  }
  button {
    margin-top: 3rem;
    width: 40%;
    border: none;
    height: 2.5em;
    margin-left: 7rem;
    background-color: rgb(33, 41, 41);
    border-radius: 0.4rem;
    color: white;
  }
</style>
