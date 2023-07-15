function MyBlackButton(props: any) {
  return (
    <button className="p-2 hover:border rounded-md bg-zinc-950 text-white">
      {props.text}
    </button>
  );
}

export default MyBlackButton;
