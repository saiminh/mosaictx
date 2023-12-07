import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";
import { Blocks } from "../components/Blocks";
import { ContactForm } from "../components/forms/ContactForm";
import { JoinForm } from "../components/forms/JoinForm";

export default function Page(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Layout
      title={data.page.meta?.title}
      description={data.page.meta?.description}
      metaimg={data.page.meta?.image}
    >
      <Blocks blocks={data.page.blocks} />
      <ContactForm />
      <JoinForm />
    </Layout>
  );
}

// This is an example of a page generated with Serverside Rendering.
// This can be switched to a static page by using getStaticProps
export const getServerSideProps = async ({ params }) => {
  const { data, query, variables } = await client.queries.page({
    relativePath: `${params.slug}.mdx`,
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
