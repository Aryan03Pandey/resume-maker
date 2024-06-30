import { Form, Input } from 'antd'
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { userContext } from '../App';

const PersonalInfoForm = () => {
    
    const { useForm } = Form;
    const [form] = useForm();

    const {userDetails, setUserDetails} = useContext(userContext);

    // const [name, setName] = 

    return <div>
        <Form
            layout='vertical'
            form={form}
            onFinish={(values) => console.log(values)}
        >
            
            <h1 className='font-bold text-[16px] mb-2'>Personal Info</h1>

            <Form.Item
                name='name'
                label={<label className=' text-gray-500 text-[16px]'>Enter Full Name</label>}
            >
                <Input placeholder='John Doe' className='p-2 font-medium' onChange={(e) => setUserDetails({...userDetails, 'name': e.target.value})} />
            </Form.Item>

            <div className='flex gap-2 justify-between'>
                <Form.Item
                    name='email'
                    label={<label className=' text-gray-500 text-[16px]'>Enter Email</label>}
                    className='w-full'
                >
                    <Input placeholder='john@gmail.com' className='p-2 font-medium' onChange={(e) => setUserDetails({...userDetails, 'email': e.target.value})} />
                </Form.Item>

                <Form.Item
                    name='phone'
                    label={<label className=' text-gray-500 text-[16px]'>Enter Phone</label>}
                    className='w-full'
                >
                    <Input placeholder='+91 9876543210' className='p-2 font-medium' onChange={(e) => setUserDetails({...userDetails, 'phone': e.target.value})} />
                </Form.Item>
            </div>

            <div className='flex gap-2 justify-between'>
                <Form.Item
                    name='address'
                    label={<label className=' text-gray-500 text-[16px]'>Enter Address</label>}
                    className='w-full'
                >
                    <Input placeholder='123 Main Street New Delhi' className='p-2 font-medium' onChange={(e) => setUserDetails({...userDetails, 'address': e.target.value})} />
                </Form.Item>

                <Form.Item
                    name='jobTitle'
                    label={<label className=' text-gray-500 text-[16px]'>Enter Job Title</label>}
                    className='w-full'
                >
                    <Input placeholder='Full Stack Web Developer' className='p-2 font-medium' onChange={(e) => setUserDetails({...userDetails, 'jobTitle': e.target.value})} />
                </Form.Item>
            </div>

            <h1 className='font-bold text-[16px] mb-2'>Links</h1>

            <Form.Item
                name='github'
                layout='horizontal'
                label={<label className=' text-gray-500 text-[16px]'>Github</label>}
            >
                <Input 
                    placeholder='github.com/johnDoe' 
                    className='p-2 font-medium' 
                    onChange={(e) => setUserDetails({
                        ...userDetails, 
                        'links': {
                            ...userDetails.links,
                            'github': e.target.value
                        }
                        })
                    } 
                />
            </Form.Item>

            <Form.Item
                name='linkedIn'
                layout='horizontal'
                label={<label className=' text-gray-500 text-[16px]'>LinkedIn</label>}
            >
                <Input 
                    placeholder='linkedIn.com/johnDoe' 
                    className='p-2 font-medium' 
                    onChange={(e) => setUserDetails({
                        ...userDetails, 
                        'links': {
                            ...userDetails.links,
                            'linkedIn': e.target.value
                        }
                        })
                    } 
                />
            </Form.Item>

            <Form.Item
                name='x'
                layout='horizontal'
                label={<label className=' text-gray-500 text-[16px]'>X</label>}
            >
                <Input 
                    placeholder='x.com/johnDoe' 
                    className='p-2 font-medium' 
                    onChange={(e) => setUserDetails({
                        ...userDetails, 
                        'links': {
                            ...userDetails.links,
                            'x': e.target.value
                        }
                        })
                    }     
                />
            </Form.Item>

        </Form>

    </div>
}

export default PersonalInfoForm;