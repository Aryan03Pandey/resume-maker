import {Button, Form, Input} from 'antd'
import { useDispatch } from 'react-redux'
import { setName, setEmail } from '../features/user/user-slice' 
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {

    const {useForm} = Form;
    const [form] = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const saveCreds = (values) => {
        console.log(values);
        dispatch(setName(values.name));
        dispatch(setEmail(values.email));

        navigate('/dashboard');
    }

    return <div className="bg-white">

        <div className='w-[500px] h-fit mx-auto my-40'>
            <Form
                name='authForm'
                form={form}
                layout='vertical'
                onFinish={(values) => saveCreds(values)}
                className='flex flex-col justify-center'
            >   
                <Form.Item
                    name="name"
                    rules={[
                        {required: true, message: "Name required"}
                    ]}
                    label={<label className='font-medium text-[20px]'>Enter Full Name</label>}
                >
                    <Input className='rounded-md border-2' />
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[
                        {required: false, message: "Email required"},
                        {type:"email", message:"Email not valid"}
                    ]}
                    label={<label className='font-medium text-[20px]'>Enter Email</label>}
                >
                    <Input className='rounded-md border-2' />
                </Form.Item>

                <Button htmlType='submit' type='primary' className='bg-black font-medium rounded-full h-12 text-[18px]' >Let's Go</Button>
            </Form>
        </div>

    </div>
}

export default AuthPage;