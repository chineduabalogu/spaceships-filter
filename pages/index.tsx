import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import SpaceshipApp from "../components/spaceship-app";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  const res = await fetch(
    "https://spaceships-filter.vercel.app/api/spaceships"
  );
  const spaceships = await res.json();

  return {
    props: {
      spaceships,
    },
  };
}

const Home: NextPage = ({ spaceships }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Filter Spaceschips</title>
        <meta
          name="description"
          content="Filter spaceships with Query string"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SpaceshipApp spaceships={spaceships || []} />
      </main>
    </div>
  );
};

export default Home;
