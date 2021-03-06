import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html>
        <Head />
        <body className="bg-blue-200 text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
