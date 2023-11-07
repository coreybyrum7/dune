// ./app/components/SiteHeader.tsx

// import Remix's link component
import { Form, Link, useNavigation } from "@remix-run/react";

// import type definitions
import type { Profile } from "~/utils/types/Profile";

// component accepts `user` prop to determine if user is logged in
const SiteHeader = ({ user }: { user?: Profile | undefined }) => {
  const navigation = useNavigation()
  return (
    <header className="site-header">
      <div className="wrapper">
        <figure className="site-logo"><Link to="/"><h1>CB</h1></Link></figure>
        <nav className="site-nav">
          <ul className="links">
            {/* show sign out link if user is logged in */}
            {user?.id ?
              <>
                {/* link to user profile */}
                <li>
                  <Link to={`/${user?.slug}`}> Hey, {user?.username}! </Link>
                </li>
                {/* Form component to send POST request to the sign out route */}
                <Form action="/logout" method="post" className="link">
                  <button type="submit" disabled={navigation.state != "idle"} >
                    {navigation.state == "idle" ? "Sign Out" : "Loading..."}
                  </button>
                </Form>
              </> :
              <>
                <li className="link">
                  <Link to='/members'>Members</Link>
                </li>
                <li className="link">
                  <Link to='/blog/all'>Blog</Link>
                </li>
                {/* show sign in and register link if user is not logged in */}
                <li className="link"><Link to="/login">Sign In</Link></li>
                <li className="link"><Link to="/register">Register</Link></li>
              </>
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
