import { ExternalLink, Github } from 'lucide-react';

interface Work {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  detailedDescription: string;
}

interface Props {
  work: Work
}

export const WorkLinks = (props: Props) => {
  const { work } = props

  return (
    <>
      {work.github && 
        <a
          href={work.github}
          target='blank'
          className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-300 border border-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          <Github className="w-5 h-5 mr-2" />
          Code
        </a>
      }
      {work.demo &&
        <a
          href={work.demo}
          target='blank'
          className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-300 border border-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink className="w-5 h-5 mr-2" />
          サービス
        </a>
      }
    </>
  )
}
