<script>
  import Navbar from "../../../components/navbar.svelte";
</script>

<div class="container-fluid">
  <div class="row">
    <div class="col-2 p-0">
      <Navbar />
    </div>
    <div class="col-10 p-0">
      <div class="start-bar d-flex justify-content-between">
        <h3>Dashboard</h3>
        <button>Logout</button>
      </div>
      <div class="main-section d-flex justify-content-around">
        <div class="d-cards">
          <h1>Doctors :</h1>
          <p>12</p>
        </div>
        <div class="d-cards">
          <h1>Patients :</h1>
          <p>8</p>
        </div>
        <div class="d-cards">
          <h1>Appoinments :</h1>
          <p>30</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .start-bar {
    background-color: rgb(250, 250, 250);
    color: black;
    padding: 0.8rem;
  }

  .start-bar button {
    border: none;
    width: 4rem;
    border-radius: 0.2rem;
    height: 2rem;
    margin-top: 0.4rem;
    margin-right: 1rem;
    background-color: rgb(53, 53, 199);
    color: white;
  }

  .start-bar button:hover {
    background-color: rgb(45, 45, 139);
  }

  .start-bar h3 {
    margin-left: 1rem;
  }

  .main-section {
    background-color: rgb(235, 225, 225);
    margin: 1rem;
    height: 100vh;
    border-radius: .3rem;
  }

  .d-cards {
    height: 10rem;
    border-radius: .7rem;
    background-color: blueviolet;
    width: 20rem;
    margin-top: 3rem;
  }

  .d-cards h1 {
    margin: 1rem;
    font-size: 2rem;
  }

  .d-cards p {
    font-size: 3rem;
    margin-left: 1.3rem;
  }

  .d-cards:hover{
    background-color: rgb(64, 64, 201);
    transition: 1s;
  }
</style>
