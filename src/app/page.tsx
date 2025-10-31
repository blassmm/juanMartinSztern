import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <Main />
    </div>
  );
}
