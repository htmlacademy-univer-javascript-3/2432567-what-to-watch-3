import { render, screen } from '@testing-library/react';
import { makeFakeFilmInList } from '../../mocks/mock';
import PreviewVideo from './preview-video';

describe('Component: PreviewPlayer', () => {
  it('should render correct', () => {
    const film = makeFakeFilmInList();

    render(<PreviewVideo film={film} isPlaying />);

    expect(screen.getByTestId('preview-player')).toBeInTheDocument();
  });
});
