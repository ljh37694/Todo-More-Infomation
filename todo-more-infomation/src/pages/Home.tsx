import Header from "../components/layout/Header";
import TodoContainer from "../components/todo/TodoContainer";

function Home() {
  return (
    <div className="flex flex-col w-full h-full items-center py-4">
      <Header />
      <TodoContainer />
    </div>
  )
}

export default Home;