import Head from "next/head"
import Navbar from "./Navbar"

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/2913/2913978.png" />
            </Head>
            <Navbar />
            <div className="mt-8">
                {props.children}
            </div>
        </div>
    )
}

export default Layout