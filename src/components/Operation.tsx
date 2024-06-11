import { useEffect, useState } from 'react'
import { CodeView } from './CodeView';
import { getFileName } from '@/utils'
import { $theme } from '@/stores/theme';
import { useStore } from '@nanostores/react';

type OperationProps = {
  title: string,
  description: string,
  codeURL: string
  desiredLine?: number
}

export const Operation = ({ title, description, codeURL, desiredLine }: OperationProps) => {
  const theme = useStore($theme);
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState('');

  useEffect(() => {
    const fetchCodeData = async () => {
      try {

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

  const handleClick = () => {
    setIsOpen(!isOpen)

    document.body.classList.toggle('overflow-hidden')
  }

  const defaultContainerClassNames = "rounded-md border flex flex-col";
  const containerLight = "bg-white-smoke-500";
  const containerDark = "bg-raisin-black-600 border-0";

  return (
    <article className={`${defaultContainerClassNames} ${theme === 'light' ? containerLight : containerDark}`}>
      <h3 className="text-2xl text-primary-500 p-4 pb-0">{title}</h3>

      <section>
        {description.split("#").map((paragraph, index) => {
          return <p key={index} className="px-4 py-2 text-left" dangerouslySetInnerHTML={{ __html: paragraph }}></p>
        })}
      </section>

      <button type="button" className="bg-indigo-500 border text-white dark:border-raisin-black-600 py-2 rounded-md mx-4 mb-4" onClick={handleClick}>
        {isOpen ? 'Esconder código' : 'Mostrar código'}
      </button>

      {
        isOpen && <CodeView language={'python'} code={code} readonly={true} fileName={getFileName(codeURL)} handleClick={handleClick} line={desiredLine} />
      }
    </article>
  )
}
