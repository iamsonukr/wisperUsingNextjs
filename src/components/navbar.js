import Link from 'next/link';
import '../style/navbar.css'
import { getServerSession } from 'next-auth';
import { options } from "../app/api/auth/[...nextauth]/options"

const Navbar = async () => {
  const session = await getServerSession(options)
  return (
    <nav className="navbar">
      <div className="logo">
        <img width={100} src="https://previews.dropbox.com/p/thumb/ACVOO4guJb-FX1WNn1nqtVWgBOxKGe-xeB8vuXiM5px0d_NTSuoTV-ohAbDy5efgOJ4fbvFzeusf2XnMpqLpWsfo--Aj4TvsPLndW0v-2eLMAVq9RstLFRv8SStEtBBMQ0gnHMNG_OQQy0NcOabqrnOqXRNsJHr07OQ9cg0Gi4MA8xlN2Oi12QAqJe7ea-QIH_S5Pq1_R4UFmrKJn2_IUtN34mSFYSMJxuVOnn0NgrbRJ0J2zskxeU1kaMP13aKR1ABTpWzT5u4mM77kT_RK95Ceim3HBEYLmbdoyogLcvHnZJ_7_jVFwildZwsF84RAWN_lw6a_EST8-9nD7WJxwPt0/p.png" alt="d" />
        <p>WISPER</p>
      </div>
      <div className="menus">

        <ul className="nav-list">
          <li className="nav-item">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/recentposts">Recent Posts</Link>
          </li>
          <li className="nav-item">
            <Link href="/myposts">My posts</Link>
          </li>
          <li className="nav-item">
            <Link href="/addpost">Add Blog</Link>
          </li>



          {session ? (<li className="nav-item">
            <Link href="http://localhost:3000/api/auth/signout" style={{ color: 'red' }}>Sign Out</Link>
          </li>) : (
            <>
              <li className="nav-item">
                <Link href="http://localhost:3000/api/auth/signin" style={{ color: 'lime' }}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link href="http://localhost:3000/api/auth/signin" style={{ color: 'lime' }}>Register</Link>
              </li>
            </>
          )}


        </ul>
      </div>
      <div className="icons">

      </div>
    </nav>
  );
};

export default Navbar;