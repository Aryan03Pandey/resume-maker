import { Collapse, Button } from 'antd'
import ResumeRender from '../components/resume-render';
import PersonalInfoForm from '../components/personal-info-form';
import EducationForm from '../components/education-form';
import ExperienceForm from '../components/experience-form';
import ProjectForm from '../components/project-form';
import SkillsForm from '../components/skills-form';
import MyDocument from '../components/myDocument';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import { useContext } from 'react';
import { userContext } from '../App';

const CreateNew = () => {

    const {userDetails} = useContext(userContext)
    
    const items = [
    {
        key: '1',
        label: <label className='text-[16px] font-medium'>Personal Info</label>,
        children: <PersonalInfoForm />,
    },
    {
        key: '2',
        label: <label className='text-[16px] font-medium'>Education</label>,
        children: <EducationForm />,
    },
    {
        key: '3',
        label: <label className='text-[16px] font-medium'>Experience</label>,
        children: <ExperienceForm />,
    },
    {
        key: '4',
        label: <label className='text-[16px] font-medium'>Skills</label>,
        children: <SkillsForm />
    },
    {
        key: '5',
        label: <label className='text-[16px] font-medium'>Projects</label>,
        children: <ProjectForm />,
    },
    ];

    return <div className="w-full flex">
        <div className="w-[30%] shadow-lg h-[1754px] ">
            <Collapse  className='bg-white rounded-none' items={items} />

            <PDFDownloadLink document={<MyDocument userDetails={userDetails} />} fileName="resume.pdf">
            {({ loading }) =>
                loading ? (
                'Loading document...'
                ) : (
                <Button type="primary" className='mt-4 ml-2'>Download</Button>
                )
            }
            </PDFDownloadLink>
        </div>

        <div >
            <ResumeRender />
        </div>

        {/* <div style={{ border: '1px solid black', height: '1800px', width: '1300px' }}>
            <PDFViewer width="100%" height="100%">
                
            </PDFViewer>
        </div> */}
    </div>
}

export default CreateNew;