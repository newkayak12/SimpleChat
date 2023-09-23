
function App() {
    const mock = new Array(50).fill("TEST").map((val, idx) => (
            <div key={idx}>{"Main"} {idx + 1}</div>
    ))
  return (
      <>
        <div className={"main"} role={"main"}>
            <div className={"container"}>
                {mock}
            </div>
        </div>
      </>
  );
}

export default App;
