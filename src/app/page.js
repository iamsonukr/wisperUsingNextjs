
import '../style/login.css'
import { options } from "./api/auth/[...nextauth]/options"
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Homepara from '../components/homepara'
import Homepara2 from '../components/homeparatwo'


export const revalidate = 10;

const LoginForm = async () => {
  const session = await getServerSession(options)

  return (
    <div className="main">

      <div>
        <Homepara/>
        <Homepara2/>

        {session ? (
          <>
            <div className="welcome">
              <div className="head">
                <img id='imz' src="https://www.voxco.com/wp-content/uploads/2021/06/All-you-need-to-know-about-running-a-successful-VoC-program.jpg" alt="" height={300} width={500} />
              </div>
              <div className='texts'>
                <h1>Welcome</h1>
                <h2>Start Writing your thoughts and let the whole world know it .</h2>
                <h3>"Start writing, no matter what. The water does not flow until the faucet is turned on." — Louis L'Amour</h3>
                <button id='btn' ><Link href='/addpost' id='lk'>Add Blog</Link></button>

              </div>
              {/* <Image src="/wc.jpeg" alt="not avail" width={100} height={100}/> */}


            </div>
            <main className="main">
              <section className="intro">
                <h2>Share Your Thoughts</h2>
                <p>Write, edit, and share your posts with the community.</p>
              </section>
            </main>


          </>
        ) : (
          <>
            <div className="welcome">
              <h1>Start Your Jounrney with blogpost today</h1>
              <h2>and connect with thousands of people</h2>
              <h3>"Start writing, no matter what. The water does not flow until the faucet is turned on." — Louis L'Amour</h3>
              <div className="btns">
                <button id='btn' ><Link href='./api/auth/signin' id='lk'>Register</Link></button>
                <button id='btn' ><Link href='./api/auth/signin' id='lk'>Login</Link></button>
              </div>
            </div>
          </>
        )}

        {/* <img src="../assets/bc.jpg" alt="" /> */}

      </div>

    </div>
  );
};

export default LoginForm;
