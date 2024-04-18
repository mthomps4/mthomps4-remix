import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const message = params.messageId;
  return json({ message });
};

export default function MessageDetailsPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Message</h1>
      <p>{data.message}</p>
    </div>
  );
}
