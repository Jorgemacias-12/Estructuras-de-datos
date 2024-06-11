import React, { useRef } from 'react';
import { Editor, type Monaco } from '@monaco-editor/react';
import { getLangIcon } from '../utils';
import type monaco from 'monaco-editor'
import { useStore } from '@nanostores/react';
import { $theme } from '@/stores/theme';
import { ThemeSwitcher } from './ThemeSwitcher';

type CodeViewProps = {
  fileName?: string;
  language: string;
  code: string;
  readonly?: boolean;
  handleClick?: () => void
  line?: number
};

export const CodeView: React.FC<CodeViewProps> = ({ language, code, readonly, fileName, handleClick, line }: CodeViewProps) => {
  const theme = useStore($theme);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => {
    editorRef.current = editor;

    if (line && line > 0) {
      editor.revealLineInCenter(line);
    }
  }

  const commonClassNames = "fixed top-0 left-0 flex flex-col justify-center w-full z-10";
  const containerLight = "bg-white-smoke-700";
  const containerDark = "bg-raisin-black";

  return (
    <section className={`${commonClassNames} ${theme === 'light' ? containerLight : containerDark}`}>

      <section className="flex justify-between items-center p-4 bg-primary-100">
        <ThemeSwitcher />
        <h3 className="flex items-center justify-center font-bold text-center flex-grow gap-2">
          {fileName}
          {
            fileName && <span className={`fab ${getLangIcon(fileName)} fa-xl`}></span>
          }
        </h3>
        <span onClick={handleClick} className="fas fa-times fa-xl hover:text-red-400 transition active:text-red-500 cursor-pointer"></span>
      </section>

      <section className="p-4">
        <Editor
          height="100vh"
          width=""
          language={language}
          value={code}
          theme={theme === 'light' ? 'light' : 'jamz'}
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