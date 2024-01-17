import { useEffect, useState } from 'react'
import { CodeView } from './CodeView';
import { getFileName } from '@/utils'

type OperationProps = {
  title: string,
  description: string,
  codeURL: string
}

export const Operation = ({ title, description, codeURL }: OperationProps) => {

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

  return (
    <article className="bg-surface-300 border border-surface-500 rounded-md flex flex-col">
      <h3 className="text-2xl text-primary-500 p-4 pb-0">{title}</h3>

      <section>
        {description.split("#").map((paragraph, index) => {
          return <p key={index} className="px-4 py-2" dangerouslySetInnerHTML={{ __html: paragraph }}></p>
        })}
      </section>

      <button type="button" className="bg-primary-100 py-2 rounded-md mx-4 mb-4" onClick={handleClick}>
        {isOpen ? 'Esconder código' : 'Mostrar código'}
      </button>

      {
        isOpen && <CodeView language={'python'} code={code} readonly={true} fileName={getFileName(codeURL)} handleClick={handleClick} />
      }
    </article>
  )
}
