import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../graphql/queries';
import { Card, Loader } from '../../components';
import { Wrapper } from './styles';

interface ICategories {
  onClick: (category: string) => void;
}

const Categories: FC<ICategories> = ({ onClick }) => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <Loader type="Audio" color="secondary" />;

  if (error) return <div>error...</div>;

  return (
    <Wrapper width="70%">
      {data?.categories?.map((category: string) => (
        <Card key={category} onClick={() => onClick(category)}>
          {category}
        </Card>
      ))}
    </Wrapper>
  );
};

export default Categories;
