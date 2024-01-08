import Head from "next/head";

const Seo = ({ title }: Ititle) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
    </div>
  );
};

export default Seo;

interface Ititle {
  title: string;
}
