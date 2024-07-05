import { isValid } from "$stores/auth";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { PUBLIC_HOME_URL } from "$env/static/public";
import { member } from "$lib/api/urls";

export const load: PageServerLoad = async ({ fetch })=> {
  const logoutApi = member.logout;
  await fetch(logoutApi.url, {
    method: logoutApi.method,
  });

  isValid.set(false);

	redirect(302, PUBLIC_HOME_URL);
};