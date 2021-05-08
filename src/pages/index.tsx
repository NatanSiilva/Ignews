import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head"; // Tudo que eu colocar dentro dessa teg Head vai  cair lá dentro do meu cabeçalho no arquivo _document.tsx
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import { toast, ToastContainer } from 'react-toastify';
import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

// formas de fazer chamadas a API
// Client-side - quando eu não preciso de indexeção, quando a página é carregada através de uma ação do usuário e não necessáriamnete quando a página carrega.
// Server-side - utilizamos principalmente  quando precisamos de dados dinamicos da infomação do usário, informações em tempo real do usário.
// Static Site Generation - Utilizamos para casos oque conseguimos gerar um HTML de uma página afim de compatilhar o mesmo HTML com todas as pessoas que estão acessando a mesma aplicação. EX: Home de um blog, post do blog.

// GetServerSideProps (SSR)
// GetStaticProps (SSG)

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
        {/* <ToastContainer/> */}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // const price = await stripe.prices.retrieve("price_1IcJITHXCiVKPM7MErxlUyg3", {
  //   expand: ["product"],
  // });

  const price = await stripe.prices.retrieve("price_1IcJITHXCiVKPM7MErxlUyg3");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
