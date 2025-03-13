const data = "import Head from 'next/head';\\n\\nconst Home = () => (\\n  <div>\\n    <Head>\\n      <title>Cool Next.js Homepage</title>\\n    </Head>\\n    <h1>Welcome to my awesome Next.js site!</h1>\\n    <p>This is a cool homepage.</p>\\n  </div>\\n);\\n\\nexport default Home;";

const formattedData = data.replace(/\\n/g, '\n'); // Replace all the occurence of \\n with newlines

//For testing purpose for how the data will be displayed
console.log(formattedData); // Display the formatted code
await Bun.write("output.tsx", formattedData);
