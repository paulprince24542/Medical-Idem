import { goto } from "$app/navigation";
import { fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies, url }) => {
    console.log("Submitted");
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");
    try {
      var fetchResponse = await fetch("http://localhost:8080/patient/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      var res = await fetchResponse.json();

      if (res.status == true) {
        console.log(res);
        cookies.set("auth-token", res.token);
        console.log("Redirecting");
        // throw redirect(307, url.searchParams.get('redirectTo') || "/hospital/dashboard");
        // goto('/hospital/dashboard')
        // return { status:301,redirect: '/' };
        // throw redirect(307, '/');
        return {
          status: true,
        };
        // console.log(url);
        // if (url.searchParams.has("redirectTo")) {
        //   throw redirect(307, url.searchParams.get("redirectTo") || "/");
        // }
      }
    } catch (err) {
      console.log(err);
    }
    // if (!username) {
    //   return fail(400, { username, message: "Username cannot be empty" });
    // }
  },
  //   login: async ({ request }) => {},
};
