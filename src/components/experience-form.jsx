import { Form, Input, Space, Button } from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { useContext } from 'react';
import { userContext } from '../App';

const ExperienceForm = () => {

    const {useForm} = Form;
    const [form] = useForm();

    const { userDetails, setUserDetails } = useContext(userContext);

    const onFinish = (values) => {
        console.log(values);
    }

    let addFunction = () => {};
    let removeFunction = (name) => {};

    const addField = () => {
        setUserDetails({
            ...userDetails,
            'experience': [
                ...userDetails.experience,
                {
                    'employer': '',
                    'title': '',
                    'startDate': '',
                    'endDate': '',
                    'location': '',
                    'description': ''
                }
            ]
        })
        addFunction();
    }

    const removeField = (key, name) => {
        setUserDetails({
            ...userDetails,
            'experience': userDetails.experience.filter((exp, i) => i != key)
        })
        removeFunction(name)
    }

    return <div>
         <Form
            form={form}
            layout='vertical'
            onFinish={onFinish}
        >
            <Form.List name="users">
            {(fields, { add, remove }) => (
                <>
                {addFunction = add}
                {removeFunction = remove}
                {fields.map(({ key, name, ...restField }) => (
                    <Space
                        key={key}
                        style={{
                            display: 'flex',
                            marginBottom: 8,
                            flexDirection: 'column'
                        }}
                        align="baseline"
                    >
                    <DeleteOutlined onClick={() => removeField(key, name)} />

                    <div className='flex justify-between gap-2 w-[400px]'>
                        <Form.Item
                            {...restField}
                            name={[name, 'employer']}
                            label={<label className='text-gray-500 text-[16px]'>Employer</label>}
                            className='w-full'
                        >
                            <Input 
                                placeholder="eg Google" 
                                onChange={(e) => setUserDetails({
                                    ...userDetails,
                                    'experience': userDetails.experience.map((exp, i) => i !== key ? exp : {
                                        ...userDetails.experience[i],
                                        'employer': e.target.value
                                    } )
                                })}
                            />
                        </Form.Item>
                        <Form.Item
                            {...restField}
                            name={[name, 'title']}
                            label={<label className='text-gray-500 text-[16px]'>Job Title</label>}
                            className='w-full'
                        >
                            <Input 
                                placeholder="eg Frontend Engineer" 
                                onChange={(e) => setUserDetails({
                                    ...userDetails,
                                    'experience': userDetails.experience.map((exp, i) => i !== key ? exp : {
                                        ...userDetails.experience[i],
                                        'title': e.target.value
                                    } )
                                })}
                            />
                        </Form.Item>
                    </div>

                    <div className='flex justify-between gap-2 w-[400px]'>
                        <Form.Item
                            {...restField}
                            name={[name, 'startDate']}
                            label={<label className='text-gray-500 text-[16px]'>Start Date</label>}
                            className='w-full'
                        >
                            <Input 
                                placeholder="eg July, 2022" 
                                onChange={(e) => setUserDetails({
                                    ...userDetails,
                                    'experience': userDetails.experience.map((exp, i) => i !== key ? exp : {
                                        ...userDetails.experience[i],
                                        'startDate': e.target.value
                                    } )
                                })}    
                            />
                        </Form.Item>
                        <Form.Item
                            {...restField}
                            name={[name, 'endDate']}
                            label={<label className='text-gray-500 text-[16px]'>End Date</label>}
                            className='w-full'
                        >
                            <Input 
                                placeholder="eg May 2024 or Present" 
                                onChange={(e) => setUserDetails({
                                    ...userDetails,
                                    'experience': userDetails.experience.map((exp, i) => i !== key ? exp : {
                                        ...userDetails.experience[i],
                                        'endDate': e.target.value
                                    } )
                                })}    
                            />
                        </Form.Item>
                    </div>

                    <div className='w-[400px]'>
                        <Form.Item
                            {...restField}
                            name={[name, 'location']}
                            label={<label className='text-gray-500 text-[16px]'>Location</label>}
                            className='w-full'
                        >
                            <Input 
                                placeholder="eg. Bangalore, India" 
                                onChange={(e) => setUserDetails({
                                    ...userDetails,
                                    'experience': userDetails.experience.map((exp, i) => i !== key ? exp : {
                                        ...userDetails.experience[i],
                                        'location': e.target.value
                                    } )
                                })}    
                            />
                        </Form.Item>
                    </div>

                    <div className='w-[400px]'>
                        <Form.Item
                            {...restField}
                            name={[name, 'description']}
                            label={<label className='text-gray-500 text-[16px]'>Description</label>}
                            className='w-full'
                            
                        >
                            <Input.TextArea 
                                showCount 
                                maxLength={500} 
                                rows={4} 
                                placeholder="Enter Description " 
                                onChange={(e) => setUserDetails({
                                    ...userDetails,
                                    'experience': userDetails.experience.map((exp, i) => i !== key ? exp : {
                                        ...userDetails.experience[i],
                                        'description': e.target.value
                                    } )
                                })}     
                            />
                        </Form.Item>
                    </div>


                    </Space>
                ))}
                <Form.Item>
                    <Button type="dashed" onClick={addField} block icon={<PlusOutlined />}>
                    Add field
                    </Button>
                </Form.Item>
                </>
            )}
            </Form.List>
        </Form>
    </div>
}

export default ExperienceForm;