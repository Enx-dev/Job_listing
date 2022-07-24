import React from "react";
import Attribution from "./Components/Attribution";
import Filter from "./Components/Filter";
import Header from "./Components/Header";
import Jobs from "./Components/Jobs";
import { FilterProvider } from "./hooks/useFilter";
function App() {
  return (
    <FilterProvider>
      <section className="px-0 min-h-screen flex flex-col bg-primaryBackground">
        <Header />
        <Filter />
        <Jobs />
        <Attribution />
      </section>
    </FilterProvider>
  );
}

export default App;
