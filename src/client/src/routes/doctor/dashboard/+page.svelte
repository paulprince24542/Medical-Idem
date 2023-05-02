<script>
  import { redirect } from "@sveltejs/kit";

  export function lg() {
    // console.log("Logging Out");
    throw redirect(307, "/");
  }
</script>

<div class="container-fluid">
  <div class="row">
    <div class="col-3" />
  </div>
</div>
