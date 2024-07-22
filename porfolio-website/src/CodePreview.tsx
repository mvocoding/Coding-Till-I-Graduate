import Editor from '@monaco-editor/react';
import Modal from './Modal';
import axios from 'axios';
import { useModal } from './ModalContext';
import { useEffect, useState } from 'react';
import { Loading } from './Loading';
import Tab from './Tab';

interface SubmissionDetail {
  html: string;
  css: string;
  js: string;
}

interface Props {
  className?: string;
}

export const CodePreview: React.FC<Props> = ({ className }) => {
  const { params } = useModal();

  const [submissionDetail, setSubmissionDetail] = useState<SubmissionDetail | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      const config = {
        method: 'get',
        url: `https://corsproxy.io/?https%3A%2F%2Ficodethis.com%2Fapi%2Ftrpc%2FdesignToCode.getChallenge%2CdesignToCode.getCompletedSubmissionbyId%3Fbatch%3D1%26input%3D%257B%25220%2522%253A%257B%2522json%2522%253A%257B%2522id%2522%253A%2522152%2522%257D%257D%252C%25221%2522%253A%257B%2522json%2522%253A%257B%2522id%2522%253A%2522${params.id}%2522%257D%257D%257D`
      };

      try {
        const response = await axios(config);
        setSubmissionDetail({
          html: response.data[1].result.data.json.data.meta.html,
          css: response.data[1].result.data.json.data.meta.css,
          js: response.data[1].result.data.json.data.meta.js,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params!.id]);

  if (!submissionDetail) return <Loading />
  return (
    <Modal className='!w-full min-h-screen'>
      <Modal.Header>
        <h2 className="text-center text-xl text-[#0f0]">Code Preview</h2>
      </Modal.Header>
      <Modal.Body className={``}>
        <Tab tabsList={[
          {
            title: 'Preview',
            content: <iframe className='w-full h-full'
            srcDoc={`
<style>
/* scollbar width */
::-webkit-scrollbar {
  width: 10px;
}

/* scollbar - Track */
::-webkit-scrollbar-track {
  background: #343E66;
}

/* scollbar - Handle */
::-webkit-scrollbar-thumb {
  background: #67A8E9;
  border-radius: 5px;
}

/* scollbar - Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #548dc7
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}

${submissionDetail.css}  
</style> 

${submissionDetail.html}
<script>${submissionDetail.js}</script>
`}></iframe>

          },
          {
            title: 'HTML',
            content: <Editor className='[grid-area:html]' theme='vs-dark' defaultLanguage="html" defaultValue={submissionDetail.html} />
          },
          {
            title: 'CSS',
            content: <Editor className='[grid-area:html]' theme='vs-dark' defaultLanguage="html" defaultValue={submissionDetail.css} />
          },
          {
            title: 'Javascript',
            content: <Editor className='[grid-area:html]' theme='vs-dark' defaultLanguage="html" defaultValue={submissionDetail.js} />
          }
        ]}></Tab>
      </Modal.Body>
    </Modal>
  )
}