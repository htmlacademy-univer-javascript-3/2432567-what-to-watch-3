import { ChangeEvent } from 'react';

type FormData = {
  rating: string;
  reviewText: string;
}

type Evt = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

export type { FormData, Evt };
