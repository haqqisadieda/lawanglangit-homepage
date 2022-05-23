import Layout from '../components/Layout';
import PageNotFound from '../components/PageNotFound';
import Head from 'next/head';

export default function About() {
    const navlist = 1;
    return (
        <Layout navlist={navlist}>
            <Head>
                <title>About</title>
            </Head>
            <div className='flex items-center justify-center w-full h-full'>
                <PageNotFound />
            </div>
        </Layout>
    );
}
