import Head from 'next/head';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Reddit Client</title>
                <meta name="description" content="Reddit home page" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://video-react.github.io/assets/video-react.css"
                />
            </Head>
            <header>
                <Navbar />
            </header>
            <main className="pt-16">{children}</main>
            <footer></footer>
        </>
    );
};

export default Layout;
