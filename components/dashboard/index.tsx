export default function Testing(props: any) {
  return (
    <button className="btn btn-circle btn-primary" onClick={props.clicked}>
      {props.name}
    </button>
  );
}
