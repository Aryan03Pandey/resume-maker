import { Form, Input, Space, Button } from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { useContext } from 'react';
import { userContext } from '../App';

const EducationForm = () => {

    const {useForm} = Form;
    const [form] = useForm();
    const { userDetails, setUserDetails } = useContext(userContext)

    const onFinish = (values) => {
        console.log(values);
    }

    let addFunction = () => {};
    let removeFunction = (name) => {};
    
    const addField = () => {
        setUserDetails({
            ...userDetails,
            'education': [
                ...userDetails.education,
                {   
                    'highestDegree': 'Something',
                    'institure': '',
                    'startYear': '',
                    'endYear': '',
                    'fieldOfStudy': '',
                    'cgpa': ''
                }
            ]
        })
        addFunction();
    }

    const removeField = (key, name) => {
        setUserDetails({
            ...userDetails,
            'education': userDetails.education.filter((edu, i) => i != key)
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
                <>{addFunction = add}
                {removeFunction = remove}
                {
                fields.map(({ key, name, ...restField }) => (
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

                    <div className='flex justify-between gap-2'>
                        <Form.Item
                            {...restField}
                            name={[name, 'degree']}
                            label={<label className='text-gray-500 text-[16px]'>Degree</label>}
                            className='w-full'
                        >
                            <Input 
                                placeholder="eg Bachelor of Technology" 
                                onChange={(e) => setUserDetails({
                                    ...userDetails,
                                    'education': userDetails.education.map((edu, i) => i !== key ? edu : {
                                        ...userDetails.education[i],
                                        'degree': e.target.value
                                    } )
                                })}    
                            />
                        </Form.Item>
                        <Form.Item
                            {...restField}
                            name={[name, 'institute']}
                            label={<label className='text-gray-500 text-[16px]'>Intitute</label>}
                            className='w-full'
                        >
                            <Input 
                                placeholder="Indian Institute of Technology" 
                                onChange={(e) => setUserDetails({
                                    ...userDetails,
                                    'education': userDetails.education.map((edu, i) => i !== key ? edu : {
                                        ...userDetails.education[i],
                                        'institute': e.target.value
                                    } )
                                })}     
                            />
                        </Form.Item>
                    </div>

                    <div className='flex justify-between gap-2'>
                        <Form.Item
                            {...restField}
                            name={[name, 'startYear']}
                            label={<label className='text-gray-500 text-[16px]'>Start Year</label>}
                            className='w-full'
                        >
                            <Input 
                                placeholder="2022" 
                                onChange={(e) => setUserDetails({
                                    ...userDetails,
                                    'education': userDetails.education.map((edu, i) => i !== key ? edu : {
                                        ...userDetails.education[i],
                                        'startYear': e.target.value
                                    } )
                                })}     
                            />
                        </Form.Item>
                        <Form.Item
                            {...restField}
                            name={[name, 'endYear']}
                            label={<label className='text-gray-500 text-[16px]'>End Year</label>}
                            className='w-full'
                        >
                            <Input 
                                placeholder="2026" 
                                onChange={(e) => setUserDetails({
                                    ...userDetails,
                                    'education': userDetails.education.map((edu, i) => i !== key ? edu : {
                                        ...userDetails.education[i],
                                        'endYear': e.target.value
                                    } )
                                })} 
                            />
                        </Form.Item>
                    </div>

                    <div className='flex justify-between gap-2'>
                        <Form.Item
                            {...restField}
                            name={[name, 'fieldOfStudy']}
                            label={<label className='text-gray-500 text-[16px]'>Field of Study</label>}
                            className='w-full'
                        >
                            <Input 
                                placeholder="eg. Computer Science" 
                                onChange={(e) => setUserDetails({
                                    ...userDetails,
                                    'education': userDetails.education.map((edu, i) => i !== key ? edu : {
                                        ...userDetails.education[i],
                                        'fieldOfStudy': e.target.value
                                    } )
                                })}     
                            />
                        </Form.Item>
                        <Form.Item
                            {...restField}
                            name={[name, 'cgpa']}
                            label={<label className='text-gray-500 text-[16px]'>CGPA</label>}
                            className='w-full'
                        >
                            <Input 
                                placeholder="eg 9.2" 
                                onChange={(e) => setUserDetails({
                                    ...userDetails,
                                    'education': userDetails.education.map((edu, i) => i !== key ? edu : {
                                        ...userDetails.education[i],
                                        'cgpa': e.target.value
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

export default EducationForm;