import { Helmet } from 'react-helmet-async';

interface Props {
  title?: string;
  description?: string;
}

export const Head = ({ description = '', title = '' }: Props) => {
  return (
    <Helmet title={title ? `${title} | Prakat23` : undefined}>
      <meta name="description" content={description} />
    </Helmet>
  );
};
