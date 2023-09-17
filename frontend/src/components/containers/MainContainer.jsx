export default function MainContainer(props) {
  return (
    <div className="flex-display w-100pct-h-100vh centre-content flex-wrap bg-charcoal">
      {props.children}
    </div>
  );
}
