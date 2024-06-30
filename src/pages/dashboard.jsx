import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from '../components/myDocument';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { FileAddOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

    const name = useSelector(state => state.user.name);
    const email = useSelector(state => state.user.email);
    const navigate = useNavigate();


  return <div>

    <div className="h-[80px] bg-white shadow-lg flex items-center justify-between px-10">
        <div className="flex  items-center gap-2">
            <h1 className="font-medium text-black/40 text-[24px]">Welcome {name}!</h1>
        </div>

        <div>
            <Button 
                type='primary' 
                className='bg-black text-white font-bold h-12 text-[18px] rounded-full' 
                onClick={() => navigate('/create/new')}
            >
                Create New
            </Button>
        </div>

    </div>

    {/* <PDFDownloadLink document={<MyDocument />} fileName="resume.pdf">
      {({ loading }) =>
        loading ? (
          'Loading document...'
        ) : (
          <Button type="primary">Download</Button>
        )
      }
    </PDFDownloadLink> */}

    {/* PopUp for creating new resume */}

    <div className='mt-[20px] p-10'>

        <div 
            onClick={() => navigate('/create/new')}
            className='w-[300px] h-[400px] cursor-pointer flex justify-center items-center rounded-lg shadow-lg border-2 border-[#4096ff]'>
            <div className='text-[#4096ff] text-[20px] flex flex-col gap-2 justify-center items-center' >
                <FileAddOutlined  />
                <p>Create New</p>
            </div>
        </div>

    </div>

  </div>
};

export default Dashboard;
