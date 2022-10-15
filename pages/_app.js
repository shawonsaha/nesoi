import Layout from "../components/Layout";
import "../styles/globals.css";

// import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // function handleClientResponse(response) {
  //   console.log("Encoded JWT ID token: " + response.credential);
  // }

  // useEffect(() => {
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id:
  //       "436147299900-35o58gbnatlul560fbe2vemquvad0k2o.apps.googleusercontent.com",
  //     callback: handleClientResponse,
  //   });

  //   google.accounts.id.renderButton(document.getElementById("signInDiv"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  // }, []);

  return (
    <Layout>
      <Component {...pageProps} />
      {/* <div id="signInDiv"></div> */}
    </Layout>
  );
}

export default MyApp;
