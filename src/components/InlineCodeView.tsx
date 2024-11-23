import { Editor, useMonaco } from '@monaco-editor/react'
import { useEffect, useRef, useState } from 'react'
import { type Monaco } from '@monaco-editor/react'
import type { editor } from "monaco-editor";
import { useStore } from '@nanostores/react';
import { $theme } from '@/stores/theme';
import { appendbaseUrl } from '@/utils';

type InlineCodeViewProps = {
  language: string,
  readonly?: boolean,
  codeURL?: string | null
  line?: number
}

export const InlineCodeView = ({ language, readonly, codeURL, line }: InlineCodeViewProps) => {
  const monaco = useMonaco();
  const theme = useStore($theme);

  const InlineCodeViewOptions = {
    readOnly: !readonly ? true : readonly,
    minimap: {
      enabled: false
    }
  }

  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const [code, setCode] = useState('');

  const handleEditorDidMount = (editor: editor.IStandaloneCodeEditor, monaco: Monaco) => {
    editorRef.current = editor;

    if (line && line > 0) {
      editor.revealLineInCenter(line);
    }
  }

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("jamz", {
        base: 'vs-dark',
        inherit: true,
        colors: {
          'editor.background': '#1a202c',
        },
        rules: []
      })
    
      if (monaco && theme === 'dark') {
        monaco.editor.setTheme('jamz');
      }
    }

    const fetchCodeData = async () => {
      try {
        if (!codeURL) return;

        const url = appendbaseUrl(codeURL).replaceAll("..", "")
        const response = await fetch(url);

        if (!response.ok) {
          console.error(response.status);
          return;
        }

        const data = await response.text();

        setCode(data);
      }
      catch (err) {
        console.error(err);
      }
    }

    fetchCodeData();
  }, [code, monaco])

  return (
    <Editor
      height="400px"
      language={language}
      theme={theme === 'light' ? 'light' : 'jamz'}
      options={InlineCodeViewOptions}
      value={code}
      onMount={handleEditorDidMount}
    />
  )
}