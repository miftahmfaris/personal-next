import Head from "next/head";

const HeadComponent = ({ title }) => {
    return (
        <Head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            <meta name="description" content="Description" />
            <meta name="keywords" content="Keywords" />

            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="manifest" href="/manifest.json" />
            <link
                href="/favicon-16x16-dunplab-manifest-5802.png"
                rel="icon"
                type="image/png"
                sizes="16x16"
            />
            <link
                href="/favicon-32x32-dunplab-manifest-5802.png"
                rel="icon"
                type="image/png"
                sizes="32x32"
            />
            <link
                rel="apple-touch-icon"
                href="/apple-icon-57x57-dunplab-manifest-5802.png"
            ></link>
            <meta name="theme-color" content="#000000" />
        </Head>
    );
};

export default HeadComponent;
