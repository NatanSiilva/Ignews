import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";

import styles from "./post.module.scss";

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <main className={styles.container}>
        {/* a tag article é usada para posts e artigos */}
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          {/* dangerouslySetInnerHTML converte o html trazido do prismic
           para que o react possa renderizalo corretamente.*/}
          {/* !!!IMPORTANT!!!: usar dangerouslySetInnerHTML é perigoso,
           pois pode permitir roubo de dados dos cookies.  */}
          {/* Como aqui esta sendo usado somente para o prismic,
           o prismic assegura o uso dele evitando isso. */}
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req });
  const { slug } = params;

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: `/post/preview/${slug}`,
        permanent: false,
      },
    };
  }

  console.log(JSON.stringify(session, null, 2));

  const prismic = getPrismicClient(req);

  //query de busca por ID
  //slug = id
  const response = await prismic.getByUID("publication", String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: {
      post,
    },
  };
};
