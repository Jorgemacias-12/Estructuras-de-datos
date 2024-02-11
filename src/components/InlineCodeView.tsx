import { Editor } from '@monaco-editor/react'
import React, { useEffect, useRef, useState } from 'react'
import { type Monaco } from '@monaco-editor/react'
import type monaco from 'monaco-editor'

type InlineCodeViewProps = {
  language: string,
  readonly?: boolean,
  codeURL?: string | null
  line?: number
}

export const InlineCodeView = ({ language, readonly, codeURL, line }: InlineCodeViewProps) => {

  const InlineCodeViewOptions = {
    readOnly: !readonly ? true : readonly,
    minimap: {
      enabled: false
    }
  }

  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [code, setCode] = useState('');

  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => {
    editorRef.current = editor;

    if (line && line > 0) {
      editor.revealLineInCenter(line);
    }
  }

  useEffect(() => {
    const fetchCodeData = async () => {
      try {
        if (!codeURL) return;

        const response = await fetch(codeURL);

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
  }, [code])

  return (
    <Editor
      height="400px"
      language={language}
      theme='vs-dark'
      options={InlineCodeViewOptions}
      value={code}
      onMount={handleEditorDidMount}
    />
  )
}
