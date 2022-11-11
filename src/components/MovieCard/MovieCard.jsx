import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setLocalStorage, getLocalStorage } from 'Utils/LocalStorage';
import NoImg from '../../components/NoImg/no-photo.png';
import * as SC from './MovieCard.styled';

export const MovieCard = ({
  genres,
  overview,
  popularity,
  title,
  poster_path,
  filmDetails,
}) => {
  const favorite = useRef('myFilms');
  const { filmId } = useParams();
  const [isInFavorite, setIsInFavorite] = useState(false);

  useEffect(() => {
    const savedMovies = getLocalStorage(favorite.current);
    if (
      savedMovies &&
      savedMovies.some(({ data }) => data.id === Number(filmId))
    ) {
      setIsInFavorite(true);
    }
  }, [filmId]);

  const AddToFavotite = () => {
    const isInFavorite = setLocalStorage(favorite.current, filmDetails);
    setIsInFavorite(isInFavorite);
  };
  return (
    <SC.CardWrap>
      <SC.CardImg
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/original/${poster_path}`
            : NoImg
        }
        alt={title}
        style={{ width: '300px' }}
      />
      <div>
        <SC.CardTitle>{title}</SC.CardTitle>
        <SC.CardSubTitle>Rating: </SC.CardSubTitle>
        <SC.CardText>{popularity.toFixed(2)}%</SC.CardText>
        <SC.CardSubTitle>Overview: </SC.CardSubTitle>
        <SC.CardText>{overview}</SC.CardText>
        <SC.CardSubTitle>Genres: </SC.CardSubTitle>
        <SC.CardList>
          {genres.map(({ name }) => (
            <li key={name}> {name} </li>
          ))}
        </SC.CardList>
        <SC.AddButton type="button" onClick={AddToFavotite}>
          {isInFavorite ? 'Remove from Library' : 'Add to Library'}
        </SC.AddButton>
      </div>
    </SC.CardWrap>
  );
};