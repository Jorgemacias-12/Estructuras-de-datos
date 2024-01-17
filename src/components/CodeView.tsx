import React from 'react';
import { Editor, type OnMount } from '@monaco-editor/react';
import { getLangIcon } from '../utils';

type CodeViewProps = {
  fileName?: string;
  language: string;
  code: string;
  readonly?: boolean;
  handleClick?: () => void
};

export const CodeView: React.FC<CodeViewProps> = ({ language, code, readonly, fileName, handleClick }: CodeViewProps) => {

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
        />
      </section>
    </section>
  );
};


// import React, { useRef, useState } from 'react'
// import { Editor, type Monaco,} from '@monaco-editor/react'

// type CodeViewProps = {
//   language: string,
//   code: string,
//   readonly?: boolean
// }

// export const CodeView = ({ language, code, readonly }: CodeViewProps) => {

//   const editorRef = useRef(null);

//   const handleEditorDidMount = (editor: Monaco, monaco: typeof import('') ) => {
//     editorRef.current = editor;

//     const contentHeight = editor.getModel().getLineCount() * 19;
//   }

//   return (
//     <section className="bg-surface-400 p-4">
//       <Editor
//         height="fit-content"
//         width={"400px"}
//         language={language}
//         value={code}
//         theme="vs-dark"
//         options={
//           {
//             readOnly: readonly
//           }
//         }
//         onMount={handleEditorDidMount}
//       />
//     </section>
//   )
// }
