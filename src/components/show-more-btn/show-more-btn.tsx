function ShowMoreButton({ OnClick }: { OnClick: () => void }): JSX.Element {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={OnClick}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
