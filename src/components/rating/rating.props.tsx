import { ChangeEvent } from 'react';

type RatingProps = {
  setRating: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export type { RatingProps };
