interface Props {
  header: React.ReactNode;
  content: React.ReactNode;
}

function MainLayout(props: Props) {
  return (
    <div className="flex flex-col h-dvh w-dvw">
      <header className="h-[10vh]">{props.header}</header>
      <main className="grow">{props.content}</main>
    </div>
  );
}

export default MainLayout;
