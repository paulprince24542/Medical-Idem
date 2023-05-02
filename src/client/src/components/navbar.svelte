<script>
  import { goto } from "$app/navigation";
  function load() {
    goto("/hospital/login");
  }
</script>

<div class="sidebar d-flex flex-column">
  <h1>Medical Idem</h1>
  <a href="/hospital/dashboard"><i class="fa-solid fa-house fa-lg" />Dashboard</a>
  <p />
  <a href="/hospital/dashboard/patients"><i class="fa-solid fa-bed fa-lg" />Patients</a>
  <a href=""><i class="fa-solid fa-vials fa-lg" />Lab</a>
  <p />
  <a href=""><i class="fa-solid fa-user-doctor fa-lg" />Doctors</a>
  <a href=""><i class="fa-solid fa-calendar-check fa-lg" />Appoinments</a>
  <p></p>
  <a on:click={load}><i class="fa-solid fa-right-from-bracket fa-lg" />Logout</a
  >
</div>

<style>
  .sidebar {
    background-color: rgb(250, 250, 250);
    color: rgb(12, 11, 11);
    height: 100vh;
  }
  .sidebar h1 {
    padding: 1.7rem;
    font-size: 2rem;
  }
  .sidebar a {
    text-decoration: none;
    color: rgb(15, 14, 14);
    margin-left: 2px;
    padding: 1rem;
    display: flex;
  }

  .sidebar i {
    margin-top: 0.8rem;
    margin-right: 0.7rem;
  }

  .sidebar a:hover {
    background-color: rgb(17, 52, 250);
    color: white;
  }
</style>
