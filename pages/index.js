import Head from "next/head";
import DefaultLayout from "../components/layouts/default-layout";
import PrivacyPolicy from "../components/partials/privacyPolicy";

export default function Home() {
  return (
  <DefaultLayout>
    <PrivacyPolicy />
  </DefaultLayout>
  );
}
