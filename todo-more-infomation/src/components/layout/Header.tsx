import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className="h-full flex items-center p-4">
      <section className="w-5">

      </section>

      <section className="grow">

      </section>

      <section className="w-10 flex items-center justify-center">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
      </section>
    </header>
  );
}

export default Header;