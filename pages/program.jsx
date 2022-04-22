import Layout from '../components/Layout';
import PageNotFound from '../components/PageNotFound';
import Head from 'next/head';

export default function Program() {
    const navlist = 2;
    return (
        <Layout navlist={navlist}>
            <Head>
                <title>Program</title>
            </Head>
            <div class='flex items-center justify-center w-full h-full'>
                <PageNotFound />
            </div>
        </Layout>
    );
}
