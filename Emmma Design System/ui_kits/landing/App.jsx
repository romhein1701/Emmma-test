function App() {
  const [theme, setTheme] = React.useState('dark');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = React.useCallback(
    () => setTheme(t => (t === 'dark' ? 'light' : 'dark')),
    []
  );

  return (
    <React.Fragment>
      <Sprite/>
      <Header theme={theme} onToggleTheme={toggleTheme}/>
      <main>
        <Hero/>
        <div className="hairline"/>
        <Capsules/>
        <Manifesto/>
        <Specs/>
        <Reserve/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}
Object.assign(window, { App });
