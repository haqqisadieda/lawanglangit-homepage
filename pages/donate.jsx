import Layout from '../components/Layout';
import PageNotFound from '../components/PageNotFound';
import Head from 'next/head';

export default function Donate() {
    return (
        <Layout>
            <Head>
                <title>Donate</title>
            </Head>
            <div className='flex items-center justify-center w-full h-full'>
                <PageNotFound />
            </div>
        </Layout>
    );
}
