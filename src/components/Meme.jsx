export default function Meme(props) {
  return (
    <div>
      <img src={props.image} alt="meme-img" className="w-full rounded" />
    </div>
  );
}
