import Header from './components/Header';

function App() {
  return (
    <>
      <Header
        title="Kopi dan Nyemil"
        studentName="Tsulsi Khoirunisa"
        nim="1247050119"
        cartCount={0}
      />
      <main className="container" id="menu">
        <p>Katalog menu akan tampil di sini.</p>
      </main>
    </>
  );
}

export default App;