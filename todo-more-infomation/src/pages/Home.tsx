import Header from "../components/layout/Header";
import MainLayout from "../components/layout/MainLayout";
import TodoContainer from "../components/todo/TodoContainer";

function Home() {
  return (
    <MainLayout header={<Header />} content={<TodoContainer />} />
  );
}

export default Home;