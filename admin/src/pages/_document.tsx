import { Html, Head, Main, NextScript } from 'next/document';
import { FC } from 'react';

const MyDocument:FC = () => {
  return (
    <Html lang='ja-JP'>
      <Head>
        <meta name='application-name' content='tomosuke-blog' />
        <meta name='description' content='ゆすけの技術ブログ 不定期更新' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
