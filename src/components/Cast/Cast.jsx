import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../Utils/Fetch';
import { NoInfoText } from 'components/NoInfo/NoInfo.styled';
import Spiner from 'components/Spiner/Spiner';
import { CastInfo } from './CastInfo';

export const Cast = () => {
  const [loader, setLoader] = useState(null);
  const [castInfo, setCastInfo] = useState(null);
  const { filmId } = useParams();

  useEffect(() => {
    setLoader('pending');
    fetchCast(filmId)
      .then(data => {
        setCastInfo(data);
        setLoader('resolve');
      })
      .catch(err => {
        console.log(err);
        setLoader('rejected');
      });
  }, [filmId]);

  if (!castInfo) return;

  const { cast } = castInfo.data;
  return (
    <>
      {loader === 'pending' && <Spiner />}
      {loader === 'resolve' && <CastInfo castInfo={cast} />}
      {loader === 'rejected' ||
        (cast.length === 0 && (
          <NoInfoText>Sorry, there is no cast info.</NoInfoText>
        ))}
    </>
  );
};
