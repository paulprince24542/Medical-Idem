<script>
  import Navbar from "../../../../components/navbar.svelte";
  async function readNFC() {
    const response = await fetch("http://localhost:8080/nfc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const jsonData = await response.json();
    console.log(jsonData);
  }

  const onChange = () => {
    console.log("Changed");
  };
  var visible = true;
  var searchBar = false;
  function toggleVisibile() {
    visible = !visible;
    searchBar = !searchBar;
  }
</script>

<div class="container-fluid">
  <div class="row">
    <div class="col-2 p-0">
      <Navbar />
    </div>
    <div class="col-10 p-0" style="background-color: rgb(147, 183, 204);">
      <div class="start-bar d-flex justify-content-between">
        <h3>Dashboard</h3>
        <button>Logout</button>
      </div>
      <div class="main-section">
        <div class="d-flex justify-content-between main-control">
          <p>Patient Details</p>
          <button on:click={toggleVisibile}>Search Patient</button>
        </div>

        <hr />
        {#if visible}
          <form class="row g-3">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">First Name</label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Last Name</label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Age</label>
              <input type="number" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Sex</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Sex</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Others</option>
              </select>
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label">Blood Group</label>
              <input type="email" class="form-control" id="inputAddress" />
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label">Date Of Birth</label>
              <input type="date" class="form-control" id="inputAddress" />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputAddress"
                placeholder="user@example.com"
              />
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label">Phone Number</label>
              <input
                type="email"
                class="form-control"
                id="inputAddress"
                placeholder="+91 1234567891"
              />
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label"
                >Alternate Phone</label
              >
              <input
                type="email"
                class="form-control"
                id="inputAddress"
                placeholder="+91 1234567891"
              />
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label">Father's Name</label>
              <input type="text" class="form-control" id="inputAddress" />
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label">Mother's Name</label>
              <input type="text" class="form-control" id="inputAddress" />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">Address 1</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">Address 2</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">State</label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>

            <div class="col-12">
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </form>
        {/if}
        {#if searchBar}
          <form class="form row-3">
            <div class="col-md-10">
              <label for="inputEmail4" class="form-label">Search Patient</label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-4 mt-3">
              <label for="inputEmail4" class="form-label">Search By Type</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">Medical ID</option>
                <option value="2">Name</option>
              </select>
              <button
                class="form-control mt-3"
                id="inputPassword4"
                on:click={readNFC}>Read NFC Card</button
              >
            </div>
            <div class="col-md-2">
              <button class="form-control mt-3" id="inputPassword4"
                >Search</button
              >
            </div>
          </form>
          <hr />
          <div class="d-flex">
            <div class="profile">
              <h4 style="text-align: center;margin-top:1rem">Medical Card</h4>
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt=""
              />
              <h5 style="text-align: center;margin-top:1rem">Paul Prince</h5>
              <div class="id-no">
                <p>IMCA-20-032</p>
              </div>
            </div>
            <div class="profile-table">
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">SL No</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Last Appoinment</th>
                    <th scope="col">Consulted Doctor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<!-- Appointment Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">
          New Appoinment
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Speciality</label
            >
            <!-- <input type="text" class="form-control" id="recipient-name" /> -->
            <select
              class="form-select"
              aria-label="Default select example"
              on:change={onChange}
            >
              <option selected>select</option>
              <option value="1">Radiology</option>
              <option value="2">Cardiology</option>
              <option value="3">General Medicine</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text" />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
          >Close</button
        >
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>

<!-- Admission Modal -->
<div
  class="modal fade"
  id="staticAppointment"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">New Admission</h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">First Name</label
            >
            <input type="text" class="form-control" id="recipient-name" />

            <label for="recipient-name" class="col-form-label">Last Name</label>
            <input type="text" class="form-control" id="recipient-name" />
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text" />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
          >Close</button
        >
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Konkhmer+Sleokchher&display=swap");

  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
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
    /* background-color: rgb(114, 184, 224); */
    margin: 2.5rem;
    height: 100vh;
    border-radius: 0.3rem;
    background-color: rgb(252, 252, 252);
  }

  .main-section form {
    padding: 2rem;
  }

  /* .main-section p {
    font-family: "Poppins", sans-serif;
    padding: 2rem;
    font-size: 2rem;
  } */
  .main-control {
    padding: 2rem;
  }

  .main-control button {
    border: none;
  }

  .profile {
    width: 20rem;
    background-image: url("/images/card2.jpg");
    background-size: cover;

    margin: 1rem;
    height: 24rem;
  }

  .profile img {
    border-radius: 50%;
    width: 130px;
    margin-left: 6rem;
    margin-top: 1rem;
  }

  .id-no {
    height: 2rem;
    margin-top: 1rem;
    text-align: center;
    background-color: azure;
  }

  table {
  }

  .profile-table {
    background-color: beige;
    width: 59rem;
    margin: 1rem;
  }
</style>
