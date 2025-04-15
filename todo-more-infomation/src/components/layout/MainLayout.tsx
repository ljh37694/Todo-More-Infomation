interface Props {
  header: React.ReactNode;
  content: React.ReactNode;
}

function MainLayout(props: Props) {
  return (
    <div className="flex flex-col h-dvh w-dvw">
      <header className="border h-20">{props.header}</header>
      <main className="border grow">{props.content}</main>
    </div>
  );
}

export default MainLayout;
