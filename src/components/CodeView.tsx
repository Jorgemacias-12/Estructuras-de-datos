import React, { useRef } from 'react';
import { Editor, type Monaco, type OnMount } from '@monaco-editor/react';
import { getLangIcon } from '../utils';
import type monaco from 'monaco-editor'

type CodeViewProps = {
  fileName?: string;
  language: string;
  code: string;
  readonly?: boolean;
  handleClick?: () => void
  line?: number
};

export const CodeView: React.FC<CodeViewProps> = ({ language, code, readonly, fileName, handleClick, line }: CodeViewProps) => {

  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor , monaco: Monaco) => {
    editorRef.current = editor;

    if (line && line > 0 ) {
      editor.revealLineInCenter(line);
    }
  }

  return (
    <section className="fixed top-0 left-0 flex flex-col justify-center w-full bg-surface-100">
      
      <section className="flex justify-between items-center p-4 bg-primary-100">
        <h3 className="flex items-center justify-center font-bold text-center flex-grow gap-2">
          {fileName}
          {
            fileName && <span className={`fab ${getLangIcon(fileName)} fa-xl`}></span>
          }
        </h3>
        <span onClick={handleClick} className="fas fa-times fa-xl hover:text-black transition active:text-red-500"></span>
      </section>
      
      <section className="p-4"> 
        <Editor
          height="100vh"
          width=""
          language={language}
          value={code}
          theme="vs-dark"
          options={{
            readOnly: readonly,
            minimap: {
              enabled: false
            }
          }}
          onMount={handleEditorDidMount}
        />
      </section>
    </section>
  );
};