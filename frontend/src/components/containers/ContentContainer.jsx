export default function ContentContainer(props) {
  return (
    <main className="flex-display responsive centre-content flex-wrap bg-black soft-corners">
      {props.children}
    </main>
  );
}
