import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head />
        <body className="bg-fondo text-gray-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}