interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export function Category(props) {
  return (
    <span className="category">
      Categoria:<span> {props.genre}</span>
    </span>
  );
}
