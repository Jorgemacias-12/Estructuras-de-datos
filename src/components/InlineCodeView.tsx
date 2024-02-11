import { Editor } from '@monaco-editor/react'
import React, { useEffect, useState } from 'react'

type InlineCodeViewProps = {
  language: string,
  readonly?: boolean,
  codeURL?: string | null
}

export const InlineCodeView = ({language, readonly, codeURL}: InlineCodeViewProps) => {
  
  const InlineCodeViewOptions = {
    readOnly: !readonly ? true : readonly,
    minimap: {
      enabled: false
    }
  }

  const [code, setCode] = useState('');
  
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
    />
  )
}
