import { useEffect, useState } from "react";
import Modal from "./Modal"
import { useModal } from "./ModalContext"
import axios from "axios";
import { TagList } from "./Tag";
import { Loading } from "./Loading";
import { TagItem } from "./model";

const imageBase = 'https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/previews/';
const defaultTags: TagItem[] = [
    {
        text: 'HTML'
    },
    {
        text: 'CSS'
    },
    {
        text: 'TAILWIND'
    },
    {
        text: 'JAVASCRIPT'
    }
]

const baseUrl = 'https://corsproxy.io/?https://icodethis.com/api/trpc/user.getUserSubmissions,user.getUserBadges?batch=1&input=%7B%220%22%3A%7B%22json%22%3A%7B%22username%22%3A%22maxvo_dev%22%7D%7D%2C%221%22%3A%7B%22json%22%3A%7B%22username%22%3A%22maxvo_dev%22%7D%7D%7D';
const timestamp = new Date().getTime();
const urlWithTimestamp = `${baseUrl}&_=${timestamp}`;


export const LiveProjects = ({ }) => {
    const { openModal } = useModal();
    const [loading, setLoading] = useState<boolean>(true);
    const [submissionData, setSubmissionData] = useState<any[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const config = {
                method: 'get',
                url: urlWithTimestamp,
            };

            try {
                const response = await axios(config);
                setSubmissionData(response.data[0].result.data.json.modes_submission);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); 

    if(loading) return <Loading></Loading>

    return (
        <Modal>
            <Modal.Header className="flex gap-3">
                <h2 className="text-center text-xl text-[#0f0]">Live Projects</h2>
            </Modal.Header>
            <Modal.Body className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] [grid-auto-rows:1fr] gap-3 ">
                {submissionData?.map((submission, index) => (
                    <div key={index}>
                        <section className="aspect-video relative overflow-hidden">
                            <img src={imageBase + submission['img_url']} className="w-full h-full object-cover hover:scale-150 transition-all duration-[10s]" />

                            <button onClick={() => openModal('codepreview', { id: submission['id'] }, true)} type="button" className=" rounded-full bg-[#4B8EB0]/80  py-2 px-5 absolute bottom-3 text-xs text-white right-6 transition-all duration-300 hover:bg-black/50 ">Tap to view</button>
                        </section>

                        <section className="bg-[#1F242E] p-2 space-y-2">
                            <button onClick={() => openModal('codepreview', { id: submission['id'] }, true)} >{submission.title}</button>
                            <TagList className="text-xs" tagsList={defaultTags}></TagList>
                        </section>

                    </div>
                ))}

            </Modal.Body>
        </Modal>)
}   