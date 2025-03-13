
import { useEffect } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import { formattedData } from './components/DATA';

function App() {
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      console.log('here is the monaco instance:', monaco);
    }
  }, [monaco]);

  return <Editor height="90vh" width="100vw" defaultValue={formattedData} defaultLanguage="javascript" />;
}

export default App;