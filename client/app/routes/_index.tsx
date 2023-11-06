import { json } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";

// import get profiles function
import { getProfiles } from "~/models/profiles.server";

// loader data type definition
type Loaderdata = {
  // this implies that the "profiles type is whatever type getProfiles resolves to"
  profiles: Awaited<ReturnType<typeof getProfiles>>;
}

// loader for route
export const loader = async () => {
  return json<Loaderdata>({
    profiles: await getProfiles(),
  });
};

export default function Index() {
  // const { profiles } = useLoaderData() as Loaderdata;

  return (
    <section className="site-section profiles-section">
      <div>
        <header className="section-header">
          <h2 className="text-4xl">Dashboard!</h2>
          <p>Welcome to the new hub</p>
        </header>
      </div>
    </section>
  );
}
